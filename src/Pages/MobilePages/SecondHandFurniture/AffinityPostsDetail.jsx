import PropTypes from "prop-types";
import {
    Box,
    Card,
    Center,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";

// @ts-ignore
function AffinityPostsDetail(props) {
    const { post } = props;

    return (
        <>
            <Center>
                <Card
                    width={{ base: "90%", md: "90%" }}
                    display="flex"
                    boxShadow="0 0 8px rgba(0, 0, 0, 0.2)"
                >
                    <Box alignItems="center" justifyContent="center" mt={8} display="flex">
                        <Box className="fade-in">
                            <Image src={post.image} alt={post.imageLabel} />
                        </Box>
                    </Box>
                    <Box
                        width="100%"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Box p={6} maxWidth={{ base: "100%", md: "90%" }}>
                            <Heading
                                as="h2"
                                size={{ base: "sm", md: "md" }}
                                color={"#2E6662"}
                                fontWeight={"bold"}
                                textAlign="center"
                            >
                                {post.title}
                            </Heading>
                            <Text fontSize={{ base: "sm", md: "lg" }} color={"gray.500"} mt={6} textAlign="center">
                                {post.description}
                            </Text>
                        </Box>
                    </Box>
                </Card>
            </Center>
        </>
    );
}

AffinityPostsDetail.propTypes = {
    post: PropTypes.shape({
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageLabel: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

export default AffinityPostsDetail;
