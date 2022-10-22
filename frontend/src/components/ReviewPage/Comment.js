import React from "react";
import {
  Spacer,
  Flex,
  Box,
  Center,
  Image,
  MenuItem,
  Button,
  MenuList,
  Text,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const comment = {
  author: "Jane Dofdfsfoe",
  content: `ddddddddddddddddd`,
  date: "now",
  program: "this",
  meta: {
    indRed: 5,
    qualEd: 4,
    acadEnv: 5,
    funEnv: 2,
    finAid: 3,
    thumbsUpOrDown: true,
  },
};
const Comment = () => {
  return (
    <Flex my="8">
      <Box w="55%" display="flex" bgColor="#F0E3DF" h="fit-content">
        <Box mr="8" w="fit-content" h="full">
          <Center>
            <Image
              borderRadius="full"
              boxSize="150px"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Center>
          <Text whiteSpace="nowrap"> {comment.author}</Text>
        </Box>
        <Text fontFamily="Inter" fontSize="20px" fontWeight="400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
          condimentum maximus dolor, et venenatis augue. Nulla cursus ultricies
          urna, quis sodales dui auctor eget. Cras ultrices laoreet ex ut
          eleifend. Sed quam augue, rutrum consectetur venenatis in, lacinia vel
          mi. Donec pharetra arcu mauris, et cursus libero porta non. Sed nec
          nisi diam. Sed odio massa, consequat sit amet ipsum quis, imperdiet
          condimentum eros. Sed condimentum nibh ex, ac faucibus lorem imperdiet
          quis. Duis eleifend non quam a placerat.
        </Text>
      </Box>
      <Box width="fit-content" height="fit-content">
        <Box py="2" alignItems="center">
          <Text
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="400"
            whiteSpace="nowrap"
          >
            Industry Readiness
          </Text>
          <Box w="full" h="fit-content">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  w="15px"
                  h="15px"
                  color={i < comment.meta.indRed ? "#000" : "#FFF7F4"}
                />
              ))}
          </Box>
          <Text
            ml="6"
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="300"
          ></Text>
        </Box>
        <Box py="2" alignItems="center">
          <Text
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="400"
            whiteSpace="nowrap"
          >
            Quality of Education
          </Text>
          <Box w="full" h="fit-content">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  w="15px"
                  h="15px"
                  color={i < comment.meta.qualEd ? "#000" : "#FFF7F4"}
                />
              ))}
          </Box>
          <Text
            ml="6"
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="300"
          ></Text>
        </Box>
        <Box py="2" alignItems="center">
          <Text
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="400"
            whiteSpace="nowrap"
          >
            Academic Environment
          </Text>
          <Box w="full" h="fit-content">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  w="15px"
                  h="15px"
                  color={i < comment.meta.acadEnv ? "#000" : "#FFF7F4"}
                />
              ))}
          </Box>
          <Text
            ml="6"
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="300"
          ></Text>
        </Box>
        <Box py="2" alignItems="center">
          <Text
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="400"
            whiteSpace="nowrap"
          >
            "For Fun" Environment
          </Text>
          <Box w="full" h="fit-content">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  w="15px"
                  h="15px"
                  color={i < comment.meta.funEnv ? "#000" : "#FFF7F4"}
                />
              ))}
          </Box>
          <Text
            ml="6"
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="300"
          ></Text>
        </Box>
        <Box py="2" alignItems="center">
          <Text
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="400"
            whiteSpace="nowrap"
          >
            Financial Aid
          </Text>
          <Box w="full" h="fit-content">
            {Array(5)
              .fill("")
              .map((_, i) => (
                <StarIcon
                  key={i}
                  w="15px"
                  h="15px"
                  color={i < comment.meta.finAid ? "#000" : "#FFF7F4"}
                />
              ))}
          </Box>
          <Text
            ml="6"
            fontFamily="Inter"
            color="#444140"
            fontSize="16px"
            fontWeight="300"
          ></Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Comment;
