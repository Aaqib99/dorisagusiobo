// import React from "react";
import { useEffect } from "react";
import continueimage from "../../../assets/continueimage.png";
import comma from "../../../assets/comma.svg";
import streetimgae from "../../../assets/streetimage.png";
import lockimage from "../../../assets/lockimage.png";
import codeimage from "../../../assets/codeimage.png";
import polygon from "../../../assets/polygon.png";
import laptopchip from "../../../assets/laptopchip.png";
import building from "../../../assets/building.png";
import circleimage from "../../../assets/circle-image.png";

import {
  Box,
  Image,
  Text,
  Flex,
  Container,
  Heading,
  Grid,
} from "@chakra-ui/react";
import UpdateImage from "./UpdateImage";
import Footer from "../../Footer/Footer";

function ContinueReading() {
  const InsideImages1 = [
    {
      icon: comma,
      title: "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      description:
        "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      image: streetimgae,
    },
    {
      icon: comma,
      title: "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      description:
        "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      image: lockimage,
    },
    {
      icon: comma,
      title: "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      description:
        "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      image: codeimage,
    },
  ];
  const InsideImages2 = [
    {
      icon: comma,
      title: "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      description:
        "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      image: polygon,
    },
    {
      icon: comma,
      title: "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      description:
        "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      image: laptopchip,
    },
    {
      icon: comma,
      title: "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      description:
        "From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.",
      image: building,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box
        height={{ base: '20rem', md: '30rem', lg: '40rem' }}
        bgImage={continueimage}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Container maxW="8xl">
          <Flex
            justifyContent={{ base: 'center', md: 'flex-start', lg: 'center' }}
            alignItems={{ base: 'center', md: 'flex-start', lg: 'center' }}
            height="100%"
            flexDir={{ base: 'column', md: 'row' }}
            textAlign="center"
          >
            <Box
              // mb={{ base: '1rem', md: '0' }}
              mt={{ base: '2rem', md: '13rem' }}
              mx={{ base: 'auto', md: '0' }}
              textAlign={{ base: 'center', md: 'center' }}
            >
              {/* <Image src={comma} alt="comma" width={{ base: '70%', md: '40%' }} mx="auto" /> */}
            </Box>
            <Flex flexDir="column" alignItems="center" ml={{ md: '4rem' }}>
              <Heading
                mt={{ base: '3rem', md: '3rem', lg: "7rem" }}
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                color="white"
                fontWeight="semibold"
              >
                Via-Cyber Protected
              </Heading>
              <Heading
                fontSize={{ base: '2xl', md: '4xl', lg: '5xl' }}
                color="white"
                fontWeight="semibold"
              >
                Meaningful text
              </Heading>
            </Flex>
          </Flex>
        </Container>
      </Box>

      {/* 2nd element */}
      <Box mt={["3rem", "6rem"]}>
        <Box>
          <Image
            h="auto"
            maxW="auto"
            position="absolute"
            src={circleimage}
            alt=""
            ml={["1rem", "2rem"]}
            mt={["-2rem", "-3rem"]}
          />
        </Box>
        <Text fontSize={["xl", "2xl"]} ml={["1rem", "7rem"]} fontWeight="bold" mt={["8", "10"]}>
          Modern Cyber Cloud
        </Text>
        <Text as="p" ml={["1rem", "7rem"]} fontSize={["sm", "md"]} mt={["2", "4"]} width="80%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960s with
          the release of Letraset sheets containing.
        </Text>
        <Text as="p" ml={["1rem", "7rem"]} mt={["3", "6"]} color={"#C1C1C1"}>
          SECURITY RESEARCH
        </Text>
        <Text fontSize={["md", "xl"]} ml={["1rem", "7rem"]} fontWeight="bold" mt={["2", "4"]}>
          From One Vulnerability to Another: Outlook Patch Analysis Reveals Important Flaw in Windows API.
        </Text>
        <Text as="p" ml={["1rem", "7rem"]} mt={["2", "4"]}>
          {/* Your text content */}
        </Text>
      </Box>
      <Grid
        templateColumns={["1fr", "repeat(3, 1fr)"]}
        padding={["20px", "20px 80px"]}
      >
        {InsideImages1.map((post) => (
          <Box key={post.title} width="100%" height="100%">
            {/* Assuming UpdateImage is a component that renders the image */}
            <UpdateImage post={post} />
          </Box>
        ))}
      </Grid>
      <Text as="p" ml={["1rem", "7rem"]} fontSize={["sm", "md"]} mt={["2rem", "3rem"]} width="80%">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularized in the 1960s with the release
        of Letraset sheets containing.
      </Text>

      {/* 3rd element */}

      <Box mt={['3rem', '4rem', '6rem']} px={['1rem', '2rem', '3rem']}>
        <Box position="relative">
          <Image
            h="auto"
            maxW="auto"
            position="absolute"
            src={circleimage}
            alt=""
            ml="2rem"
            mt={['-1rem', '-2rem', '-3rem']}
          />
        </Box>
        <Text fontSize={["xl", "2xl"]} ml={["1rem", "7rem"]} fontWeight="bold" mt={["8", "10"]}>
          Phishing Websites
        </Text>
        <Text as="p" ml={["1rem", "7rem"]} fontSize={["sm", "md"]} mt={["2", "4"]} width="80%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960s with
          the release of Letraset sheets containing. There are many variations
          of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which
          don't look even slightly believable. If you are going to use a passage
          of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text.
        </Text>
        <Text as="p" ml={["1rem", "7rem"]} fontSize={["sm", "md"]} mt={["2", "4"]} width="80%">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33
        </Text>
      </Box>

      {/* 4rth element */}
      <Box mt="6rem">
        <Box>
          <Image
            h="auto"
            maxW="auto"
            position="absolute"
            src={circleimage}
            alt=""
            ml="2rem"
            mt="-3rem"
          />
        </Box>
        <Text fontSize={["xl", "2xl"]} ml={["1rem", "7rem"]} fontWeight="bold" mt={["8", "10"]}>
          The Cyber Linux Systems
        </Text>
        <Text as="p" ml={["1rem", "7rem"]} fontSize={["sm", "md"]} mt={["2", "4"]} width="80%">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularized in the 1960s with
          the release of Letraset sheets containing. There are many variations
          of passages of Lorem Ipsum available, but the majority have suffered
          alteration in some form, by injected humour, or randomised words which
          don't look even slightly believable. If you are going to use a passage
          of Lorem Ipsum, you need to be sure there isn't anything embarrassing
          hidden in the middle of text.
        </Text>
        <Text as="p" ml={["1rem", "7rem"]} fontSize={["sm", "md"]} mt={["2", "4"]} width="80%">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33
        </Text>
      </Box>
      <Grid
        templateColumns={["1fr", "repeat(3, 1fr)"]}
        padding={["20px", "20px 80px"]}
      >
        {InsideImages2.map((post) => (
          <Box key={post.title} width="100%" height="100%">
            <UpdateImage post={post} />
          </Box>
        ))}
      </Grid>
      <Footer />
    </>
  );
}

export default ContinueReading;
