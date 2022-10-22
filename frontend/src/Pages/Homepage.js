import React from "react";
import {
  Button,
  Container,
  Drawer,
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
    <Container backgroundColor="#F9F4F5" p="0" h="fit-content" maxW="100%">
      <Heading>page that asks if ur an airlines or a warehouse</Heading>
    </Container>
  );
};

export default HomePage;
