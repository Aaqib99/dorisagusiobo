import { ChangeEvent } from "react";
import contactAdmin from "../../assets/contactadmin.png";
import icon3 from "../../assets/icon3.svg";
import {
  Box,
  Flex,
  Image,
  Text,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";

function ContactAdmin() {
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Handle file change logic here
    const selectedFile = event.target.files?.[0];
    console.log("Selected File:", selectedFile);
  };

  return (
    <>
      <Box ml={{ base: "1rem", md: "5rem" }}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="medium" mt="3rem" width={{ base: "80%", md: "40%" }}>
          Love to hear from you. Get in touch with admin
          <Image
            src={icon3}
            alt="risk-icon"
            position={{ base: "static", md: "absolute" }}
            ml={{ base: "0", md: "19rem" }}
            mt={{ base: "0", md: "-9" }}
          />
        </Text>
      </Box>

      <Flex mt={{ base: "1rem", md: "3rem" }} direction={{ base: "column", md: "row" }}>
        <Box flex="1" ml={{ base: "1rem", md: "5rem" }} width={{ base: "90%", md: "50%" }}>
          <Text fontSize="xl" mb="2">
            Your Name:
          </Text>
          <Input type="text" placeholder="Enter your name" width="100%" />
          <Text fontSize="xl" mt={{ base: "1rem", md: "2rem" }}>
            Your Email:
          </Text>
          <Input type="email" placeholder="Enter your email" width="100%" />
          <Text fontSize="xl" mt={{ base: "1rem", md: "2rem" }} mb="2">
            Your Message:
          </Text>
          <Textarea placeholder="Type your message here" width="100%" />
          <Text fontSize="xl" mt="4" mb="2">
            Upload Screenshot:
          </Text>
          <Input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            width="100%"
            mx="auto"
          />
          <Box>
            <Button colorScheme="blue" mt={{ base: "1rem", md: "2rem" }}>
              Send to Admin
            </Button>
          </Box>
        </Box>
        <Box flex="1">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mt={{ base: "-1.5rem", md: "-3rem" }}
          >
            <Box>
              <Image
                width="fit-content"
                src={contactAdmin}
                alt="contact-admin"
                mx="auto"
                mt={{ base: "2rem", sm: "2rem", md: "1rem" }}
              />
            </Box>
          </Box>
        </Box>
      </Flex>
    </>
  );
}

export default ContactAdmin;
