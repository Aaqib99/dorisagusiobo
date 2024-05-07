import { Grid, GridItem, Box, Text, Flex, Image } from "@chakra-ui/react";
import circleimage from "../../../assets/circle-image.png";

const VacProjectGoals = () => {
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
                    <Text ml="5rem" fontWeight="medium" color="dark">
                        Project Goals
                    </Text>
                    <Box>
                        <Image
                            h="auto"
                            maxW="100%"
                            position="absolute"
                            src={circleimage}
                            alt=""
                            ml="-2rem"
                            mt="-4rem"
                        />
                    </Box>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    The primary aim of this project was to create a user-friendly, flexible,
                    and scalable platform that would empower insurance managers to access
                    reliable and precise quotes while providing robust support to agents.
                    To achieve this overarching objective, I established the following design goals:
                </Text>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={8}
                    ml="5rem"
                    mt={8}
                    px={4}
                >
                    <GridItem colSpan={1}>
                        <Box
                            bg="#EDE6F9"
                            borderRadius="md"
                            p="2"
                            display="inline-block"
                        >
                            <Text
                                as="h3"
                                fontSize="lg"
                                color="#6F1DD8"
                                fontWeight="bold"
                                p="2"
                                borderRadius="md"
                            >
                                Enable the creation of accurate, modifiable, and searchable quotes
                            </Text>
                        </Box>
                        <Text fontSize={{ base: "sm", md: "lg" }} color={"gray.500"} mt={6} width={"90%"}>
                            Our primary objective is to revolutionize the way quotes are generated.
                            We aim to provide agents with a platform that allows for the creation
                            of precise and customizable quotes.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Box
                            bg="#EDE6F9"
                            borderRadius="md"
                            p="2"
                            display="inline-block"
                        >
                            <Text
                                as="h3"
                                fontSize="lg"
                                color="#6F1DD8"
                                fontWeight="bold"
                                p="2"
                                borderRadius="md"
                            >
                                Trained agents on best industry and encourages leads
                            </Text>
                        </Box>
                        <Text fontSize={{ base: "sm", md: "lg" }} color={"gray.500"} mt={6} width={"90%"}>
                            Equipping agents with industry knowledge and fostering lead
                            generation is another pivotal goal. We're committed to
                            creating a platform that not only streamlines the quoting
                            process but also serves as an educational tool.
                        </Text>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
};

export default VacProjectGoals;
