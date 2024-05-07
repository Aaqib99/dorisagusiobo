// import * as React from "react";
import PropTypes from "prop-types";

import {
    Box,
    Card,
    Text,
} from "@chakra-ui/react";

// @ts-ignore
function SimilarAppPosts(props) {
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
                bgSize="cover"
                cursor="pointer"
                // boxShadow="0 1px 4px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.1)"
                _dark={{ bg: "dark", borderColor: "dark" }}
                _hover={{
                    ".icon": { transform: "translateX(10%)" },
                    boxShadow: "4px 8px 32px rgba(0, 0, 0, 0.5), 0 0 0 3px rgba(0, 0, 0, 0.1)", // Custom dense shadow on hover
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                    "& .description": {
                        transform: "translateX(5%)",
                        transition: "transform 0.3s ease",
                    },
                }}
            >
                <Box
                    width="100%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Box p={{ base: 4, md: 8 }} maxWidth="100%">
                        <Text
                            className="description"
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

SimilarAppPosts.propTypes = {
    pimage: PropTypes.shape({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
    }).isRequired,
};

export default SimilarAppPosts;
