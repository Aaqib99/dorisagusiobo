// import * as React from "react";
import PropTypes from "prop-types";
import { Box, Card, Image, Text } from "@chakra-ui/react";

// @ts-ignore
function UpdateImage(props) {
  const { post } = props;

  return (
    <>
      <Card
        width="70%"
        mt={{ base: "3rem", md: "0" }}
        ml={{ base: "2rem", sm: "4rem", md: "2rem" }}
        display="flex"
        bgImage={post.image}
        borderRadius={0}
        boxShadow="none" // Remove box shadow to make it look like a square
      >
        <Box alignItems="center" justifyContent="center" mt={8} display="flex">
          <Image src={post.icon} alt={"abc"} height="100%" />
        </Box>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box p={{ base: 3, md: 6 }} maxWidth={{ base: "100%", md: "80%" }}>
            <Text
              fontSize={{ base: "sm", md: "lg" }}
              color={"white"}
              mt={3}
              textAlign="center"
            >
              {post.description}
            </Text>
          </Box>
        </Box>
      </Card>
    </>
  );
}

UpdateImage.propTypes = {
  post: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default UpdateImage;
