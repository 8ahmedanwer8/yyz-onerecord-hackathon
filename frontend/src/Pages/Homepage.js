import React from "react";
import {
  Button,
  Container,
  Drawer,
  Center,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Box,
  Input,
  Spacer,
  VStack,
  Flex,
  Heading,
} from "@chakra-ui/react";

import "../App.css";
import { useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Container backgroundColor="#2A2C36" p="0" h="fit-content" maxW="100%">
      <Box h="100vh">
        <Center h="80%">
          <Box w="fit-content" h="fit-content" textAlign="center">
            <Heading fontFamily="Roboto Flex" color="#FFF" fontSize="96">
              WarePal
            </Heading>
            <Heading
              fontFamily="Poppins"
              color="#FFF"
              fontWeight="300"
              fontSize="48"
            >
              Own your warehouse
            </Heading>
            <Button
              fontFamily="Inter"
              color="#FFF"
              borderRadius="115"
              padding="12"
              backgroundColor="#D0823E"
              m="8"
              fontSize="24"
              _hover={{ opacity: "0.5" }}
              _active={{
                bg: "#C46C20",
                transform: "scale(0.97)",
                borderColor: "#bec3c9",
              }}
            >
              We are a Warehouse
            </Button>
            <Button
              fontFamily="Inter"
              borderRadius="115"
              color="#FFF"
              fontSize="24"
              padding="12"
              backgroundColor="#D0823E"
              _hover={{ opacity: "0.5" }}
              _active={{
                bg: "#C46C20",
                transform: "scale(0.97)",
                borderColor: "#bec3c9",
              }}
              m="8"
            >
              We are an Airlines
            </Button>
          </Box>
        </Center>
      </Box>
    </Container>
  );
};

export default HomePage;
