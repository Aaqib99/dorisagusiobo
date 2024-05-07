// import React from "react";
import Footer from "../Footer/Footer";

import preparingcyber from "../../assets/websitelanding.jpg";
// import { useNavigate } from "react-router-dom";
import cyberbgdownpage from "../../assets/cyber-bg-down-page.png";
import {
  Box,
  Text,
} from "@chakra-ui/react";
const PreparingCyber = () => {
  return (
    <>
      <Box>
        <Box >
          <Box ml={{ base: '1rem', md: '3rem' }} mt={{ base: '1rem', md: '1rem', lg: "2rem" }} >
            <Text fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold">
              Website Name 2
            </Text>
          </Box>
        </Box>
        <Box
          ml={{ base: "1", md: "2", lg: "3" }}
          mt={{ base: "2rem", md: "2rem", lg: "1rem" }}
          position="relative"
          backgroundImage={`url(${preparingcyber})`}
          backgroundSize="cover"
          backgroundPosition="center"
          backgroundRepeat="no-repeat"
          height={{ base: "800px", md: "700px", lg: "950px" }}
          color="#FFFFFF"
          textAlign="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
        </Box>
      </Box>



      {/* today's digital */}
      <Box>
        <Text fontSize={{ base: "xl", md: "2xl" }} ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontWeight="bold" mt={{ base: 4, md: 10 }}>
          In today's digital landscape
        </Text>
        <Text as="p" ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontSize={{ base: "md", md: "lg" }} mt={{ base: 2, md: 4 }} maxW={{ base: "80%", sm: "80%", md: "90%" }}>
          Now that we have the personas and previously documented system requirements,
          we can build user scenarios for every goal. Usually, a user scenario consists
          of short texts sometimes illustrated with images that describe the actions focused
          on meeting a specific user need. Altogether, these notes combine into a customer
          journey map and describe the scenarios and journeys of a specific persona.
          Benefit: Dynamic and easy to iterate, user scenarios bring users to life
          and can demonstrate user activity across the whole product or service.
          Besides, this design technique is ideal for team collaboration.
          Example: This user scenario shows a set of actions for a student
          Paul who needs to buy flowers for his mother using online ordering system.
        </Text>
      </Box>
      {/* Bg-Image */}
      <Box
        position="relative"
        mt={{ base: "2rem", md: "5rem" }}
        backgroundImage={`url(${cyberbgdownpage})`}
        backgroundSize="cover"
        // backgroundPosition="center"
        // backgroundRepeat="no-repeat"
        color="black"
        textAlign="center"
        py={{ base: "4rem", md: "6rem" }}
      >
        <Text fontSize={{ base: "lg", md: "xl" }} ml={{ base: "1rem", sm: "1rem", md: "0", lg: "0" }}>
          Welcome to Doris Augiosbo, where innovation meets creativity! We specialize in providing
          cutting-edge mobile app design and website design services tailored to meet your unique business needs.
        </Text>
      </Box>
      {/* Section Heading 1 */}
      <Box mt={{ base: "4rem", md: "6rem" }}>
        <Text fontSize={{ base: "xl", md: "2xl" }} ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontWeight="bold" mt={{ base: 10, md: 10 }}>
          Website Heading 1
        </Text>
        <Text as="p" ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontSize={{ base: "md", md: "lg" }} mt={{ base: 4, md: 4 }} width={{ base: "80%", md: "80%" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
      </Box>
      {/* Section Heading 2 */}
      <Box mt={{ base: "4rem", md: "6rem" }}>
        <Text fontSize={{ base: "xl", md: "2xl" }} ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontWeight="bold" mt={{ base: 10, md: 10 }}>
          Website Heading 2
        </Text>
        <Text as="p" ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontSize={{ base: "md", md: "lg" }} mt={{ base: 4, md: 4 }} width={{ base: "80%", md: "80%" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default PreparingCyber;
