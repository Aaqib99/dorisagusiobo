import usertesting from "../../../assets/usertesting.svg";
import { Flex, Box, Text } from "@chakra-ui/react";

function UserTesting() {
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
                        User Testing
                    </Text>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    I collaborated with knowledgeable insurance agents, incorporating common questions from sales interviews into the app. During user testing, I assessed question complexity, identified the threshold for a potentially tedious user experience, and monitored user flow for drop-off points.
                </Text>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
                    <img
                        src={usertesting}
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

export default UserTesting;
