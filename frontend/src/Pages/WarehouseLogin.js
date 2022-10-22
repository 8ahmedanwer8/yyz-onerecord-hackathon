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
import Login from "../components/Login";
import "../App.css";
import { useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
const WarehouseLogin = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Container backgroundColor="#F9F4F5" p="0" h="fit-content" maxW="100%">
      <Box h="100vh">
        <Center h="80%">
          <Box w="fit-content" h="fit-content" textAlign="center">
            <Login></Login>
          </Box>
        </Center>
      </Box>
    </Container>
  );
};

export default WarehouseLogin;
