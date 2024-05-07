// import * as React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Card,
  Text,
} from "@chakra-ui/react";

// @ts-ignore
function PasswordImages(props) {
  const { pimage } = props;

  return (
    <>
      <Card
        width={{ base: "100%", sm: "100%", md: "80%", lg: "70%" }}
        height={{ base: "auto", sm: "auto", md: "auto", lg: "auto" }}
        mt={{ base: "2rem", sm: "0.5rem", lg: "1rem" }}
        ml={{ base: "0", sm: "2rem", lg: "2rem" }}
        display="flex"
        bgImage={pimage.image}
        borderRadius={0}
        bgSize="cover"
      >
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box p={{ base: 4, md: 8 }} maxWidth="100%">
            <Text
              fontSize={{ base: "16px", md: "20px", lg: "22px" }}
              color={"white"}
              mt={3}
              textAlign="center"
            >
              {pimage.description}
            </Text>
          </Box>
        </Box>
      </Card>
    </>
  );
}

PasswordImages.propTypes = {
  pimage: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default PasswordImages;
