import React from "react";
import { Spacer, Text, Box } from "@chakra-ui/react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const RatingsPanel = () => {
  return (
    <Box
      mx="8"
      my="8"
      px="8"
      py="6"
      borderRadius="50px"
      alignItems="flex-start"
      width="full"
      height="fit-content"
      bgColor="#F7EBE8"
    >
      <Box display="flex" py="2" alignItems="center">
        <Text
          fontFamily="Spline Sans"
          color="#444140"
          fontSize="24px"
          fontWeight="500"
          whiteSpace="nowrap"
        >
          Industry Readiness
        </Text>
        <Spacer />
        <Box display="flex" alignItems="center">
          <Box w="70px" h="70px">
            <CircularProgressbar
              value={40}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#FFF7F4",
                trailColor: "#1E1E24",
              })}
            />
          </Box>
          <Text
            ml="6"
            fontFamily="Spline Sans"
            color="#444140"
            fontSize="24px"
            fontWeight="300"
          >
            40%
          </Text>
        </Box>
      </Box>
      <Box display="flex" py="2" alignItems="center">
        <Text
          fontFamily="Spline Sans"
          color="#444140"
          fontSize="24px"
          whiteSpace="nowrap"
          fontWeight="500"
        >
          Quality of Education
        </Text>
        <Spacer />

        <Box display="flex" alignItems="center">
          <Box w="70px" h="70px">
            <CircularProgressbar
              value={40}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#FFF7F4",
                trailColor: "#1E1E24",
              })}
            />
          </Box>
          <Text
            ml="6"
            fontFamily="Spline Sans"
            color="#444140"
            fontSize="24px"
            fontWeight="300"
          >
            40%
          </Text>
        </Box>
      </Box>
      <Box display="flex" py="2" alignItems="center">
        <Text
          fontFamily="Spline Sans"
          color="#444140"
          fontSize="24px"
          fontWeight="500"
          whiteSpace="nowrap"
        >
          Academic Environment
        </Text>
        <Spacer />

        <Box display="flex" alignItems="center">
          <Box w="70px" h="70px">
            <CircularProgressbar
              value={40}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#FFF7F4",
                trailColor: "#1E1E24",
              })}
            />
          </Box>
          <Text
            ml="6"
            fontFamily="Spline Sans"
            color="#444140"
            fontSize="24px"
            fontWeight="300"
          >
            40%
          </Text>
        </Box>
      </Box>
      <Box display="flex" py="2" alignItems="center">
        <Text
          fontFamily="Spline Sans"
          color="#444140"
          fontSize="24px"
          fontWeight="500"
          whiteSpace="nowrap"
        >
          "For Fun" Environment
        </Text>
        <Spacer />

        <Box display="flex" alignItems="center">
          <Box w="70px" h="70px">
            <CircularProgressbar
              value={40}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#FFF7F4",
                trailColor: "#1E1E24",
              })}
            />
          </Box>
          <Text
            ml="6"
            fontFamily="Spline Sans"
            color="#444140"
            fontSize="24px"
            fontWeight="300"
          >
            40%
          </Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center">
        <Text
          fontFamily="Spline Sans"
          color="#444140"
          fontSize="24px"
          fontWeight="500"
          whiteSpace="nowrap"
        >
          Financial Aid
        </Text>
        <Spacer />

        <Box display="flex" alignItems="center">
          <Box w="70px" h="70px">
            <CircularProgressbar
              value={40}
              strokeWidth={50}
              styles={buildStyles({
                strokeLinecap: "butt",
                pathColor: "#FFF7F4",
                trailColor: "#1E1E24",
              })}
            />
          </Box>
          <Text
            ml="6"
            fontFamily="Spline Sans"
            color="#444140"
            fontSize="24px"
            fontWeight="300"
          >
            40%
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default RatingsPanel;
