import { Grid, GridItem, Box, Text, Flex, } from "@chakra-ui/react";
import audience1 from "../../../assets/audience1.png";
import audience2 from "../../../assets/audience2.jpg";

const TargetAudience = () => {
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
                        Target Audience
                    </Text>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    The targeted demographic comprises individuals who prioritize healthy living
                    and sustainable practices. Their reduced sensitivity to price fluctuations
                    sets them on a path to more rapid financial recovery. Additionally,
                    this segment of consumers has a natural affinity for eco-friendly travel experiences.
                </Text>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={8}
                    ml="3rem"
                    mt={8}
                    px={4}
                >
                    <GridItem colSpan={1}>
                        <img
                            src={audience1}
                            alt="image 1"
                            style={{
                                maxHeight: "80%",
                                width: "80%",
                                marginLeft: "5rem",
                                animation: "pulse 1.5s infinite alternate",
                                borderRadius: "10px",
                            }}
                        />
                    </GridItem>
                    <GridItem colSpan={1}>
                        <img
                            src={audience2}
                            alt="image 1"
                            style={{
                                maxHeight: "80%",
                                width: "80%",
                                marginLeft: "5rem",
                                animation: "pulse 1.5s infinite alternate",
                                borderRadius: "10px",
                            }}
                        />
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
};

export default TargetAudience;
