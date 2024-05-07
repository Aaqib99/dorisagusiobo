import {
    Box,
    Flex,
    Text,
} from "@chakra-ui/react";
import "../../../App.css";
import { useEffect, useState } from "react";
import masteryheroimage from "../../../assets/masteryheroimage.jpg";

function MasteryHero() {
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
                    <Box
                        as="span"
                        fontSize={{ base: "4xl", md: "4xl" }}
                        fontWeight="bold"
                        mt={{ base: "8", md: "14" }}
                        // ml={{ base: '2rem', md: '5rem', lg: "7rem" }}
                        sx={{
                            backgroundImage: 'linear-gradient(to right, #FF4667, #301E90)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent',
                            display: 'inline-block'
                        }}
                    >
                        The Mastery Hub Overview
                    </Box>
                    <Text mt={"2rem"} mb={6} color="blackAlpha.700">
                        An application designed to assemble top-tier educators from a range of technological disciplines
                    </Text>
                </Box>
                <Box w={["100%", "70%"]} >
                    <img
                        src={masteryheroimage}
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

export default MasteryHero;