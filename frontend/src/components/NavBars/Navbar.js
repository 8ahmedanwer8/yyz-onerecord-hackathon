import logo from "../../Pages/art/logo.svg";
import topWave from "../../Pages/art/top2.svg";
import { Box, Flex, Text, Image, Spacer, Center } from "@chakra-ui/react";
import "../../App.css";
import SearchBar from "../../components/SearchBar.js";
import data from "../../Pages/data.json";

import { useHistory } from "react-router-dom";

function Navbar({ type, username }) {
  const history = useHistory();
  if (type == 0) {
    return (
      <Box width="100%">
        <Image width="100vw" objectFit="cover" src={topWave}></Image>
        <Box
          position="absolute"
          top="0"
          left="0"
          as="button"
          onClick={() => history.push("/")}
        >
          <Image width="calc(60vw)" src={logo}></Image>
        </Box>

        <Text
          as="button"
          fontFamily="Spline Sans"
          textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          color="#FFF7F4"
          fontSize="24px" //need to set breakpoints
          fontWeight="600"
          position="absolute"
          top="calc(8vh)"
          right="calc(8vw)"
          onClick={() => history.push("/login")}
        >
          {username ? "Hey " + username : "Log in"}
        </Text>
      </Box>
    );
  }
  if (type == 1) {
    return (
      //maybe use hstack here also boxes are letting the items escape out ofthem
      <Box width="100%" px="60" bgColor="#D03E3E" h="fit-content">
        <Flex>
          <Box
            position="absolute"
            as="button"
            onClick={() => history.push("/")}
          >
            {/* gotta make this width of logo responsive */}
            <Image width="calc(50vw)" src={logo}></Image>
          </Box>
          <Spacer />
          <Box w="70%">
            <SearchBar placeholder="Search a different program" data={data} />
          </Box>
          <Spacer />
          <Center>
            <Text
              p="4"
              fontFamily="Spline Sans"
              textShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              color="#FFF7F4"
              fontSize="24px" //need to set breakpoints
              fontWeight="600"
            >
              {username ? "Hey " + username : "Log in"}
            </Text>
          </Center>
        </Flex>
      </Box>
    );
  }
}

export default Navbar;
