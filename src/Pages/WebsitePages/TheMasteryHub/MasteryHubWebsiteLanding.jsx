
import circleimage from "../../../assets/circle-image.png";
import essentialsImage from "../../../assets/essentialsImage.png";
import {
  Box,
  Flex,
  Button,
  ListItem,
  UnorderedList,
  Image,
  Text,
} from "@chakra-ui/react";
import Footer from "../../Footer/Footer";
import { TopbarUnsigned } from "../../../Components/SideBar/SideBar/Topbar";
import MasteryHero from "./MasteryHero";
import ProjectOverviewMastery from "../ProjectOverviewMastery";

const MasteryHubWebsiteLanding = () => {
  // const navigate = useNavigate();
  // const [posts2, posts3] = JsonDummyData();
  // const backButtonClick = () => {
  //   navigate("/");
  // };
  return (
    <>
      <TopbarUnsigned />
      <MasteryHero />
      <ProjectOverviewMastery />
      {/* <Box
        ml={{ base: "1", md: "2", lg: "3" }}
        mt={{ base: "4rem", md: "4rem", lg: "5rem" }}
        position="relative"
        backgroundImage={`url(${masterylandingpage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height={{ base: "700px", md: "800px", lg: "990px" }}
        color="#FFFFFF"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
      </Box> */}

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
        <Box
          as="span"
          fontSize={{ base: "xl", md: "2xl" }}
          fontWeight="bold"
          mt={{ base: "8", md: "14" }}
          ml={{ base: '2rem', md: '5rem', lg: "7rem" }}
          sx={{
            backgroundImage: 'linear-gradient(to right, #FFD700, #FF8C00, #FF4500)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            display: 'inline-block'
          }}
        >
          The Mastery Hub Overview
        </Box>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          mt={{ base: "3", md: "4" }}
          mx={{ base: "1rem", md: "7rem" }}
          width={{ base: "90%", md: "80%" }}
        >
          An Application designed to assemble top-tier educator from a range of technological disciplines.
          A digital education hub offering diverse courses in technology and business sectors, our
          platforms aims to deliver top-tier, accessible learning to a global audience.It serves as the go-to
          resource for those aiming to upskill and propel their careers forward.
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
          Challenge
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight={"bold"}
          mt={{ base: "3", md: "4" }}
          mx={{ base: "1rem", md: "7rem" }}
          width={{ base: "90%", md: "80%" }}
        >
          The IT Skills Gap in Emerging Technologies
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          mt={{ base: "3", md: "4" }}
          mx={{ base: "1rem", md: "7rem" }}
          width={{ base: "90%", md: "80%" }}
        >
          Global industries are prepertually hindered by an acute lack of proficient specialists
          in emerging IT fields like machine learning, cloud computing, AI and business intelligence.
          This skills gap is exacerbated by the rising necessity for training programs in these areas.
          as these evolving technologies necessities experts with up-to-date competencies.
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
          Objective
        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight={"bold"}
          mt={{ base: "3", md: "4" }}
          mx={{ base: "1rem", md: "7rem" }}
          width={{ base: "90%", md: "80%" }}
        >
          1. Business Aim
        </Text>
        <Text
          as="p"
          fontSize={{ base: 'md', md: 'lg' }}
          mt={{ base: '4', md: '4' }}
          mx={{ base: '1rem', md: '7rem' }}
          width={{ base: '90%', md: '80%' }}
        >
          The Primary goal is to democratize top-notch online education in technology and allied fields
          making it affordable and accessible to learners globally.

        </Text>
        <Text
          as="p"
          fontSize={{ base: "md", md: "lg" }}
          fontWeight={"bold"}
          mt={{ base: "3", md: "4" }}
          mx={{ base: "1rem", md: "7rem" }}
          width={{ base: "90%", md: "80%" }}
        >
          2. Product Understanding
        </Text>
        <Text
          as="p"
          fontSize={{ base: 'md', md: 'lg' }}
          mt={{ base: '4', md: '4' }}
          mx={{ base: '1rem', md: '7rem' }}
          width={{ base: '90%', md: '80%' }}
        >
          Primary focus is on technology and associated field of study
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
              Design Process
            </Text>
            <Text as="p" ml={{ base: "14", md: "20", lg: "20" }} fontSize={{ base: "md", md: "md", lg: "md" }} mt="4" width={{ base: "80%", md: "80%", lg: "80%" }}>
              I followed the design thinking process to define the problems,
              and start working on different ideations to improve the prototypes
              and conducting the testing
              <br /> <br />
              <UnorderedList>
                <br />
                <ListItem>
                  EMPATHISE
                </ListItem>
                <ListItem>
                  DEFINE
                </ListItem>
                <ListItem>
                  IDEATE
                </ListItem>
                <ListItem>
                  PROTOTYPE
                </ListItem>
                <ListItem>
                  TEST
                </ListItem>
              </UnorderedList>
            </Text>
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
              Personas
            </Text>
            <Text as="p" ml={{ base: "14", md: "20", lg: "20" }} fontSize={{ base: "md", md: "md", lg: "md" }} mt="4" width={{ base: "80%", md: "80%", lg: "80%" }}>
              The target audience for our platform ranges in age from 18 to 65 and includes both males
              and females globally, with a   major focus on individuals residing in developed countries.
              Our primary users are motivated by a strong desire to acquire new and relevant skills, often
              driven by the need to enhance their job prospects. Whether they are early-career professionals
              or mid-life career changers, our platform caters to those who seek to bolster their capabilities
              for better employment opportunities.
            </Text>
            <UnorderedList ml={{ base: "14", md: "20", lg: "20" }}>
              <br />
              <ListItem fontWeight={"bold"}>
                Goals
              </ListItem>
              <Text as="p" fontSize={{ base: "md", md: "md", lg: "md" }} mt="4" width={{ base: "80%", md: "80%", lg: "80%" }}>                Hunter aspires to transition into a role as a Salesforce Administrator, aiming for
                a six-figure income to better support his growing family.
              </Text>
              <ListItem fontWeight={"bold"} mt={"3"}>
                Pain Points
              </ListItem>
              <Text as="p" fontSize={{ base: "md", md: "md", lg: "md" }} mt="4" width={{ base: "80%", md: "80%", lg: "80%" }}>                Financial limitations and a demanding work-life balance hinder Hunter
                from taking traditional educational routes.
              </Text>
              <ListItem fontWeight={"bold"} mt={"3"}>
                Behavior
              </ListItem>
              <Text as="p" fontSize={{ base: "md", md: "md", lg: "md" }} mt="4" width={{ base: "80%", md: "80%", lg: "80%" }}>                Hunter starts his day early, juggling work and family commitments.
                Despite an unconventional work schedule, his curiosity and ambition fuel his
                drive for self-learning and skill acquisition.
              </Text>
              <ListItem fontWeight={"bold"} mt={"3"}>
                Need
              </ListItem>
              <Text as="p" fontSize={{ base: "md", md: "md", lg: "md" }} mt="4" width={{ base: "80%", md: "80%", lg: "80%" }}>
                What Hunter requires is an educational program that offers
                the flexibility to accommodate his irregular schedule and provides
                specialized training in Salesforce administration.
              </Text>
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
                  User Flow
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
                  I delved into the user flow of the platform, tracing the path that users typically follow
                  from initial entry to the fulfillment of their objectives. I dissected each step in this
                  journey to identify both the strong points and the friction areas within the user experience.
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
      </Flex>

      <Footer />
    </>
  );
};

export default MasteryHubWebsiteLanding;
