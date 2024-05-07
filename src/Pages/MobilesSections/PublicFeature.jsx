// @ts-ignore
import tourismapp from "../../assets/tourismapp2.png";
import { useEffect, useState } from "react";
import "../../App.css";
// @ts-ignore
import assuranceapp from "../../assets/assuranceapp1.png";
import secondhandapp from "../../assets/secondhandapp1.png";
// @ts-ignore
import mobileicon from "../../assets/mobile.svg";
import { useInView } from "react-intersection-observer";
import FeaturedPost from "./FeaturedPost";
import SmeSection from "./SmeSection";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";

const MobilesSection = () => {
  const featuredPosts = [
    {
      title: "Wilderness Tourism",
      description:
        "Mobile app designed to aid sustainable practices within local wilderness tourism enterprises.",
      image: tourismapp,
      challenge: "Pain Points",
      challenge1: "Monetary Strains",
      challenge2: "User Preferences",
      imageLabel: "password",
      buttonText: "Explore",
      path: "/wilderness-tourism-app",
    },
    {
      title: "Vanguard Assurance Corporation",
      description:
        "Mobile experiences built for insurance agents to take the complexity out of assisting clients buying insurance",
      image: assuranceapp,
      challenge: "Project Goals",
      challenge1: "User-Friendly",
      challenge2: "Flexible",
      imageLabel: "vulnerable",
      buttonText: "Explore",
      path: "/vanguard-assurance-corporation-app"
    },
    {
      title: "Second-Hand Furniture Simplified",
      description:
        "Eliminate the complexities and inefficiencies commonly associated with buying and selling used furniture",
      image: secondhandapp,
      challenge: "Challenges",
      challenge1: "Inefficient Search",
      challenge2: "Unreliable Communication with Sellers",
      imageLabel: "vulnerable",
      buttonText: "Explore",
      path: "/second-hand-furniture-app"
    },
    {
      title: "The Mastery Hub",
      description:
        "An application designed to assemble top-tier educators from a range of technological disciplines",
      image: assuranceapp,
      challenge: "Objectives",
      challenge1: "Business Aim",
      challenge2: "Product Understanding",
      imageLabel: "vulnerable",
      buttonText: "Coming Soon",
      // path: "/the-mastery-hub"
    },
  ];
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5 });



  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  return (
    <Box
      ref={ref}
      position="relative"
      mt={16}
      w="full"
      display="flex"
      flexDir="column"
      alignItems="start"
      justifyContent="start"
      gap="56px"
      textAlign="left"
      fontSize="36px"
      color="darkslategray.200"
    >
      <Flex alignItems="center">
        <Text ml="5rem" fontWeight="medium" color="dark">
          Mobile Apps
        </Text>
        <Box ml="2">
          <Image h="auto" ml="1rem" maxW="40px" src={mobileicon} alt="" />
        </Box>
      </Flex>
      <Grid
        templateColumns={["1fr", "repeat(2, 1fr)"]}
        gap={8}
        padding={["20px", "20px 80px"]}
        className={isVisible ? "fade-in" : ""}
      >
        {featuredPosts.map((post) => (
          <FeaturedPost
            key={post.title}
            post={post}
          // buttonText={post.buttonText}
          />
        ))}
      </Grid>
      <SmeSection />
    </Box>
  );
};

export default MobilesSection;
