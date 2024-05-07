import overviewbg from "../../../assets/overviewbg.svg";
import {
  Box,
  Text,
} from "@chakra-ui/react";

const ProjectOverview = () => {
  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="medium"
        mt="5rem"
        ml={{ base: "16", md: "16", lg: "16" }}
      >
        Project Overview
      </Text>
      <Box
        ml={{ base: "2", md: "7" }}
        mr={{ base: "2", md: "7" }}
        mt={{ base: "2rem", md: "2rem", lg: "2rem" }}
        position="relative"
        backgroundImage={`url(${overviewbg})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        // backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height={{ base: "500px", md: "400px", lg: "450px" }}
        color="black"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"

      >
        <Text
          // as="h1"
          fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
          fontWeight="bold"
          textAlign="center"
          position="relative"
          color="#FFB03B"
          zIndex="1"
        >
          Tourism's uncertain road ahead
        </Text>
        <Text
          as="p"
          fontSize={{ base: "sm", md: "md", lg: "lg" }}
          mt={{ base: "2", md: "4", lg: "8" }}
          textAlign="center"
          ml={"5rem"}
          mr={"5rem"}
        >
          The local wilderness tourism community faces multi-faceted challenges in this evolving landscape.
          While the lifting of travel restrictions has provided some respite, the industry is far
          from fully recovered. Limited government funding during the height of the pandemic has left
          many businesses financially strained, with some unable to fully reopen or rehire staff.
          Furthermore, the unpredictability of potential future disruptions adds another
          layer of complexity, making it crucial for businesses to develop resilient and adaptive strategies.
        </Text>
      </Box>
    </>
  );
};

export default ProjectOverview;
