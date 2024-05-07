import explore from "../../../assets/explore.svg";
import relationship from "../../../assets/relationship.svg";
import inclusive from "../../../assets/inclusive.svg";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import UpdatePost from "./UpdatePost";

const DesignPriciples = () => {
  const UpdatePosts = [
    {
      title: "Personalized Exploration",
      description:
        "The app is designed to offer tailor-made experiences for each user. By incorporating preferences, past activities, and user behavior, the app aims to provide unique, deeply researched travel and activity recommendations that go beyond just cost-effectiveness.",
      image: explore,
      imageLabel: "value added",
    },
    {
      title: "Authentic Relationships",
      description:
        "The platform prioritizes sustainability and responsible travel, both in the choices it presents and the businesses it partners with. It serves to educate users about eco-friendly practices and local customs, including respecting indigenous lands, to promote mindful tourism.",
      image: relationship,
      imageLabel: "user engagement",
    },
    {
      title: "Broad Inclusivity",
      description:
        "To ensure a frictionless user experience, the app is optimized for all devices—mobile phones, tablets, and computers. It's designed to be intuitive, user-friendly, and inclusive, with features like language translation to cater to a diverse user base.",
      image: inclusive,
      imageLabel: "adapting evolution",
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
      <Flex alignItems="center">
        <Text ml="5rem" fontWeight="medium" fontSize={"24px"} color="dark">
          Design Principles
        </Text>
      </Flex>
      <Flex>
        <Text ml="5rem" fontWeight="medium" color="#FFB03B">
          Aiming High
        </Text>
      </Flex>
      <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
        To create an impactful and enduring solution for seasonal tourism businesses
        and their consumers, I adhered to three core design principles:
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 2, md: 2 }}
        padding={{ base: "10px", md: "10px 80px" }}
      >
        {UpdatePosts.map((post) => (
          <Box key={post.title} width="100%" height="100%">
            <UpdatePost post={post} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default DesignPriciples;
