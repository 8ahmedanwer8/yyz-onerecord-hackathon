import React, { useEffect, useState } from "react";
import { Container, Text, Box, Spacer, VStack, Flex } from "@chakra-ui/react";
import Navbar from "../components/NavBars/Navbar";
import InfoPanel from "../components/ReviewPage/InfoPanel";
import RatingsPanel from "../components/ReviewPage/RatingsPanel";
import ReviewsPanel from "../components/ReviewPage/ReviewsPanel";

import axios from "axios";

const ReviewPage = () => {
  const [chats, setChats] = useState([]);
  const fetchStats = async () => {
    const { data } = await axios.get("/info");
    console.log(data);
    setChats(data);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Container backgroundColor="#ffa987" p="0" h="full" maxW="100%">
      <Navbar type={1}></Navbar>
      <Flex m="0">
        <InfoPanel></InfoPanel>
        <RatingsPanel></RatingsPanel>
      </Flex>
      <Box px="8">
        <ReviewsPanel></ReviewsPanel>
      </Box>
    </Container>
  );
};

export default ReviewPage;
