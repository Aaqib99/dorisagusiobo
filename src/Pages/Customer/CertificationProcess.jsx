// import React from "react";
// import JsonDummyData from "../DummyData/JsonDummyData";
import Footer from "../Footer/Footer";
import cyberEssentials from "../../assets/image3.jpg";
import circleimage from "../../assets/circle-image.png";
import essentialsImage from "../../assets/essentialsImage.png";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  ListItem,
  UnorderedList,
  Image,
  Text,
} from "@chakra-ui/react";

const CertificationProcess = () => {
  const navigate = useNavigate();
  // const [posts2, posts3] = JsonDummyData();
  const backButtonClick = () => {
    navigate("/");
  };
  return (
    <>
      <Box
        ml="7rem"
        mt="-2rem"
        position="absolute"
        display="flex"
        alignItems="center"
      >
        <BiArrowBack onClick={backButtonClick} />
        <Text
          fontSize={{ base: "md", md: "xl", lg: "2xl" }}
          fontWeight="bold"
          ml={{ base: "2", md: "4", lg: "7" }}
        >
          WEBSITE NAME 3
        </Text>
      </Box>

      <Box
        ml={{ base: "1", md: "2", lg: "3" }}
        mt={{ base: "4rem", md: "4rem", lg: "5rem" }}
        position="relative"
        backgroundImage={`url(${cyberEssentials})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height={{ base: "600px", md: "600px", lg: "650px" }}
        color="#FFFFFF"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
      </Box>

      {/* second element */}
      <Box textAlign={{ base: 'center', md: 'left' }}>
        <Box position="relative">
          <Image
            h="auto"
            maxW="100%"
            position="absolute"
            src={circleimage}
            alt=""
            ml={{ base: "1rem", md: "2rem" }}
            mt={{ base: "1rem", md: "-2rem" }}
          />
        </Box>
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mt={{ base: "8", md: "14" }} ml={{ base: '2rem', md: '5rem', lg: "7rem" }}>
          Website Main Description
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          mt={{ base: "3", md: "4" }}
          mx={{ base: "1rem", md: "7rem" }}
          width={{ base: "90%", md: "80%" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda,
          quaerat sunt reprehenderit nihil quibusdam provident odit laborum culpa officia
          quae iusto repellat aut tenetur, numquam fugiat similique natus corporis.
          Laboriosam eveniet velit magnam atque necessitatibus dicta. Maiores distinctio,
          quas harum, ex molestiae eaque quis magni ad id omnis quos illo iste ipsam
          sint similique odit eos soluta architecto dignissimos?
        </Text>
      </Box>

      <br />
      <br />
      {/* third element */}
      <Box textAlign={{ base: 'center', md: 'left' }}>
        <Box position="relative">
          <Image
            h="auto"
            maxW="100%"
            position="absolute"
            src={circleimage}
            alt=""
            ml={{ base: "1rem", md: "2rem" }}
            mt={{ base: "1rem", md: "-2rem" }}
          />
        </Box>
        <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" mt={{ base: "6", md: "10" }} ml={{ base: '2rem', md: '5rem', lg: "7rem" }}>
          Further Description
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          mt={{ base: "3", md: "4" }}
          mx={{ base: "1rem", md: "7rem" }}
          width={{ base: "90%", md: "80%" }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis assumenda,
          quaerat sunt reprehenderit nihil quibusdam provident odit laborum culpa officia
          quae iusto repellat aut tenetur, numquam fugiat similique natus corporis.
          Laboriosam eveniet velit magnam atque necessitatibus dicta.
        </Text>
      </Box>
      <br />
      <br />
      {/* forth element */}
      <Box textAlign={{ base: 'center', md: 'left' }}>
        <Box position="relative">
          <Image
            h="auto"
            maxW="100%"
            position="absolute"
            src={circleimage}
            alt=""
            ml={{ base: '1rem', md: '2rem' }}
            mt={{ base: '-1rem', md: '-3rem' }}
          />
        </Box>
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mt={{ base: '6', md: '10' }} ml={{ base: '1rem', md: '7rem' }}>
          Website Major/Key Points.
        </Text>
        <Text
          as="p"
          fontSize={{ base: 'md', md: 'lg' }}
          mt={{ base: '4', md: '4' }}
          mx={{ base: '1rem', md: '7rem' }}
          width={{ base: '90%', md: '80%' }}
        >
          User Experience Flow
          <UnorderedList>
            <ListItem>
              Reassure customers that you are working to secure your IT against cyber attack
            </ListItem>
            <ListItem>
              Attract new business with the promise you have cyber security measures in place
            </ListItem>
            <ListItem>
              You have a clear picture of your organization's cyber security level
            </ListItem>
            <ListItem>
              Some Government contracts require Cyber Essentials certification
            </ListItem>
          </UnorderedList>
        </Text>
      </Box>

      {/* fith element */}
      <Flex
        mt={{ base: "4rem", md: "4rem", lg: "4rem" }}
        direction={{ base: "column", md: "row" }}
      // ml={"2rem"}
      >
        <Box flex={{ base: "1", md: "1", lg: "1" }} mb={{ base: "4", md: "0" }}>
          <Box>
            <Box>
              <Image
                h="auto"
                maxW="auto"
                position="absolute"
                src={circleimage}
                alt=""
                ml={{ base: "2", md: "2", lg: "2" }}
                mt={{ base: "-3", md: "-3", lg: "-3" }}
              />
            </Box>
            <Text fontSize={{ base: "2xl", md: "2xl", lg: "2xl" }} ml={{ base: "14", md: "20", lg: "20" }} fontWeight="bold" mt={{ base: "26", md: "28", lg: "30" }}>
              Why should you get My Services?
            </Text>
            <Text as="p" ml={{ base: "14", md: "20", lg: "20" }} fontSize={{ base: "md", md: "md", lg: "md" }} mt="4" width={{ base: "80%", md: "80%", lg: "80%" }}>
              Basic UX design process consists of three major stages: analysis, user experience
              development and visual design. The analysis helps the design team better understand
              the users of the future system, their goals, expectations, tasks.
              <br /> <br />
              UX design process steps
              <UnorderedList>
                <br />
                <ListItem>
                  UX designer
                </ListItem>
                <ListItem>
                  Project managers and business analysts
                </ListItem>
                <ListItem>
                  Developers and QA specialists
                </ListItem>
                <ListItem>
                  Business owners and users
                </ListItem>
              </UnorderedList>
            </Text>
            <Text as="p" ml={{ base: "14", md: "20", lg: "20" }} fontSize={{ base: "md", md: "md", lg: "md" }} mt="4" width={{ base: "80%", md: "80%", lg: "80%" }}>
              Persona is a collective image of users united by similar goals, priorities, skills, behavior patterns, characteristics, motivations and intents. Usually, it contains a name, picture, occupation, interests or any other relevant information that helps better understand a user.
              During UX design process, we analyze and group future system users into segments and build one, two or more personas that represent each segment. This technique allows us to design the system that would address the specific needs of a certain persona and therefore serve the related target audience.
              Benefit: Using personas, we ensure the UX we build reflects the goals and requirements of our users and helps us avoid self-referential design. We can personalize UX to these users and focus on solving the challenges relevant to them.
              Example: Personas for Printique photo book building flow help build user journeys for each user category.
            </Text>
            <UnorderedList ml={{ base: "14", md: "20", lg: "20" }}>
              <br />
              <ListItem>
                Personas
              </ListItem>
              <ListItem>
                Build User Scenarios
              </ListItem>
              <ListItem>
                Develop Information Architecture
              </ListItem>
              <ListItem>
                Draw Sketches
              </ListItem>
              <ListItem>
                Make Wireframes
              </ListItem>
              <ListItem>
                Create Visual Design
              </ListItem>
              <ListItem>
                Evaluate & Test Design
              </ListItem>
            </UnorderedList>
          </Box>
        </Box>

        {/* aaaaaaaa */}
        <Box flex={{ base: "1", md: "1", lg: "1" }} ml={{ base: "0", md: "4", lg: "4" }}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box border="1px" borderColor="black" textAlign="center">
              {/* Box 1 - Image with border */}
              <Image
                width="fit-content"
                src={essentialsImage}
                alt="image"
                mx="auto"
              />
              <Box>
                {/* Box 2 - Heading */}
                <Text as="h1" mt="2rem" fontSize="2xl" fontWeight="bold">
                  UX Workflow
                </Text>
              </Box>
              <Box>
                {/* Box 3 - Paragraph */}
                <Text
                  as="p"
                  mt="2rem"
                  textAlign="center"
                  maxW="400px"
                  mx="auto"
                >
                  Developing and refining a UX workflow will ensure you follow UX design principles to delight your users and stakeholders.
                  An optimized design workflow reduces errors, improves collaboration, acknowledges the business value, and reduces time
                  to market to save the organization time and money.
                  Does your design tool optimize UX workflows with features to enhance collaboration
                  and digital product design? Why not try UXPin! The world’s most advanced prototyping tool.
                </Text>
              </Box>
              <Box>
                {/* Box 4 - Button */}
                <Button
                  colorScheme="blue"
                  size="md"
                  pl="8"
                  pr="8"
                  mt="2rem"
                  mb="2rem"
                >
                  Find Out More
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* aaaaaaaa */}
      </Flex>

      <Footer />
    </>
  );
};

export default CertificationProcess;
