// @ts-ignore
import Lottie from "lottie-react";
import manageexistingquotescreens from "../../../assets/manageexistingquotescreens.svg";
import first4 from "../../../assets/first4.svg";
import last4 from "../../../assets/last4.svg";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import quotesummary from "../../../assets/quotesummary.svg";
import editablequoteAnimation from "../../../Animations/editablequote.json";

function ManageExistingQuoteScreens() {
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
                        Manage Existing Quote
                    </Text>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    Completing a quote form with multiple questions can be tedious and may cause users to disengage from the process. Furthermore, it can be challenging for agents to capture accurate information while on the phone with customers. To alleviate these issues, we have divided the form into separate screens. This allows agents to clearly present each question to the customer and confirm their responses, reducing the likelihood of errors and creating a more seamless experience.                </Text>
            </Box>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", marginTop: "5rem" }}>
                <img
                    src={manageexistingquotescreens}
                    alt="image 1"
                    style={{
                        maxHeight: "auto",
                        width: "70%",
                    }}
                />
            </div>
            {/* Editable Quote Summary */}
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "8rem", md: "10rem" }}>
                <Box mb={{ base: "2rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Image width="fit-content" src={quotesummary} alt="image" mx="auto" maxHeight="600px" />
                    </Box>
                </Box>
                <Box flex="1" display="flex" alignItems="flex-start" mt={"12rem"}>
                    <Box width="700px">
                        <Lottie animationData={editablequoteAnimation} />
                    </Box>
                    <Box ml="2rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                            Editable Quote Summary
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            Agents are able to review and adjust the information after it has been entered. This allows for any inaccuracies or errors to be corrected quickly and easily. Additionally, the feature allows agents to share or print the quote to customers, providing them with a clear and comprehensive overview of the information.
                        </Text>
                    </Box>
                </Box>
            </Flex>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", marginTop: "9rem", animation: "galleryanim 1.5s infinite alternate" }}>
                <img
                    src={first4}
                    alt="image 1"
                    style={{
                        maxHeight: "auto",
                        width: "90%",
                    }}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", animation: "galleryanim 1.5s infinite alternate" }}>
                <img
                    src={last4}
                    alt="image 1"
                    style={{
                        maxHeight: "auto",
                        width: "90%",
                    }}
                />
            </div>
        </>
    )
}

export default ManageExistingQuoteScreens;
