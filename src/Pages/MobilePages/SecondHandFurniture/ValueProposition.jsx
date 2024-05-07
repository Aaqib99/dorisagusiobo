import search from "../../../assets/search.svg";
import communication from "../../../assets/communication.svg";
import eye from "../../../assets/eye.svg";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import UpdateValuePost from "./UpdateValuePost";

const ValueProposition = () => {
  const UpdateValuePosts = [
    {
      title: "Efficient and Customizable Search",
      description:
        "Our application elevates the user experience by providing a comprehensive filter menu that allows for highly tailored searches. Whether you're constrained by budget, location, or specific furniture conditions, the platform makes it effortless to find what you're looking for.",
      image: search,
      imageLabel: "value added",
    },
    {
      title: "Seamless Communication",
      description:
        "Our in-app chat function ensures that you can directly and securely negotiate with sellers, iron out details, and arrange logistics, all within a single, reliable platform.",
      image: communication,
      imageLabel: "user engagement",
    },
    {
      title: "Smart Matching through Visual Search",
      description:
        "Leveraging the power of image-based searching, our platform allows you to find the closest match to any furniture you've seen and loved. Whether you're inspired by something online or in a store, a simple photo can lead you to similar listings in your area.",
      image: eye,
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
        <Text ml="5rem" fontWeight="medium" color="dark">
          Value Proposition
        </Text>
      </Flex>
      <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
        Efficient and customizable search, seamless communication, and
        smart matching through visual search enhance user experience
        and streamline athlete-trainer interactions.
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 2, md: 2 }}
        padding={{ base: "10px", md: "10px 80px" }}
      >
        {UpdateValuePosts.map((value) => (
          <Box key={value.title} width="100%" height="100%">
            <UpdateValuePost post={value} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default ValueProposition;
