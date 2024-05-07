import { Box, Text, Grid, GridItem, } from "@chakra-ui/react";
import primary from "../../../assets/primary.svg";
import secondary from "../../../assets/secondary.svg";

function ColorPaletts() {
  return (
    <>
      <Box textAlign={{ base: "center", md: "left" }} ml={{ md: "5rem" }}>
        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="medium" mt={{ base: "2rem", md: "7rem" }}>
          Color Palette
        </Text>
        <Text fontSize={{ base: "md", md: "xl" }} fontWeight="normal" mt={{ base: "1rem", md: "1rem" }} width={"90%"}>
          The dynamic hues selected for the app are deliberately spirited and inviting,
          providing an animated setting that aims to boost user registrations in the
          travel and tourism sector. This colorful interface fosters a positive and
          uplifting user journey, mirroring the transformative experience the app
          aims to provide while motivating users to undertake sustainable actions.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "1fr", md: "1fr 1fr" }}
        ml="3rem"
        mt={12}
        px={2}
      >
        <GridItem colSpan={1}>
          <img
            src={primary}
            alt="image 1"
            style={{
              maxHeight: "90%",
              width: "auto",
              marginLeft: "2rem",
            }}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <img
            src={secondary}
            alt="image 1"
            style={{
              maxHeight: "90%",
              width: "auto",
              marginLeft: "2rem",
            }}
          />
        </GridItem>
      </Grid>

    </>
  );
}

export default ColorPaletts;
