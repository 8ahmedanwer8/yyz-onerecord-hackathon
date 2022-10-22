import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Input,
  FormLabel,
  Button,
  useToast,
} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import LoginContext from "../Context/LoginContext";

function GoogleUsernameModal({}) {
  const [username, setUsername] = useState();
  const {
    enterGoogleUsername,
    setEnterGoogleUsername,
    newGoogleUserEmail,
    setNewGoogleUserEmail,
  } = useContext(LoginContext);
  const toast = useToast();
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const closeModal = () => setEnterGoogleUsername(false);

  function cleanAndExit() {
    //clean the login context state to what it should be normally
    setEnterGoogleUsername(false);
    setNewGoogleUserEmail();
  }
  const handleUsername = async ({ username }) => {
    console.log(username, newGoogleUserEmail);
    if (!username || username.length == 0) {
      //idk the difference between a length of zero and null
      //so i'll just check for both
      toast({
        title: "Username field empty",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } else {
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const data = await axios.post(
          "/api/user/google-signup",
          {
            username,
            newGoogleUserEmail,
          },
          config
        );
        console.log(data);
        localStorage.setItem("userInfo", data);
        setLoading(false);
        cleanAndExit();
        toast({
          title: "Account created",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      } catch (error) {
        toast({
          title: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    }
  };

  return (
    <Modal isOpen={enterGoogleUsername} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent
        fontFamily="Spline Sans"
        fontSize="40px"
        py="5px"
        color="#FFF7F4"
        fontWeight="600"
        bgColor="#444140"
      >
        <ModalHeader>Welcome to Valedictorian</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel
              fontFamily="Inter"
              color="#FFF7F4"
              fontWeight="400"
              fontSize="16px"
            >
              Enter your username
            </FormLabel>
            <Input
              fontFamily="Inter"
              fontWeight="400"
              fontSize="20px"
              color="#000"
              bgColor="#FFF7F4"
              placeholder="Ex: MITpogchamp420"
              onChange={(e) => setUsername(e.target.value)}
              _placeholder={{ color: "black", opacity: "50%" }}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => handleUsername({ username })}
            colorScheme="red"
            mr={3}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default GoogleUsernameModal;
