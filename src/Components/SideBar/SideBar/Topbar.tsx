import {
  Box,
  Flex,
  Image,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import NavItem from "./NavItem";
import { Link } from "react-router-dom";
// @ts-ignore
import logo from "../../../assets/doris-logo.png";
import resumepdf from "../../../assets/resumepdf/Doris+Agusiobo+Resume.pdf";

function TopbarUnsigned() {
  const handleResumeClick = () => {
    window.open(resumepdf, "_blank");
  };
  return (
    <>
      <Box>
        <Flex
          flexDir={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          p={{ base: 2, md: 4 }}
          borderBottomWidth={{ base: "1px", md: "0px" }}
          borderBottomColor={useColorModeValue("gray.200", "gray.700")}
        >
          <Link to={"/"}>
            <Image src={logo} alt="ViaCyber-Logo" width={{ base: "5rem", md: "5rem" }} marginLeft={"3rem"} />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            flexDir="row"
            align="center"
            justifyContent="center"
            flex="1"
          >
            <NavItem to="/" color="blue.500" mx={2}>
              Home
            </NavItem>
            <NavItem to="/app-design" color="blue.500" mx={2}>
              App Design
            </NavItem>
            <NavItem to="/website-design" color="blue.500" mx={2}>
              Website Design
            </NavItem>
            <NavItem to="/about-me" color="blue.500" mx={2}>
              About Me
            </NavItem>
            <NavItem to="/contact-me" color="blue.500" mx={2}>
              Contact Me
            </NavItem>
          </Flex>
          {/* Resume button */}
          <Button
            variant="outline"
            bg="blue.500"
            _hover={{ bg: "blue.700" }}
            color="white"
            onClick={handleResumeClick}
            mr={3}
            display={{ base: "none", md: "flex" }}
          >
            Resume PDF
          </Button>
        </Flex>
      </Box>
    </>
  );
}


export { TopbarUnsigned };
