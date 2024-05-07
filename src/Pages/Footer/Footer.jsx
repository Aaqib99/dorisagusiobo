import { Box, Text, Link, Grid, Heading, Image, } from "@chakra-ui/react";
// @ts-ignore
import bluelogo from "../../assets/doris-logo.png";
import facebook from "../../assets/facebook.svg";
import linkedin from "../../assets/linkedin.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Box
        bg="blue.500"
        borderRadius="60px 60px 0 0"
        width="15%"
        mt={"5rem"}
        pb={1}
        pt={1}
        textAlign="center"
        color="white"
        marginX="auto"
        left={0}
        animation="slide 6s linear infinite"
      ></Box>

      <Box>
        <Box
          bg="blue.50"
          textAlign={{ base: "center", md: "left" }}
          color="gray.600"
          _dark={{
            bg: "neutral.600",
            color: "neutral.200",
            borderColor: "neutral.500",
          }}
          display="flex"
          alignItems="center"
        >
          <Box mx={6} py={4} textAlign={{ base: "center", md: "left" }}>
            <Grid
              gap={8}
              gridTemplateColumns={{
                base: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              }}
            >
              <Box width={{ base: "100%", md: "70%" }}>
                <Image width={"40%"} ml={"1rem"} src={bluelogo} alt="" />
                <Text mt={4} ml={"2rem"}>
                  {" "}
                  Welcome to Doris Augiosbo, where innovation meets creativity!
                  We specialize in providing cutting-edge mobile app design and
                  website design services tailored to meet your unique business needs.
                </Text>

              </Box>
              {/* main */}
              <Box m={4}>
                <Heading
                  size="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                  display="flex"
                  alignItems="center"
                  color={"blue.500"}
                  justifyContent={{ base: "center", md: "start" }}
                >
                  WEB
                </Heading>
                <Text mt="4">
                  {" "}
                  <Link
                    href="#!"
                    color="neutral.600"
                    _dark={{ color: "neutral.200" }}
                  >
                    {" "}
                    The Mastery Hub{" "}
                  </Link>{" "}
                </Text>

                <Heading
                  size="sm"
                  fontWeight="bold"
                  textTransform="uppercase"
                  display="flex"
                  alignItems="center"
                  color={"blue.500"}
                  justifyContent={{ base: "center", md: "start" }}
                  mt={"3rem"}
                >
                  SOCIAL LINKS
                </Heading>
                <Box
                  display="flex"
                  gap="30px"
                  mt={"1rem"}
                >
                  <a href="https://www.linkedin.com/in/doris-agusiobo-echianu-83571764?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BNbACbiuqTBC7c5Oh8wS6NA%3D%3D" target="_blank">
                    <Box fontSize="24px" color="blue.500">
                      <Image src={linkedin} alt="" />
                    </Box>
                  </a>
                  <a href="https://www.facebook.com/doris.echianu?mibextid=kFxxJD" target="_blank">
                    <Box fontSize="24px" color="blue.500">
                      <Image src={facebook} alt="" />
                    </Box>
                  </a>
                </Box>
              </Box>
              {/* sme's */}
              <Box m={4}>
                <Heading
                  fontWeight="bold"
                  textTransform="uppercase"
                  display="flex"
                  size="sm"
                  color={"blue.500"}
                  justifyContent={{ base: "center", md: "start" }}
                >
                  {" "}
                  MOBILE
                </Heading>
                <Text mt="4">
                  {" "}
                  <Link
                    href="#!"
                    color="neutral.600"
                    _dark={{ color: "neutral.200" }}
                  >
                    {" "}
                    Wilderness Tourism{" "}
                  </Link>{" "}
                </Text>
                <Text mt="2">
                  {" "}
                  <Link
                    href="#!"
                    color="neutral.600"
                    _dark={{ color: "neutral.200" }}
                  >
                    {" "}
                    Vanguard Assurance Corporation
                  </Link>{" "}
                </Text>
                <Text mt="2">
                  {" "}
                  <Link
                    href="#!"
                    color="neutral.600"
                    _dark={{ color: "neutral.200" }}
                  >
                    Second-Hand Furniture Simplified
                  </Link>{" "}
                </Text>
              </Box>
              {/* question */}
              <Box m={4}>
                <Heading
                  fontWeight="bold"
                  textTransform="uppercase"
                  display="flex"
                  size="sm"
                  color={"blue.500"}
                  justifyContent={{ base: "center", md: "start" }}
                >
                  {" "}
                  HAVE A QUESTION?{" "}
                </Heading>
                <Box
                  alignItems={{ base: "center", md: "start" }}
                  justifyContent={{ base: "center", md: "start" }}
                  display="flex"
                  mt="4"
                >
                  <Box
                    as="span"
                    marginRight={6}
                    h={"6"}
                    w={"6"}
                    display="inline-block"
                    verticalAlign="middle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#3182ce"
                      style={{ verticalAlign: "top" }}
                    >
                      <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                      <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                    </svg>
                  </Box>
                  1 Merrill road Apt 1b, Catonsville MD .
                </Box>
                <Box
                  alignItems={{ base: "center", md: "start" }}
                  justifyContent={{ base: "center", md: "start" }}
                  display="flex"
                >
                  <Box
                    as="span"
                    marginRight={6}
                    h={"5"}
                    mt="2"
                    w={"5"}
                    display="inline-block"
                    verticalAlign="middle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#3182ce"
                      style={{ verticalAlign: "top" }}
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                  </Box>
                  <Box mt="1">duchess.doris@gmail.com</Box>
                </Box>
                <Box
                  alignItems={{ base: "center", md: "start" }}
                  justifyContent={{ base: "center", md: "start" }}
                  display="flex"
                  mt="5"
                >
                  <Box
                    as="span"
                    marginRight={6}
                    h={"5"}
                    w={"5"}
                    display="inline-block"
                    verticalAlign="middle"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#3182ce"
                      style={{ verticalAlign: "top" }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Box>
                  +1 (443) 881-0523
                </Box>
                {/* <form className="mt-6">
                  <Box maxW="lg" pos="relative" mt="6">
                    <label
                      htmlFor="email"
                      style={{ marginBottom: 2, fontWeight: "semibold" }}
                    >
                      {" "}
                      Get Updates{" "}
                    </label>
                    <Box
                      flex="1"
                      rounded="full"
                      p={1}
                      mt="2"
                      border="1px"
                      borderColor="black"
                      display="flex"
                      alignItems="center"
                    >
                      <Input
                        w="full"
                        fontSize="sm"
                        fontWeight="medium"
                        border="none"
                        outline="none"
                        _focus={{ outline: "none", ring: "0" }}
                        id="email"
                        type="email"
                        placeholder="Email address..."
                      />
                      <Box>
                        <Image src={sendemail} alt="" />
                      </Box>
                    </Box>
                  </Box>
                </form> */}
              </Box>
            </Grid>
          </Box>
        </Box>
        <Box bg="blue.50">
          <Box
            bg="blue.500"
            borderRadius="60px 60px 60px 60px"
            width="30%"
            pb={2}
            pt={2}
            marginBottom={4}
            textAlign="center"
            color="white"
            marginX="auto"
          >
            <Text>© 2023 Copyright DORIS-AUGIOSBO. All rights reserved</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
