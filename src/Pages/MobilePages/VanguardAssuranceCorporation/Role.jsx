import {
    Box,
    Text,
    Heading,
} from "@chakra-ui/react";
function Role() {
    return (
        <>
            <Box
                bgColor={"gray.200"}
                width={["100%", "75%"]}
                mx={["0", "auto"]}
                mb="7"
                p="7"
                mt={["5rem", "7rem"]}
                borderRadius="md"
            >
                <Heading fontSize={["4xl", "5xl"]} textAlign="center" color="#6F1DD8">Role & Responsibilities</Heading>
                <Text as="p" fontSize={["md", "lg"]} mt={"2rem"} textAlign="center">
                    My role centered on a user-centric design methodology at Vanguard
                    Assurance Corporation (VAC). I conducted in-depth interviews with
                    insurance agents to understand their needs and challenges, which
                    formed the basis for problem definition.I then engaged in
                    ideation, prototyping, and testing phases, using feedback to iteratively refine designs.
                </Text>
            </Box>
        </>
    )
}

export default Role;