import React from "react";
import { Box, Flex, Text, Image, Spacer, Center } from "@chakra-ui/react";
import bottomWave from "../../Pages/art/bottom.svg";

const TestNav = () => {
  return (
    <Box
      width="100%"
      h="calc(0.149*100vw)"
      backgroundImage={bottomWave}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      {/* 
      <Flex w="30vw">
        <Center>
          <Text>Home</Text>
        </Center>
        <Spacer />
        <Center>
          <Text>About</Text>
        </Center>
        <Spacer />
        <Center>
          <Text>Read our Privacy Policy</Text>
        </Center>
      </Flex> */}
    </Box>
  );
};

export default TestNav;
