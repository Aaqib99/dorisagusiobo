import Footer from "../Footer/Footer";
import welcome from "../../assets/welcome2.png";
import servicesImage from "../../assets/cybereseentials.jpg";
import cyberbgdownpage from "../../assets/cyber-bg-down-page.png";
import {
  Box,
  Flex,
  Square,
  ListItem,
  UnorderedList,
  Image,
  Text,
  Center,
} from "@chakra-ui/react";
import { TopbarUnsigned } from "../../Components/SideBar/SideBar/Topbar";

const ExploreServices = () => {
  // };
  return (
    <>
      <TopbarUnsigned />
      {/* hero section */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        backgroundSize="cover"
        backgroundImage={`url(${welcome})`}
        height={{ base: "300px", md: "600px" }}  // Set your desired height here
      >

        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          color="#FFFFFF"
        >
          Doris Agusiobo
        </Text>
        <Text
          as="h1"
          fontSize="4xl"
          fontWeight="bold"
          color="#FFFFFF"
        >
          All Apps & Websites
        </Text>
      </Box>
      <Flex direction={{ base: "column", md: "row" }}>
        <Center w={{ base: "100%", md: "400px" }}>
          <Square maxW="100%" mt={{ base: 8, md: 0 }} mb={{ base: 8, md: 0 }}>
            <Text p={4}>
              Page Navigation
              <UnorderedList mt={4}>
                <ListItem mt={2} fontWeight="bold">
                  App Heading 1
                </ListItem>
                <ListItem mt={2} fontWeight="bold">
                  App Heading 2
                </ListItem>
                <ListItem mt={2} fontWeight="bold">
                  App Heading 3
                </ListItem>
              </UnorderedList>
            </Text>
          </Square>
        </Center>
        <Center flex="1">
          <Square maxW={{ base: "80%", sm: "80%", md: "90%" }} mt={{ base: 8, md: 0 }} mb={{ base: 8, md: 0 }}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularized in the 1960s with the release of Letraset sheets
              containing.
            </Text>
          </Square>
        </Center>
      </Flex>
      <Center flex="1">
        <Square maxW="85%" mt={8} mb={8}>
          <Text>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>
        </Square>
      </Center>
      {/* Section Heading 1 */}
      <Box>
        <Text fontSize={{ base: "xl", md: "2xl" }} ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontWeight="bold" mt={{ base: 4, md: 10 }}>
          Website Heading 1
        </Text>
        <Text as="p" ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontSize={{ base: "md", md: "lg" }} mt={{ base: 2, md: 4 }} maxW={{ base: "80%", sm: "80%", md: "90%" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
      </Box>
      {/* Section Heading 2 */}
      <Flex direction={{ base: "column", md: "row" }}>
        <Box flex="1">
          <Text fontSize={{ base: "xl", md: "2xl" }} ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontWeight="bold" mt={{ base: 10, md: 20 }}>
            Website Heading 2
          </Text>

          <Text as="p" ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontSize={{ base: "md", md: "lg" }} mt={{ base: 2, md: 4 }} maxW={{ base: "80%", sm: "80%", md: "90%" }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose (injected humour
            and the like).
          </Text>
        </Box>
        <Box flex="1" p={{ base: 0, md: "7rem" }} mx={{ base: "auto", md: 0 }}>
          <Image
            src={servicesImage}
            alt="explore-image"
            maxW={{ base: "50%", sm: "70%", md: "85%", lg: "100%" }} // Make the image responsive
            height="auto"
            mx="auto" // Center the image horizontally
          />
        </Box>
      </Flex>
      <Box
        position="relative"
        mt={{ base: "2rem", md: "5rem" }}
        backgroundImage={`url(${cyberbgdownpage})`}
        backgroundSize="cover"
        // backgroundPosition="center"
        // backgroundRepeat="no-repeat"
        color="black"
        textAlign="center"
        py={{ base: "4rem", md: "6rem" }}
      >
        <Text fontSize={{ base: "lg", md: "xl" }} ml={{ base: "1rem", sm: "1rem", md: "0", lg: "0" }}>
          Welcome to Doris Augiosbo, where innovation meets creativity! We specialize in providing
          cutting-edge mobile app design and website design services tailored to meet your unique business needs.
        </Text>
      </Box>
      {/* Section Heading 3 */}
      <Box mt={{ base: "4rem", md: "6rem" }}>
        <Text fontSize={{ base: "xl", md: "2xl" }} ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontWeight="bold" mt={{ base: 10, md: 10 }}>
          Website Heading 3
        </Text>
        <Text as="p" ml={{ base: 3, sm: "5rem", md: "7rem", lg: "7rem" }} fontSize={{ base: "md", md: "lg" }} mt={{ base: 4, md: 4 }} width={{ base: "80%", md: "80%" }}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </Text>
      </Box>
      <Footer />
    </>
  );
};

export default ExploreServices;
