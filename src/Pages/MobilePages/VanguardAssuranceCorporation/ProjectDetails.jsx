import scope from "../../../assets/scope.svg";
import value from "../../../assets/value.svg";
import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import UpdateDetailPost from "../VanguardAssuranceCorporation/UpdateDetailPost";
import circleimage from "../../../assets/circle-image.png";

const ProjectDetails = () => {
  const UpdatePosts = [
    {
      title: "Challenge & Scope",
      description:
        `Throughout this project, I remained acutely aware of the challenges posed by the need for compatibility with legacy systems.
        One significant constraint arose from the sheer volume of private information involved. It was imperative to ensure a seamless transition for agents, particularly senior agents, as this transition required not only a redesign of the front-end to minimize disruptions and confusion but also substantial adjustments on the back-end to facilitate the proper migration of data.`,
      image: scope,
      imageLabel: "value added",
    },
    {
      title: "Value Proposition",
      description:
        `Offering a modernized and user-friendly mobile platform for independent insurance agents to streamline the quoting process and increase efficiency, while also ensuring security and flexibility to adapt to different state laws and regulations as VAC expands its reach to new markets.As VAC expands into new markets, the platform remains flexible, adapting effortlessly to evolving legal frameworks. By prioritizing user-friendliness and efficiency, VAC is poised to revolutionize the insurance industry's operational landscape.`,
      image: value,
      imageLabel: "user engagement",
    },
  ];
  return (
    <Box
      position="relative"
      mt={16}
      display={{ base: "block", md: "flex" }}
      flexDir="column"
      alignItems="start"
      justifyContent="start"
      gap="26px"
      textAlign="left"
      fontSize="36px"
      color="darkslategray.200"
    >
      <Box>
        <Image
          h="auto"
          maxW="100%"
          position="absolute"
          src={circleimage}
          alt=""
          ml="2rem"
          mt="-3rem"
        />
      </Box>
      <Flex alignItems="center">
        <Text ml="5rem" fontWeight="bold" fontSize={"36px"} color="#6F1DD8">
          Project Details
        </Text>
      </Flex>
      <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
        To create an impactful and enduring solution for seasonal tourism businesses
        and their consumers, I adhered to three core design principles:
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={{ base: 2, md: 2 }}
        padding={{ base: "10px", md: "10px 80px" }}
      >
        {UpdatePosts.map((post) => (
          <Box key={post.title} width="100%" height="100%">
            <UpdateDetailPost post={post} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ProjectDetails;
