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
import { useState } from "react";

import { Button } from "@chakra-ui/button";
import "../App.css";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordBtn, setShowPasswordBtn] = useState("hidden");
  const handleShowPasswordBtn = () => setShowPassword(!showPassword);

  const handlePassword = (e) => {
    setPassword(e);
    if (password && password.length > 1) {
      setShowPasswordBtn("visible");
    } else {
      setShowPasswordBtn("hidden");
    }
  };
  const submitHandler = () => {
    console.log("move");
  };

  function handleLogin() {
    //this is basically our dummy login authentication lol
    if (window.location.href == "http://localhost:3000/airlines-login") {
      history.push("/airline/create-orders");
    }
    if (window.location.href == "http://localhost:3000/warehouse-login") {
      history.push("/airline");
    }
  }

  return (
    <Box
      alignItems="flex-start"
      width="full"
      height="fit-content"
      //   px="28"
      //   py="20"
      //   bgColor="#FFA987"
    >
      <VStack
        borderRadius="50px"
        width="100%"
        height="100%"
        py="10"
        px="10"
        bgColor="#D9D9D9"
      >
        <Heading
          fontFamily="Roboto Flex"
          fontSize="64px"
          py="5px"
          color="#2A2C36"
        >
          WarePal
        </Heading>
        <VStack spacing="2">
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#2A2C36"
              fontWeight="400"
              fontSize="20px"
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
              color="#2A2C36"
              fontWeight="400"
              fontSize="20px"
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
        </VStack>

        <Button
          fontFamily="Inter"
          borderRadius="115"
          color="#2A2C36"
          fontSize="20"
          px="8"
          py="6"
          fontWeight="700"
          backgroundColor="#D0823E"
          _hover={{ opacity: "0.5" }}
          _active={{
            bg: "#C46C20",
            transform: "scale(0.97)",
            borderColor: "#bec3c9",
          }}
          onClick={() => {
            handleLogin();
          }}
        >
          Log in
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
