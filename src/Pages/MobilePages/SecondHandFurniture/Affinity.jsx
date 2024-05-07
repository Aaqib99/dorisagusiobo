import pain from "../../../assets/pain.svg";
import behavior from "../../../assets/behavior.svg";
import { Box, Flex, Grid, Text, Image } from "@chakra-ui/react";
import circleimage from "../../../assets/circle-image.png";
import AffinityPostsDetail from "./AffinityPostsDetail";

const Affinity = () => {
    const AffinityPosts = [
        {
            title: "Identifying Pains",
            description:
                `The insights gained from research participants played a pivotal role in shaping the application's core features. Feedback particularly highlighted key pain points like the inability to efficiently handle item transfer logistics and the challenge of staying within budget.`,
            image: pain,
            imageLabel: "value added",
        },
        {
            title: "Identifying Behaviors",
            description:
                `Additionally, the research illuminated important patterns in how users typically search for used furniture, which informed the design and functionality of the platform. This affinity clustering of feedback and observed behaviors helped fine-tune the application to meet real-world needs more effectively.`,
            image: behavior,
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
                <Text ml="5rem" fontWeight="bold" fontSize={"36px"} color="#006D6C">
                    Affinity Clustering
                </Text>
            </Flex>
            <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                Recognizing and understanding the challenges, frustrations,
                needs, actions, interactions, and habits of users or customers.
            </Text>
            <Grid
                templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                gap={{ base: 2, md: 2 }}
                padding={{ base: "10px", md: "10px 80px" }}
            >
                {AffinityPosts.map((post) => (
                    <Box key={post.title} width="100%" height="100%">
                        <AffinityPostsDetail post={post} />
                    </Box>
                ))}
            </Grid>
        </Box>
    );
};

export default Affinity;
