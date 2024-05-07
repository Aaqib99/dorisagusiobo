import problemstatementbg from "../../../assets/problemstatementbg.png";
import {
  Box,
  Text,
} from "@chakra-ui/react";

const ProblemStatement = () => {
  return (
    <>
      <Text
        fontSize="4xl"
        fontWeight="medium"
        mt="5rem"
        ml={{ base: "16", md: "16", lg: "16" }}
      >
        Problem Statement
      </Text>
      <Box
        ml={{ base: "2", md: "10" }}
        mr={{ base: "2", md: "10" }}
        mt={{ base: "2rem", md: "2rem", lg: "2rem" }}
        position="relative"
        backgroundImage={`url(${problemstatementbg})`}
        backgroundSize="cover"
        backgroundPosition="center center"
        backgroundRepeat="no-repeat"
        borderRadius="10px"
        height={{ base: "500px", md: "400px", lg: "450px" }}
        color="black"
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"

      >
        <Text
          // as="h1"
          fontSize={{ base: "2xl", md: "4xl", lg: "5xl" }}
          fontWeight="bold"
          textAlign="center"
          position="relative"
          color="white"
          zIndex="1"
          textShadow="2px 2px 4px rgba(0,0,0,0.3)"
        >
          Sustainable Tourism
        </Text>
        <Text
          as="p"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          mt={{ base: "2", md: "4", lg: "8" }}
          textAlign="center"
          color={"white"}
          ml={"5rem"}
          mr={"5rem"}
          textShadow="2px 2px 4px rgba(0,0,0,0.3)"
        >
          How might we help seasonal tourism businesses shift their focus to serve a broader, sustainability-conscious consumer base?
        </Text>
      </Box>
    </>
  );
};

export default ProblemStatement;
