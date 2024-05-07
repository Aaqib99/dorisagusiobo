// @ts-ignore
import Lottie from "lottie-react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import managequote from "../../../assets/managequote.svg";
import strokeicon from "../../../assets/strokeicon.svg";
import quoteAnimation from "../../../Animations/quote.json";

function FinalDesign() {
    return (
        <>
            <Flex alignItems="center" ml={{ base: "2rem", md: "5rem" }} mt={{ base: "2rem", md: "7rem" }}>
                <Text
                    fontSize={{ base: "2xl", md: "4xl" }}
                    fontWeight="medium"
                    // mt={{ base: "2rem", md: "7rem" }}
                    // ml={{ base: "2rem", md: "5rem" }}
                    color={"#6F1DD8"}
                >
                    Final Designs
                </Text>
                <Image
                    width="fit-content"
                    src={strokeicon}
                    alt="image"
                    // mx="auto"
                    maxHeight="50px"
                    ml={{ base: "1rem", md: "3rem" }}
                />
            </Flex>
            {/* dashboard */}
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "2rem", md: "4rem" }}>
                <Box flex="1" alignItems="center" ml={"5rem"} mt={"2rem"}>
                    <Box width={180} height={180} ml={"-1rem"}>
                        <Lottie animationData={quoteAnimation} />
                    </Box>
                    <Box ml="2rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                            Manage Existing Quotes
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            Agents are enabled to complete their un-submitted quotes and check their recent quotes efficiently. This can save them time and effort by having all the necessary information and tools in one central location, and also it allows them to follow the status of their quotes easily. This feature can help agents to keep track of their quotes and improve their workflow, leading to more efficient and accurate insurance operations for the company.
                        </Text>
                    </Box>
                </Box>
                <Box mb={{ base: "2rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Image width="fit-content" src={managequote} alt="image" mx="auto" maxHeight="600px" />
                    </Box>
                </Box>

            </Flex>
        </>
    )
}

export default FinalDesign;
