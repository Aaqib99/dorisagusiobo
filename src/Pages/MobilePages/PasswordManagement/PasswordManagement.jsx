// import React from "react";
import Footer from "../../Footer/Footer";
import PasswordImages from "./PasswordImages";
import PasswordStrength from "../PasswordStrength/PasswordStrength";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Grid,
  ListItem,
  UnorderedList,
  Divider,
  Image,
  Text,
} from "@chakra-ui/react";
import comma from "../../../assets/comma.svg";
import circleimage from "../../../assets/circle-image.png";
import password from "../../../assets/passwordcircle.png";
import robot from "../../../assets/robot.png";
import snake from "../../../assets/snake.png";

const PasswordManagement = () => {
  const InsideImages3 = [
    {
      icon: comma,
      description: "Vulnerabilities on my computer",
      image: robot,
    },
    {
      icon: comma,
      description: "Anti-Virus Scan",
      image: snake,
    },
  ];
  const navigate = useNavigate();

  const backButtonClick = () => {
    navigate("/private-page");
  };

  return (
    <>
      <Flex
        mt={{ base: "2rem", md: "4rem" }}
        direction={{ base: "column", md: "row" }}
      >
        <Box flex={{ base: "1", md: "0.5" }} order={{ base: 2, md: 1 }}>
          <Box>
            <Box
              ml={{ base: "2rem", md: "7rem" }}
              mt={{ base: "-14rem", md: "-2rem" }}
              position="absolute"
            // left={{ base: "0.5rem", md: "auto" }}
            // right={{ base: "auto", md: "1rem" }}
            // top={{ base: "0.5rem", md: "auto" }}
            // bottom={{ base: "auto", md: "1rem" }}
            >
              <BiArrowBack onClick={backButtonClick} />
            </Box>
            <Text
              fontSize={{ base: "xl", sm: "sm", md: "2xl" }}
              ml={{ base: "1rem", md: "7rem" }}
              fontWeight="bold"
              mt="2"
              textAlign={{ base: "center", md: "left" }}
            >
              Password Management in Cyber Security
            </Text>
            <Image
              h="auto"
              maxW="auto"
              position="absolute"
              src={circleimage}
              alt=""
              ml="2rem"
            />
            <Text
              as="p"
              ml={{ base: "0rem", sm: "2rem", md: "7rem" }}
              fontSize={{ base: "md", md: "lg" }}
              mt="7"
              width={{ base: "100%", md: "80%" }}
              p={{ base: "2rem", sm: "2rem", md: "0", lg: "0" }}
              textAlign={{ base: "center", md: "left" }}
            >
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

        <Box flex={{ base: "1", md: "0.5" }} order={{ base: 1, md: 2 }}>
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
                width={{ base: "70%", md: "auto" }}
                mt={{ base: "2rem", md: "0" }}
                ml={{ base: "4rem", md: "2" }}
                borderRadius="md"
              />
            </Box>
          </Box>
        </Box>
      </Flex>

      <Box
        bgColor={"gray.200"}
        width={"100%"}
        mx="auto"
        mb="7"
        p="7"
        mt={{ base: "5rem", md: "2rem" }}
        borderRadius="md"
      >
        <Text
          as="p"
          fontSize={{ base: "lg", md: "xl" }}
          textAlign="center"
          mx={{ base: "1rem", md: "0" }}
        >
          A string of characters i.e letters, numbers, special characters, used
          to verify the identity of a user during the authentication process is
          known as a password.
        </Text>
      </Box>

      <Box mx={{ base: "1rem", md: "7rem" }}>
        <PasswordStrength />
      </Box>

      <Text
        as="p"
        mx={{ base: "1rem", md: "7rem" }}
        mt={{ base: "1rem", sm: "2rem", md: "3rem", lg: "2rem" }}
        color={"#C1C1C1"}
      >
        PASSWORD RESEARCH
      </Text>

      <Box mx={{ base: "1rem", md: "7rem" }}>
        <Box>
          <Image
            h="auto"
            maxW="auto"
            position="absolute"
            src={circleimage}
            alt=""
            // ml="2rem"
            mt="-3rem"
          />
        </Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mt="10"
          textAlign={{ base: "center", md: "left" }}
        >
          Password Management:
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          mt="4"
          width={{ base: "100%", md: "80%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Since passwords are meant to keep the files and data secret and safe
          so it is prevented the unauthorized access, password management refers
          to the practices and set of rules or principles or standards that one
          must follow or at least try to seek help from in order to have a
          good/strong password and along with its storage and management for the
          future requirements.
        </Text>
      </Box>

      <Box mx={{ base: "1rem", md: "7rem" }}>
        <Box mt={{ base: "5rem", md: "0" }}>
          <Image
            h="auto"
            maxW="auto"
            position="absolute"
            src={circleimage}
            alt=""
            // ml="2rem"
            mt="-3rem"
          />
        </Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mt="10"
          textAlign={{ base: "center", md: "left" }}
        >
          Issues Related to Managing Passwords:
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          mt="4"
          width={{ base: "100%", md: "80%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          The main problem with password management is that it is not safe to
          use the same password for multiple sites. Therefore, having different
          passwords for different sites and on top of that remembering them is
          quite difficult. As per the statistics, more than 65% of people reuse
          passwords across accounts, and the majority do not change them, even
          after a known breach. Meanwhile, 25% reset their passwords once a
          month or more because they forgot them.
        </Text>
        <Text as="p" mt="10">
          The main issues related to managing passwords are as follows:
          <UnorderedList mt={{ base: "2rem", md: "2rem" }}>
            <ListItem>Login spoofing</ListItem>
            <ListItem>Sniffing attack</ListItem>
            <ListItem>Brute force attack</ListItem>
            <ListItem>Shoulder surfing attack</ListItem>
            <ListItem>Data breach</ListItem>
          </UnorderedList>
        </Text>
      </Box>

      <Box mx={{ base: "1rem", md: "7rem" }}>
        <Box mt={{ base: "5rem", md: "0" }}>
          <Image
            h="auto"
            maxW="auto"
            position="absolute"
            src={circleimage}
            alt=""
            // ml="2rem"
            mt="-3rem"
          />
        </Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mt="10"
          textAlign={{ base: "center", md: "left" }}
        >
          Methods to Manage Password:
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          mt="4"
          width={{ base: "100%", md: "80%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          There are a lot of good practices that we can follow to generate a
          strong password and also the ways to manage them.
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "md" }}
          mt="4"
          width={{ base: "100%", md: "80%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <UnorderedList>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Strong and long passwords:
              </Text>{" "}
              A minimum length of 8 to 12 characters long, also it should
              contain at least three different character sets (e.g., uppercase
              characters, lowercase characters, numbers, or symbols) Password
              Encryption: Using irreversible end-to-end encryption is
              recommended. In this way, the password remains safe even if it
              ends up in the hands of cybercriminals.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Multi-factor Authentication (MFA):
              </Text>{" "}
              Adding some security questions and a phone number that would be
              used to confirm that it is indeed you who is trying to log in will
              enhance the security of your password.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Make the password pass the test:
              </Text>{" "}
              Yes, put your password through some testing tools that you might
              find online in order to ensure that it falls under the strong and
              safe password category.
            </ListItem>
            <ListItem>
              <Text as="span" fontWeight="bold">
                Avoid updating passwords frequently:
              </Text>{" "}
              Though it is advised or even made mandatory to update or change
              your password as frequently as in 60 or 90 days.
            </ListItem>
          </UnorderedList>
        </Text>
      </Box>

      <Box
        position="absolute"
        width="80%"
        mt={{ base: "4rem", md: "0" }}
        left={{ base: "10%", md: "10%" }}
      >
        <Divider borderColor="black" height="12px" />
      </Box>

      <Box mx={{ base: "1rem", md: "7rem" }}>
        <Box mt={{ base: "12rem", md: "0" }}>
          <Image
            h="auto"
            maxW="auto"
            position="absolute"
            src={circleimage}
            alt=""
            // ml="2rem"
            mt="-1rem"
          />
        </Box>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mt="10"
          textAlign={{ base: "center", md: "left" }}
        >
          Similar Reads
        </Text>
      </Box>

      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)", // Adjust for small screens
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)", // Adjust for extra-large screens
        }}
        padding={{ base: "20px", sm: "20px", md: "20px 40px", lg: "20px 80px", xl: "20px 80px" }}
        gridColumnGap={9}
      >
        {InsideImages3.map((pimage) => (
          <Box key={pimage.description} width="100%" height="100%">
            <PasswordImages pimage={pimage} />

          </Box>
        ))}
      </Grid>
      <Footer />
    </>
  );
};

export default PasswordManagement;
