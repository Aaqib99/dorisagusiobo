// import vulnerable from "../../../assets/vulnerable.png";
// import password from "../../../assets/password.png";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import KeyAreaPost from "./KeyAreaPost";

const KeyAreas = () => {
    const KeyAreaPosts = [
        {
            id: 1,
            title: "Role & responsibilities",
            date: "Aug 17, 2021",
            description:
                `My role centered on a user-centric design methodology at Vanguard
                Assurance Corporation (VAC). I conducted in-depth interviews with 
                insurance agents to understand their needs and challenges, which 
                formed the basis for problem definition.I then engaged in 
                ideation, prototyping, and testing phases, using feedback to iteratively refine designs.`,
            // image: password,
            imageLabel: "Role",
        },
        {
            id: 2,
            title: "Tools & Methods",
            date: "Sep 03, 2021",
            description:
                `Figma was the primary tool I used for designing and 
                prototyping and relied heavily on user research to 
                uncover user pain points, behaviour, and needs. Then I
                 continued to further refine my design concept using Miro`,
            // image: vulnerable,
            imageLabel: "vulnerable",
        },
    ];
    return (
        <Box
            position="relative"
            mt={16}
            w="full"
            display="flex"
            flexDir="column"
            alignItems="start"
            justifyContent="start"
            gap="16px"
            textAlign="left"
            fontSize="36px"
            color="darkslategray.200"
        >
            <Flex alignItems="center">
                <Text ml="5rem" fontWeight="medium" color="dark">
                    Key Areas
                </Text>
            </Flex>
            <Grid
                templateColumns={["1fr", "repeat(2, 1fr)"]}
                gap={8}
                padding={["20px", "20px 80px"]}
            >
                {KeyAreaPosts.map((post) => (
                    <KeyAreaPost key={post.title} post={post} />
                ))}
            </Grid>
        </Box>
    );
};

export default KeyAreas;
