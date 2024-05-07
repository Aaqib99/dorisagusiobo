import assuranceprojectbg from "../../../assets/assuranceprojectbg.svg";
import {
    Box,
    Text,
} from "@chakra-ui/react";

const Overview = () => {
    return (
        <>
            <Text
                fontSize="4xl"
                fontWeight="medium"
                mt="5rem"
                ml={{ base: "16", md: "16", lg: "16" }}
            >
                Project Overview
            </Text>
            <Box
                ml={{ base: "2", md: "7" }}
                mr={{ base: "2", md: "7" }}
                mt={{ base: "2rem", md: "2rem", lg: "2rem" }}
                position="relative"
                backgroundImage={`url(${assuranceprojectbg})`}
                backgroundSize="cover"
                backgroundPosition="center center"
                backgroundRepeat="no-repeat"
                height={{ base: "500px", md: "450px", lg: "500px" }}
                color="black"
                textAlign="center"
                display="flex"
                flexDirection="column"
                justifyContent="center"

            >
                <Text
                    fontSize={{ base: "lg", md: "2xl", lg: "4xl" }}
                    fontWeight="bold"
                    textAlign="center"
                    position="relative"
                    color="#6F1DD8"
                    zIndex="1"
                >
                    VAC's Software Overhaul: Modernizing for Efficiency
                </Text>
                <Text
                    as="p"
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    mt={{ base: "2", md: "4", lg: "8" }}
                    textAlign="center"
                    ml={"5rem"}
                    mr={"5rem"}
                >
                    Vanguard Assurance Corporation (VAC) is a hypothetical US-based insurance
                    provider specializing in car insurance services. VAC encountered significant
                    operational challenges that necessitated a comprehensive overhaul.
                    Foremost among these challenges was an outdated mainframe software system,
                    which proved inflexible and resistant to updates. This hindered
                    independent agents from effectively utilizing VAC's software, resulting
                    in notable business losses. Despite attempts to modernize the software,
                    complications arose, exacerbating the existing issues.
                </Text>
            </Box>
        </>
    );
};

export default Overview;
