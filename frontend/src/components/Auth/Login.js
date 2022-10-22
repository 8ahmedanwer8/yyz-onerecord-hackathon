import {
  Heading,
  Text,
  Box,
  FormControl,
  Input,
  FormLabel,
  VStack,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { useState, createContext, useContext } from "react";

import { Button } from "@chakra-ui/button";
import "../../App.css";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import GoogleUsernameModal from "../Miscellaneous/GoogleUsernameModal";
import LoginContext from "../Context/LoginContext";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordBtn, setShowPasswordBtn] = useState("hidden");
  const handleShowPasswordBtn = () => setShowPassword(!showPassword);
  const { enterGoogleUsername, setEnterGoogleUsername, setNewGoogleUserEmail } =
    useContext(LoginContext);
  console.log(useContext(LoginContext));

  const handlePassword = (e) => {
    setPassword(e);
    if (password && password.length > 1) {
      setShowPasswordBtn("visible");
    } else {
      setShowPasswordBtn("hidden");
    }
  };
  const submitHandler = async () => {
    console.log(email, password);
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }

    console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "/api/user/signin",
        {
          email,
          password,
        },
        config
      );
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", data);
      setLoading(false);
      history.push("/");
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  function handleGoogleSignUp(email) {
    console.log(email);
    setNewGoogleUserEmail(email);
    setEnterGoogleUsername(true);
  }
  const GoogleSignIn = async (googleAccessToken) => {
    console.log(googleAccessToken);
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "/api/user/google-signin",
        {
          googleAccessToken,
        },
        config
      );
      console.log(data);
      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", data);
      setLoading(false);
      history.push("/");
    } catch (error) {
      if (error.response.status == 300) {
        setLoading(false);
        handleGoogleSignUp(error.response.data.email);
      } else {
        console.log(error);
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    }
  };

  const handleGoogleSignIn = useGoogleLogin({
    onSuccess: (tokenResponse) => GoogleSignIn(tokenResponse),
  });

  return (
    <Box
      alignItems="flex-start"
      width="full"
      height="fit-content"
      spacing="10"
      px="28"
      py="20"
      bgColor="#FFA987"
    >
      <VStack
        borderRadius="50px"
        width="100%"
        height="100%"
        py="10"
        px="10"
        bgColor="#444140"
      >
        <Heading
          fontFamily="Spline Sans"
          fontSize="40px"
          py="5px"
          color="#FFF7F4"
          fontWeight="600"
        >
          Log in
        </Heading>
        <VStack spacing="2">
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Email
            </FormLabel>
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              bgColor="#FFF7F4"
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              _placeholder={{ color: "black", opacity: "50%" }}
            ></Input>
          </FormControl>
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Password
            </FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                fontFamily="Inter"
                fontWeight="400"
                fontSize="20px"
                bgColor="#FFF7F4"
                placeholder="Password"
                onChange={(e) => {
                  handlePassword(e.target.value);
                }}
                _placeholder={{ color: "black", opacity: "50%" }}
              ></Input>
              <InputRightElement>
                <Button
                  visibility={showPasswordBtn}
                  p="4"
                  mr="2"
                  size="sm"
                  onClick={handleShowPasswordBtn}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Box width="full">
            <Text
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              color="#FFF7F4"
              opacity="50%"
              textAlign="right"
            >
              Forget Password
            </Text>
          </Box>
          <Button
            width="60%"
            px="10"
            borderRadius="15px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            height="60px"
            fontSize="20px"
            fontFamily="Spline Sans"
            fontWeight="600"
            color="#FFF7F4"
            bgColor="#1E1E24"
            onClick={submitHandler}
            isLoading={loading}
            _hover={{ bg: "#000" }}
            _active={{
              bg: "#000",
            }}
          >
            Log in
          </Button>

          <Button
            onClick={() => handleGoogleSignIn()}
            leftIcon={<FcGoogle />}
            width="90%"
            px="30px"
            borderRadius="50px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            height="60px"
            fontSize="20px"
            fontFamily="Spline Sans"
            fontWeight="600"
            color="#FFF7F4"
            bgColor="#1E1E24"
            _hover={{ bg: "#000" }}
            _active={{
              bg: "#000",
            }}
          >
            Continue with Google
          </Button>
        </VStack>
        <Text
          fontFamily="Inter"
          fontWeight="400"
          fontSize="20px"
          color="#FFF7F4"
          opacity="50%"
        >
          Don't have an account?
        </Text>
        <Button
          as="button"
          width="90%"
          px="10"
          borderRadius="15px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          height="60px"
          fontSize="20px"
          fontFamily="Spline Sans"
          fontWeight="600"
          color="#FFF7F4"
          bgColor="#E54B4B"
          _hover={{ bg: "#cc3737" }}
          _active={{
            bg: "#ba2222",
          }}
          onClick={() => history.push("/create-account")}
        >
          Create an account
        </Button>
      </VStack>
      <GoogleUsernameModal></GoogleUsernameModal>
    </Box>
  );
}

export default Login;
