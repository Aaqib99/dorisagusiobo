// @ts-ignore
import Lottie from "lottie-react";
import { Box, Text, Flex } from "@chakra-ui/react";
import graphAnimation from "../../../Animations/graph1.json";

function IndustryResearch() {
    return (
        <>
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "2rem", md: "4rem" }}>
                <Box flex="1" display="flex" alignItems="center">

                    <Box ml="4rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2" color={"#6F1DD8"}>
                            Industry Research
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            The catalyst for reorienting business priorities predominantly stems
                            from insights gathered from frontline insurance agents. When engaged
                            in direct conversations about their key objectives, these agents
                            consistently emphasize
                            <Text as="span" fontWeight="bold" fontStyle="italic" color={"black"}>  the importance of delivering proposals to
                                clients with minimal delay.</Text>
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%" mt={"3rem"}>
                            However, it's worth noting that the administrative bottlenecks
                            which inhibit streamlined, straight-through processing
                            also serve as obstacles that
                            <Text as="span" fontWeight="bold" fontStyle="italic" color={"black"}> compromise these agents'
                                ability to rapidly produce proposals. </Text>This internal
                            friction reveals a systemic issue that needs to be
                            addressed for both operational efficiency and
                            customer satisfaction.
                        </Text>
                    </Box>
                </Box>
                <Box mb={{ base: "0rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={"14rem"}>
                        <Text width={"70%"} fontSize={"2xl"} fontWeight={"bold"}>How satisfied were you with how the
                            insurance company/agent handled the claim?</Text>
                        <Text color="red.500" >Animated Graph</Text>
                        <Lottie animationData={graphAnimation} />
                    </Box>
                </Box>

            </Flex>
            <Box
                width={["100%", "75%"]}
                mx={["0", "auto"]}
                mb="7"
                p="7"
                mt={["2rem", "3rem"]}
                borderRadius="md"
            >
                <Text fontSize={["lg", "3xl"]} mt={"2rem"} textAlign="center">
                    “Omnichannel communication and transparency are two reasons. Most
                    insurers allow customers to open a claim on a website or app.
                    According to our survey, drives satisfaction rates more than
                    anything else: speed of settlement. The longer it takes to settle
                    a claim, the less satisfied that policyholder will be.”
                </Text>
                <Text fontSize={["lg", "3xl"]} mt={"2rem"} textAlign="center">
                    Darcy Dague, Accenture Managing Director - Insurance
                </Text>
            </Box>
        </>
    )
}

export default IndustryResearch