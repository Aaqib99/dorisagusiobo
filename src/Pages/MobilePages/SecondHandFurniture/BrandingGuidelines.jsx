import { Box, Text, Grid, GridItem } from "@chakra-ui/react";
import BrandingAa from "../../../assets/BrandingAa.svg";

function BrandingGuidelines() {
  return (
    <>
      <Box textAlign={{ base: "center", md: "left" }} ml={{ md: "5rem" }}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="medium" mt={{ base: "2rem", md: "7rem" }}>
          Branding Guidelines
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }} fontWeight="normal" mt={{ base: "1rem", md: "1rem" }} width={"90%"}>
          My starting point involved specifying the brand colors, anchoring keywords, and articulating a thorough set of guiding principles that would inform the project's direction.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        ml="3rem"
        mt={4}
        px={2}
      >
        <GridItem colSpan={1}>
          <Text fontSize={{ base: "3xl", md: "3xl" }} fontWeight="medium" mt={{ base: "2rem", md: "3rem" }} ml={{ base: "2rem", md: "2rem" }}>
            Font
          </Text>
          <Text fontSize={{ base: "md", md: "xl" }} fontWeight="normal" mt={{ base: "1rem", md: "1rem" }} width={"90%"} ml={{ base: "2rem", md: "2rem" }}>In alignment with the brand's focus on readability and user-friendly design, Lexend was selected as the primary typeface for the application. Known for its clean lines and legibility, Lexend contributes to a more accessible and easy-to-read interface. The choice of this font further reinforces the brand's commitment to creating an experience that is not only visually appealing but also highly functional and inclusive.
          </Text>
        </GridItem>
        <GridItem colSpan={1} mt={{ base: "3rem", md: "3rem" }}>
          <img
            src={BrandingAa}
            alt="image 1"
            style={{
              maxHeight: "80%",
              width: "auto",
              marginLeft: "2rem",
            }}
          />
        </GridItem>
      </Grid>

    </>
  );
}

export default BrandingGuidelines;
