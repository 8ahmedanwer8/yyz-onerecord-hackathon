import React from "react";
import {
  Container,
  Text,
  Box,
  Spacer,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/react";
import Navbar from "../components/NavBars/Navbar";
// import SearchBar from "../components/SearchBar";
// import data from "./data.json";

import Login from "../components/Auth/Login";
import TestNav from "../components/NavBars/TestNav";

const LoginPage = () => {
  return (
    <Container backgroundColor="#ffa987" p="0" h="fit-content" maxW="100%">
      <Navbar type="0"></Navbar>
      <Center>
        <Box p="0" w="40%">
          <Login></Login>
        </Box>
      </Center>
      <TestNav></TestNav>
    </Container>
  );
};

export default LoginPage;
