
import cyber3 from "../../assets/masteryhubweb.png";
import cyber1 from "../../assets/website1.jpeg";
import smeicon from "../../assets/smeicon.svg";
import cyber2 from "../../assets/website2.jpeg";
import laptopicon from "../../assets/laptop.svg";
import { Box, Center, Flex, Grid, Image, Link, Text } from "@chakra-ui/react";

export default function SmeSection() {
  return (
    <Box mt={16} px={[4, 8, 16, 20]}>
      <Box
        mb={12}
        fontSize={["3xl", "4xl"]}
        color="darkslategray.200"
        // fontFamily="mulish"
        textAlign="left"
        position="relative"
      >
        <Flex alignItems="center">
          <Text fontWeight="medium" color="dark">
            {" "}
            Website Designs{" "}
          </Text>
          <Box ml={2}>
            <Image h="auto" ml="1rem" maxW="40px" src={laptopicon} alt="" />
          </Box>
        </Flex>
      </Box>

      <Grid templateColumns={["1fr", "1fr", "1fr", "1fr 1fr 1fr"]} gap="7rem">
        <Box
          display="inline-block"
          mt={0}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="lg"
          shadow="md"
          _dark={{ bg: "gray.800", borderColor: "gray.700" }}
          _hover={{
            ".icon": { transform: "translateX(10%)" },
            shadow: "xl",
            transition: "shadow 0.3s ease, transform 0.3s ease",
          }}
        >
          <Box borderTopRadius="lg" overflow="hidden">
            <Image mx="auto" w="100%" h="auto" src={cyber3} alt="" />
          </Box>
          <Box p={5}>
            <Text
              mb={2}
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.800"
              _dark={{ color: "white" }}
            >
              {" "}
              The Mastery Hub{" "}
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              {" "}
              A digital education hub offering diverse courses in technology and business sectors.
            </Text>
            <Center mt={3}>
              <Link href="/the-mastery-hub-website" display="inline-flex" py={2}>
                <Image src={smeicon} alt="cyber-essentials" className="icon" />
              </Link>
            </Center>
          </Box>
        </Box>
        <Box
          display="inline-block"
          mt={0}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="lg"
          shadow="md"
          _dark={{ bg: "gray.800", borderColor: "gray.700" }}
          _hover={{
            ".icon": { transform: "translateX(10%)" },
            shadow: "xl",
            transition: "shadow 0.3s ease, transform 0.3s ease",
          }}
        >
          <Box borderTopRadius="lg" overflow="hidden">
            <Image mx="auto" w="100%" h="auto" src={cyber1} alt="" />
          </Box>
          <Box p={5}>
            <Text
              mb={2}
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.800"
              _dark={{ color: "white" }}
            >
              {" "}
              Website Name 2{" "}
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              {" "}
              Following the issue of the Net Systems <br /> (NIS) Regulations...{" "}
            </Text>
            <Center mt={3}>
              <Link href="/preparing-cyber" display="inline-flex" py={2}>
                <Image src={smeicon} alt="preparing-cyber" className="icon" />
              </Link>
            </Center>
          </Box>
        </Box>{" "}
        <Box
          display="inline-block"
          mt={0}
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          rounded="lg"
          shadow="md"
          _dark={{ bg: "gray.800", borderColor: "gray.700" }}
          _hover={{
            ".icon": { transform: "translateX(10%)" },
            shadow: "xl",
            transition: "shadow 0.3s ease, transform 0.3s ease",
          }}
        >
          <Box borderTopRadius="lg" overflow="hidden">
            <Image mx="auto" w="100%" h="auto" src={cyber2} alt="" />
          </Box>
          <Box p={5}>
            <Text
              mb={2}
              fontSize="2xl"
              fontWeight="bold"
              letterSpacing="tight"
              color="gray.800"
              _dark={{ color: "white" }}
            >
              Website Name 3
            </Text>
            <Text fontSize="sm" color="gray.700" _dark={{ color: "gray.400" }}>
              Following the issue of the Net Systems <br /> (NIS) Regulations...
            </Text>
            <Center mt={3}>
              <Link href="/certification-process" display="inline-flex" py={2}>
                <Image src={smeicon} alt="certification-process" className="icon" />
              </Link>
            </Center>
          </Box>
        </Box>{" "}
      </Grid>
    </Box>
  );
}
