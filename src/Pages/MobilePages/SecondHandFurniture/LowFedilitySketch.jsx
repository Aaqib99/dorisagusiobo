import lowfidelity from "../../../assets/lowfidelity.svg";
import { Flex, Box, Text } from "@chakra-ui/react";

function LowFedilitySketch() {
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
                        Low-fidelity Sketch
                    </Text>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    The initial phase of developing the marketing website involved sketching out design ideas that drew inspiration from both my UI mood board and other design references that resonated with the project's objectives. These preliminary sketches served as rough blueprints, allowing me to visualize the layout, flow, and key components that would eventually come together in the high-fidelity mockups.
                </Text>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto", marginTop: "3rem" }}>
                    <img
                        src={lowfidelity}
                        alt="image 1"
                        style={{
                            maxHeight: "auto",
                            width: "80%",
                        }}
                    />
                </div>
            </Box>
        </>
    )
}

export default LowFedilitySketch;
