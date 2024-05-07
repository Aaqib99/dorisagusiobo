import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { Box, Card, Heading, Image, ListItem, Button, Text, UnorderedList } from "@chakra-ui/react";
// import { LinkItems, } from "../../Components/SideBar/SideBar/LinkItems";
import "../../App.css";
import TypingAnimation from "../TypingAnimations/TypingAnimation";

/**
 * @param {{ post: any; }} props
 */
function FeaturedPost(props) {
  const { post } = props;
  const navigate = useNavigate();
  const handleExploreClick = () => {
    navigate(post.path);
  };

  return (
    <Card display="flex" flexDirection={{ base: "column", md: "row" }} boxShadow="0 0 8px rgba(0, 0, 0, 0.2)">

      <Box width="100%" display="flex" flexDir={["column", "row"]} alignItems="flex-start">
        <Box p={4} flex={1}>
          <Heading as="h2" size="lg" color="blue.500" fontWeight="medium" mb={2}>
            <TypingAnimation title={post.title} />
          </Heading>
          <Text fontSize="md" mb={4}>
            {post.description}
          </Text>
          <Text fontSize="md" fontWeight={"bold"} mb={4}>
            {post.challenge}
          </Text>
          <Text fontSize="sm" mb={4}>
            <UnorderedList mt={2}>
              <ListItem mt={1} >
                {post.challenge1}
              </ListItem>
              <ListItem mt={1} >
                {post.challenge2}
              </ListItem>

            </UnorderedList>
          </Text>
          <Button
            onClick={handleExploreClick}
            fontSize="sm"
            color="blue.500"
            fontWeight="medium"
            border="1px solid gray"
            borderRadius="md"
            px={8}
            py={2}
            _hover={{ bg: "gray.100" }}
          >
            {post.buttonText}
          </Button>
        </Box>
      </Box>
      <Box alignSelf={{ base: "center", md: "flex-start" }} ml={{ base: 0, md: 4 }} mt={{ base: 4, md: 0 }}>
        <Image src={post.image} alt={post.imageLabel} maxW="100%" height="auto" className="image-animation" />
      </Box>
    </Card>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
