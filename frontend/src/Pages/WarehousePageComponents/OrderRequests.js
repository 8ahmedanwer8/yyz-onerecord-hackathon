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
import WarehouseSidebar from "../../components/WarehouseSidebar";
import "../../App.css";
import { useHistory } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
const OrderRequests = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <Container backgroundColor="#F9F4F5" p="0" h="fit-content" maxW="100%">
      <Box h="100vh">
        <WarehouseSidebar></WarehouseSidebar>
      </Box>
    </Container>
  );
};

export default OrderRequests;
