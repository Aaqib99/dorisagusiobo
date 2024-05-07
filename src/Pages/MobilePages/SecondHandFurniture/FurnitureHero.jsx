import {
    Box,
    Flex,
    // Image,
    Heading,
    Text,
} from "@chakra-ui/react";
import "../../../App.css";
import { useEffect, useState } from "react";
import assurancehero from "../../../assets/furniturehero.svg";

function FurnitureHero() {
    const [isTop, setIsTop] = useState(true);

    const handleScroll = () => {
        setIsTop(window.pageYOffset === 0);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <Flex
                flexDir={["column", "row"]}
                alignItems="center"
                justifyContent={["center", "space-between"]}
                overflow="hidden"
                marginTop={"2rem"}
                zIndex="1000"
            >
                <Box
                    maxW={["100%", "50%"]}
                    px={[4, 6, 12]}
                    py={12}
                    textAlign={["center", "left"]}
                    className={isTop ? "slide-in" : ""}
                >
                    <div className="circle"></div>
                    <Heading
                        mt={0}
                        mb={6}
                        fontSize={["4xl", "5xl"]}
                        fontWeight="bold"
                        letterSpacing="tight"
                        color="#006D6C"
                        as="h4"
                    >
                        Second-Hand Furniture Simplified
                    </Heading>
                    <Text mb={6} color="blackAlpha.700">
                        Eliminate the complexities and inefficiencies commonly associated with buying and selling used furniture                    </Text>
                </Box>
                <Box w={["100%", "70%"]} >
                    <img
                        src={assurancehero}
                        alt="image 1"
                        style={{
                            maxHeight: "80%",
                            width: "80%",
                            marginLeft: "5rem",
                            animation: "pulse 1.5s infinite alternate",
                        }}
                    />
                </Box>
            </Flex>
        </>
    )
}

export default FurnitureHero;