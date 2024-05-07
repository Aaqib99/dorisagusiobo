import persona1 from "../../../assets/persona1.svg";
import persona2 from "../../../assets/persona2.svg";
import { Box, Text, } from "@chakra-ui/react";

function Persona() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
                <img
                    src={persona1}
                    alt="image 1"
                    style={{
                        maxHeight: "auto",
                        width: "80%",
                    }}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}>
                <img
                    src={persona2}
                    alt="image 1"
                    style={{
                        maxHeight: "auto",
                        width: "80%",
                    }}
                />
            </div>
            <Box
                width={["100%", "75%"]}
                mx={["0", "auto"]}
                mb="7"
                p="7"
                mt={["2rem", "3rem"]}
                borderRadius="md"
            >
                <Text fontSize={["lg", "3xl"]} mt={"2rem"} textAlign="center" color={"#6F1DD8"}>
                    “How might we design a more centralized and manageable application
                    to make it easier for managers and agents to provide accurate
                    quotes and consistently reliable service?”
                </Text>
            </Box>
        </>
    )
}

export default Persona
