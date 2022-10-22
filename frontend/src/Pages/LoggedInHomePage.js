import React from "react";
import { Container, Text, Box, Spacer, VStack, Flex } from "@chakra-ui/react";
import Navbar from "../components/NavBars/Navbar";
import Login from "../components/Auth/Login";
import TestNav from "../components/NavBars/TestNav";

import SearchBar from "../components/SearchBar";
import data from "./data.json";

import "../App.css";
import { useHistory } from "react-router-dom";

const LoggedInHomePage = () => {
  const history = useHistory();
  return (
    <Container backgroundColor="#ffa987" p="0" h="fit-content" maxW="100%">
      <Navbar type="0" username="Ahmed"></Navbar>
      <Flex h="100vh">
        <VStack
          px="40px"
          py="0"
          spacing="1px"
          alignItems="flex-start"
          width="full"
          height="full"
          bgColor="#FFA987"
        >
          <Text
            fontFamily="'Baloo 2'"
            fontSize="128px"
            ml="3rem"
            fontWeight="700"
          >
            Valedictorian
          </Text>
          <Box width="full">
            <Text
              fontFamily="Spline Sans"
              fontSize="32px"
              fontWeight="400"
              textAlign="center"
            >
              Read about university programs from the students
            </Text>
            <SearchBar
              placeholder="Search programs from institutions across North America"
              data={data}
            />
          </Box>
        </VStack>
      </Flex>
      <TestNav></TestNav>
    </Container>
  );
};

export default LoggedInHomePage;
