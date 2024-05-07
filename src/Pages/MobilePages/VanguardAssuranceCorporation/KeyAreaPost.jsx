import PropTypes from "prop-types";
import { Box, Card, Heading, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../../../App.css";
// import React from "react";

// @ts-ignore
function KeyAreaPost(props) {
  const navigate = useNavigate();
  const { post } = props;
  const handleButtonClick = () => {
    if (post.buttonText === "Run Script..") {
      if (post.id === 1) {
        navigate("/password-management", { state: { postId: post.id } });
        window.scrollTo(0, 0);
      } else if (post.id === 2) {
        navigate("/vulnerability-page", { state: { postId: post.id } });
        window.scrollTo(0, 0);
      }
    } else if (post.id === 3) {
      navigate("/anti-virus", { state: { postId: post.id } });
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <Card boxShadow="0 0 8px rgba(0, 0, 0, 0.2)">
        <Box>
          <Box p={6}>
            <Heading as="h1" size="xl" color="#6F1DD8" fontWeight="bold" >
              {post.title.slice(0, -1)}
              <span className="blinking-s">{post.title.slice(-1)}</span>
            </Heading>
            <Text fontSize="14" fontWeight="normal" color="gray.300" mt={4}>
              {post.date.replace(/(\S+)\s(\d+)/, "$1 $2")}
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" mt={8} maxW="100%">
              {post.description}
            </Text>
            <Link
              fontSize="sm"
              color="blue.500"
              fontWeight="medium"
              onClick={handleButtonClick}
              cursor={(post.buttonText === "Run Script.." || "Learn More..") ? "pointer" : "default"}
            >
              {post.buttonText}
            </Link>
          </Box>
        </Box>
      </Card>
    </>
  );
}

KeyAreaPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default KeyAreaPost;
