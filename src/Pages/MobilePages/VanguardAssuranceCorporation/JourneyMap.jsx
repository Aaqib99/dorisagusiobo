import journeymap from "../../../assets/journeymap.svg";
import { Flex, Box, Text } from "@chakra-ui/react";

function JourneyMap() {
    return (
        <>
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
                    <Text ml="5rem" fontWeight="bold" fontSize={"36px"} color="#6F1DD8">
                        VAC Agent’s Macro Journey Map
                    </Text>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    Following a thorough analysis of the personas, I developed a journey map to gain insight
                    into how agents presently perform their tasks and to pinpoint the pain points they
                    encounter. By deconstructing the process into discrete micro-steps, a clear pattern
                    emerged, revealing that the current workflow often impedes agents from achieving a
                    sense of satisfaction when completing questionnaires with customers. This
                    frustration introduces a heightened risk of errors occurring before
                    the finalization of quotes for customers.
                </Text>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
                    <img
                        src={journeymap}
                        alt="image 1"
                        style={{
                            maxHeight: "auto",
                            width: "90%",
                        }}
                    />
                </div>
            </Box>
        </>
    )
}

export default JourneyMap;
