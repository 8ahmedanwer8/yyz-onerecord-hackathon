import React from "react";
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
import { unstable_HistoryRouter, useHistory } from "react-router-dom";
function WarehouseSidebar() {
  const history = useHistory();
  return (
    <Box w="20%" h="full" backgroundColor="#2A2C36">
      <Box h="20%" w="full"></Box>
      <Box
        as="button"
        fontFamily="Inter"
        backgroundColor="#2A2C36"
        px="8"
        py="4"
        fontWeight="400"
        fontSize="20px"
        color="#F9F4F5"
        textAlign="left"
        borderRadius="0"
        w="full"
        _hover={{ bg: "#9C50DB" }}
        _active={{
          // bg: "#C46C20",
          opacity: "0.5",
          transform: "scale(0.97)",
          borderColor: "#bec3c9",
        }}
        onClick={() => {
          history.push("/warehouse/order-requests");
        }}
      >
        Order Requests
      </Box>
      <Box
        as="button"
        fontFamily="Inter"
        backgroundColor="#2A2C36"
        px="8"
        py="4"
        fontWeight="400"
        fontSize="20px"
        color="#F9F4F5"
        textAlign="left"
        borderRadius="0"
        w="full"
        onClick={() => {
          history.push("/warehouse/incoming-flights");
        }}
        _hover={{ bg: "#9C50DB" }}
        _active={{
          // bg: "#C46C20",
          opacity: "0.5",
          transform: "scale(0.97)",
          borderColor: "#bec3c9",
        }}
      >
        Incoming Flights
      </Box>
      <Box
        as="button"
        fontFamily="Inter"
        backgroundColor="#2A2C36"
        px="8"
        py="4"
        fontWeight="400"
        fontSize="20px"
        color="#F9F4F5"
        textAlign="left"
        borderRadius="0"
        w="full"
        onClick={() => {
          history.push("/warehouse/your-warehouse");
        }}
        _hover={{ bg: "#9C50DB" }}
        _active={{
          // bg: "#C46C20",
          opacity: "0.5",
          transform: "scale(0.97)",
          borderColor: "#bec3c9",
        }}
      >
        Your Warehouse
      </Box>
      <Box
        as="button"
        fontFamily="Inter"
        backgroundColor="#2A2C36"
        px="8"
        py="4"
        fontWeight="400"
        fontSize="20px"
        color="#F9F4F5"
        textAlign="left"
        borderRadius="0"
        w="full"
        onClick={() => {
          history.push("/warehouse/manage-warehouse");
        }}
        _hover={{ bg: "#9C50DB" }}
        _active={{
          // bg: "#C46C20",
          opacity: "0.5",
          transform: "scale(0.97)",
          borderColor: "#bec3c9",
        }}
      >
        Manage Warehouse
      </Box>
    </Box>
  );
}

export default WarehouseSidebar;
