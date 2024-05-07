import { Grid, GridItem, Box, Text, Flex, } from "@chakra-ui/react";


const PainPoints = () => {
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
                        Pain Points
                    </Text>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    My research showed that for the local wilderness tourism community, the focus must
                    transition from price wars to meeting visitor needs for long-term engagement. The
                    objective should center on creating enduring value and building lasting loyalty among consumers.
                </Text>
                <Grid
                    templateColumns={{ base: "1fr", md: "1fr 1fr" }}
                    gap={8}
                    ml="5rem"
                    mt={8}
                    px={4}
                >
                    <GridItem colSpan={1}>
                        <Text as="h3"
                            size={{ base: "xs", md: "xs" }} // Adjusting font size for responsiveness
                            color={"#FFB03B"}
                            fontWeight={"bold"}>
                            Monetary Strains
                        </Text>
                        <Text fontSize={{ base: "sm", md: "lg" }} color={"gray.500"} mt={6} width={"90%"}>
                            Amid the financial constraints induced by the pandemic, pursuing a
                            competitive strategy based on price reduction or offering discounts
                            becomes an impractical avenue for businesses. Many are already
                            grappling with decreased revenue streams, increased operational costs,
                            and, in some cases, significant debt incurred to stay afloat during
                            the worst of the crisis. In this precarious financial landscape,
                            undercutting prices or offering significant discounts could further
                            erode already thin profit margins, making it unsustainable for
                            businesses in the long run.
                        </Text>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Text as="h3"
                            size={{ base: "xs", md: "xs" }} // Adjusting font size for responsiveness
                            color={"#FFB03B"}
                            fontWeight={"bold"}>
                            User Preferences
                        </Text>
                        <Text fontSize={{ base: "sm", md: "lg" }} color={"gray.500"} mt={6} width={"90%"}>
                            The data collected from our interviews and surveys paints a
                            compelling picture: users are less attracted to budget-friendly
                            options and more inclined toward tailored, thoroughly researched
                            experiences. People are seeking more than just monetary value. They
                            want experiences that resonate with their interests, lifestyles, and
                            values.
                        </Text>
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
};

export default PainPoints;
