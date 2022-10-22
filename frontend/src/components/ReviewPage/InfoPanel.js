import React from "react";
import {
  Center,
  Image,
  Heading,
  Text,
  Box,
  Spacer,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import logo from "../../Pages/uniLogos/mcmaster.svg";

const InfoPanel = () => {
  let uni = {};

  let program = {
    name: "Mechatronics Engineering",
    uni: { uni },
    description: `
          Today's designers are faced with the task of combining elements of
          mechanics, electronics, embedded systems and digital signal
          processing, while coping with the miniaturization of components and
          use of prefabricated parts. The synthesis of different technologies is
          already included in modern precision engineering. Continuing
          developments in miniaturization and fabrication will provide further
          challenges for Mechatronics Engineers.`,
    url: "https://www.eng.mcmaster.ca/cas/programs/degree-options/beng/mechatronics",
    comments: ["bruh"],
    meta: {
      indRed: 3,
      qualEd: 3,
      acadEnv: 1,
      funEnv: 2,
      finAid: 3,
    },
  };
  uni = {
    name: "McMaster University",
    programs: [program],
    img: logo,
  };
  return (
    <Box
      mx="8"
      my="8"
      p="8"
      borderRadius="50px"
      alignItems="flex-start"
      width="full"
      height="fit-content"
      bgColor="#F7EBE8"
    >
      <Box display="flex" alignItems="center">
        <Heading
          fontFamily="Spline Sans"
          color="#444140"
          fontSize="36px"
          fontWeight="700"
        >
          {uni.programs[0].name}
        </Heading>
        <Spacer />
        <Heading
          fontFamily="Spline Sans"
          color="#444140"
          fontSize="24px"
          fontWeight="500"
        >
          {uni.name}
        </Heading>
      </Box>
      <Box p="4">
        <Text
          fontFamily="Inter"
          color="#444140"
          textAlign="left"
          fontWeight="400"
          fontSize="20px"
          noOfLines={6}
        >
          {program.description}
        </Text>
        <Box p="0" m="0" display="flex">
          <Text
            pt="2"
            color="#444140"
            fontFamily="Inter"
            opacity="50%"
            fontSize="20px"
            fontWeight="400"
          >
            <Link href={program.url} isExternal>
              Read more
              <ExternalLinkIcon mx="2px" />
            </Link>
          </Text>
          <Spacer />
          <Image boxSize="100px" src={uni.img}></Image>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoPanel;
