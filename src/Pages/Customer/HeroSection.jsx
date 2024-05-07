
import "../../../src/App.css";
import { useEffect, useState } from "react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CarouselDefault } from "./CarouselDefault";

function HeroSection() {
  const navigate = useNavigate();
  const [isTop, setIsTop] = useState(true);
  const [showText, setShowText] = useState(false);

  const handleScroll = () => {
    setIsTop(window.pageYOffset === 0);
  };

  useEffect(() => {
    setShowText(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleButtonClick = () => {
    console.log("dsljfhsdj");
    navigate("/explore-services");
  };

  return (
    <Flex
      flexDir={["column", "row"]}
      alignItems="center"
      justifyContent={["center", "space-between"]}
      overflow="hidden"
      marginTop={"3rem"}
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
          fontSize={["4xl", "6xl"]}
          fontWeight="bold"
          letterSpacing="tight"
          color="blue.500"
          as="h3"
        >

          {Array.from("Doris Agusiobo").map((letter, index) => (
            <span
              key={index}
              style={{
                opacity: showText ? 1 : 0,
                animation: showText ? `typewriter 1.9s infinite ${index * 0.1}s` : 'none',
              }}
            >
              {letter}
            </span>
          ))}
        </Heading>
        <Text mb={6} color="blackAlpha.700">
          Hello! I’m Doris, a Maryland-based designer with a background in Graphic Design.
          I seek to solve complex problems and create meaningful experiences that bring
          value to communities and results for businesses.
        </Text>
        <Button
          bg="blue.500"
          w="70"
          mx={{ base: "auto", md: "0" }}
          _hover={{ bg: "blue.700" }}
          color="white"
          fontWeight="bold"
          py="2"
          px="4"
          rounded="md"
          onClick={handleButtonClick}
        >
          Explore App & Websites
        </Button>
      </Box>
      <Box w={["100%", "50%"]} position="relative">
        <CarouselDefault />
      </Box>
    </Flex>
  );
}

export default HeroSection;
