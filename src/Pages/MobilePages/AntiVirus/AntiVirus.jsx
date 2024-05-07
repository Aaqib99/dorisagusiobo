import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Footer from "../../Footer/Footer";
import password from "../../../assets/password.png";
import circleimage from "../../../assets/circle-image.png";

const AntiVirus = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const backButtonClick = () => {
    navigate("/private-page");
  };

  return (
    <>
      {/* first element */}
      <Flex direction={["column", "column", "row"]} mt={["2rem", "4rem"]}>
        <Box flex={["1", "1", "1"]} mb={["4", "0"]}>
          <Box>
            <Box ml={["1rem", "0", "7rem"]} mt={["-2rem", "-2rem"]} position="absolute">
              <BiArrowBack onClick={backButtonClick} />
            </Box>
            <Text fontSize={["xl", "2xl", "2xl"]} ml={["1rem", "0", "7rem"]} fontWeight="bold" mt="2">
              Anti Virus
            </Text>
            <Image
              h="auto"
              maxW="90%"
              position="absolute"
              src={circleimage}
              alt=""
              ml="2rem"
            //   mt="-2rem"
            />
            <Text as="p" ml={["1rem", "0", "7rem"]} fontSize={["md", "md", "md"]} mt={["7", "7", "7"]} width={["90%", "100%", "80%"]}>
              A password is a secret word or phrase or code that you need to
              know in order to have access to a place or system. In technical
              terms, it is a series of letters or numbers that you must type
              into a computer or computer system in order to be able to use it.
              A password is a real-life implementation of challenge-response
              authentication (a set of protocols to protect digital assets and
              data).
            </Text>
          </Box>
        </Box>

        {/* aaaaaaaa */}
        <Box flex={["1", "1", "1"]}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box textAlign="center">
              <Image
                src={password}
                alt="image"
                width={["80%", "100%", "70%"]}
                mt={["2rem", "2rem"]}
                ml={["2rem", "2rem"]}
                borderRadius="md"
              />
            </Box>
          </Box>
        </Box>
      </Flex>
      <Box
        bgColor={"gray.200"}
        width={["100%", "100%", "75%"]}
        mx={["0", "0", "auto"]} // Center the box horizontally
        mb={["5", "5"]} // Add vertical margin for centering
        p={["3", "3", "5"]}
        mt={["3rem", "3rem", "5rem"]}
        borderRadius="md"
      >
        <Text as="p" fontSize={["md", "lg", "lg"]} textAlign="center">
          A string of characters i.e letters, numbers, special characters, used
          to verify the identity of a user during the authentication process is
          known as a password.
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default AntiVirus;
