import {
  Heading,
  Text,
  Box,
  FormControl,
  Input,
  InputRightElement,
  FormLabel,
  VStack,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { useState } from "react";
import "../../App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordBtn, setShowPasswordBtn] = useState("hidden");

  const [showConfPassword, setShowConfPassword] = useState(false);
  const [showConfPasswordBtn, setShowConfPasswordBtn] = useState("hidden");

  const btnShowPassword = () => setShowPassword(!showPassword);
  const btnShowConfPassword = () => setShowConfPassword(!showConfPassword);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [loading, setLoading] = useState(false);

  const toast = useToast();
  const history = useHistory();
  const handlePassword = (e) => {
    setPassword(e);
    if (password && password.length > 1) {
      setShowPasswordBtn("visible");
    } else {
      setShowPasswordBtn("hidden");
    }
  };

  const handleConfPassword = (e) => {
    setConfirmPassword(e);
    if (confirmPassword && confirmPassword.length > 1) {
      setShowConfPasswordBtn("visible");
    } else {
      setShowConfPasswordBtn("hidden");
    }
  };

  const submitHandler = async () => {
    console.log(name, email, password, confirmPassword);
    setLoading(true);
    if (!name || !email || !password || !confirmPassword) {
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
    if (password !== confirmPassword) {
      toast({
        title: "Passwords Do Not Match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    console.log(name, email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const data = await axios.post(
        "/api/user/signup",
        {
          name,
          email,
          password,
        },
        config
      );
      toast({
        title: "Account created",
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

  return (
    <Box width="25%" height="fit-content" spacing="10" bgColor="#FFA987">
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
          Sign up
        </Heading>
        <VStack spacing="4">
          <FormControl id="name">
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Name
            </FormLabel>
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              bgColor="#FFF7F4"
              placeholder="Name"
              _placeholder={{ color: "black", opacity: "50%" }}
              onChange={(e) => setName(e.target.value)}
            ></Input>
          </FormControl>
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
              onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => handlePassword(e.target.value)}
                _placeholder={{ color: "black", opacity: "50%" }}
              ></Input>
              <InputRightElement>
                <Button
                  visibility={showPasswordBtn}
                  p="4"
                  mr="2"
                  size="sm"
                  onClick={btnShowPassword}
                >
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Confirm Password
            </FormLabel>
            <InputGroup>
              <Input
                mb="4"
                type={showConfPassword ? "text" : "password"}
                fontFamily="Inter"
                fontWeight="400"
                fontSize="20px"
                bgColor="#FFF7F4"
                placeholder="Confirm Password"
                onChange={(e) => handleConfPassword(e.target.value)}
                _placeholder={{ color: "black", opacity: "50%" }}
              ></Input>
              <InputRightElement>
                <Button
                  visibility={showConfPasswordBtn}
                  p="4"
                  mr="2"
                  size="sm"
                  onClick={btnShowConfPassword}
                >
                  {showConfPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </VStack>

        <Button
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
          isLoading={loading}
          onClick={submitHandler}
        >
          Create account
        </Button>
      </VStack>
    </Box>
  );
}

export default Signup;
