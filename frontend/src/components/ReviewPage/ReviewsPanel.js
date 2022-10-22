import React from "react";
import {
  Box,
  MenuItem,
  Button,
  MenuList,
  Text,
  Menu,
  MenuButton,
} from "@chakra-ui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Comment from "./Comment";

const ReviewsPanel = () => {
  const [currentFilter, setCurrentFilter] = useState("Newest");
  const sortNewest = () => {
    setCurrentFilter("Newest");
  };
  const sortHighToLow = () => {
    setCurrentFilter("High to Low");
  };
  const sortLowToHigh = () => {
    setCurrentFilter("Low to High");
  };
  return (
    <Box p="8" width="full" height="fit-content" bgColor="#F7EBE8">
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          Sort by: {currentFilter}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={sortNewest}>Newest</MenuItem>
          <MenuItem onClick={sortHighToLow}>High to Low</MenuItem>
          <MenuItem onClick={sortLowToHigh}>Low to High</MenuItem>
        </MenuList>
      </Menu>
      <Box my="4">
        <Comment />
        <Comment /> <Comment /> <Comment /> <Comment />
      </Box>
    </Box>
  );
};

export default ReviewsPanel;
