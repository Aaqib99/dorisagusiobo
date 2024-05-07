import userjourneymapimage from "../../../assets/userjourneymapimage.svg";
import { Flex, Box, Text } from "@chakra-ui/react";

function UserJourneyMap() {
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
                    <Text ml="5rem" fontWeight="bold" fontSize={"36px"} color="#006D6C">
                        User Journey Ma
                        <span className="blinking-s">p</span>
                    </Text>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    To gain a holistic understanding of the user experience and to identify key touchpoints, pain points, and opportunities for improvement, I created a comprehensive User Journey Map. This visual representation chronicles the entire process a user goes through when interacting with our platform, from initial discovery to engagement, transaction, and finally, to long-term loyalty.
                </Text>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", marginTop: "3rem" }}>
                    <img
                        src={userjourneymapimage}
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

export default UserJourneyMap;
