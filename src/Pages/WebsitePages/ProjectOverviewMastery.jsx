import masteryoverviewbg from "../../assets/masteryhuboverviewbg.svg";
import {
    Box,
    Text,
} from "@chakra-ui/react";

const ProjectOverviewMastery = () => {
    return (
        <>
            <Text
                fontSize="4xl"
                fontWeight="medium"
                mt="5rem"
                ml={{ base: "12", md: "12", lg: "10" }}
                color={"black"}
            >
                Project Overview
            </Text>
            <Box
                ml={{ base: "2", md: "7" }}
                mr={{ base: "2", md: "7" }}
                mt={{ base: "2rem", md: "2rem", lg: "2rem" }}
                position="relative"
                backgroundImage={`url(${masteryoverviewbg})`}
                backgroundSize="cover"
                backgroundPosition="center center"
                backgroundRepeat="no-repeat"
                height={{ base: "540px", md: "590px", lg: "570px" }}
                color="white"
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"

            >
                <Text
                    fontSize={{ base: "lg", md: "3xl", lg: "3xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    position="relative"
                    color="white"
                    zIndex="1"
                    mt={"-5rem"}
                >
                    The Mastery Hub
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    mt={{ base: "2", md: "4", lg: "8" }}
                    textAlign="center"
                    ml={"5rem"}
                    mr={"5rem"}
                >
                    The platform serves as a digital hub for education in cutting-edge technological fields like AI, Big Data, Cloud Computing, and Business Analytics, among others. The platform delivers educational content through a variety of methods: asynchronous learning modules, real-time virtual classrooms, and enterprise-level training solutions. Additionally, we offer ongoing support around the clock to ensure students are equipped to advance their professional objectives.
                </Text>
            </Box>
        </>
    );
};

export default ProjectOverviewMastery;
