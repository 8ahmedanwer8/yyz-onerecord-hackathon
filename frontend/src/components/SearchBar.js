import React, { useState } from "react";
import "./SearchBar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {
  MenuButton,
  Button,
  MenuItem,
  Box,
  forwardRef,
  InputRightAddon,
  Input,
  InputGroup,
  MenuList,
  Menu,
  VStack,
} from "@chakra-ui/react";
function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  // const Card = forwardRef<BoxProps, 'div'>((props, ref) => (
  // <Box px='4' py='5' rounded='sm' shadow='lg' ref={ref} {...props} />
  // ))

  return (
    <VStack width="100%" height="100%" py="10" px="10">
      <InputGroup>
        <Input
          fontFamily="Inter"
          fontSize="20px"
          bgColor="#FFF7F4"
          borderRadius="100px"
          size="md"
          w="full"
          placeholder={placeholder}
          _placeholder={{ color: "black", opacity: "75%" }}
        />
        <InputRightAddon
          p="0"
          bgColor="#FFF7F4"
          children={<AiOutlineSearch bgColor="black" />}
          as={Button}
        ></InputRightAddon>
      </InputGroup>
      <Menu isLazy>
        <MenuList height="100px" overflow="scroll">
          {data.map((value, key) => {
            return <MenuItem>{value.title}</MenuItem>;
          })}
        </MenuList>
      </Menu>
    </VStack>
  );
}

export default SearchBar;
