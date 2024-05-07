// @ts-nocheck
// import vulnerable from "../../../assets/vulnerable.png";
// import password from "../../../assets/password.png";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import DesignerPost from "./DesignerPost";

const DesignerHat = () => {

  const DesignerPosts = [
    {
      id: 1,
      title: "Role & responsibilities",
      date: "Nov 12, 2019",
      description:
        `In the small, yet dynamic team of designers, I found myself amidst a creative whirlwind.
        Tasked with conducting competitive research, creating screen designs for an array of existing
        and upcoming app features, my contribution formed the backbone of the  app.`,
      imageLabel: "Role",
    },
    {
      id: 2,
      title: "A 3-month sprint",
      date: "Nov 17, 2019",
      description:
        `Over a span of nine months, we poured our creativity, expertise, and countless work
        hours into the project. This duration allowed us to meticulously examine, revise, and
        perfect each aspect of the UX design, aiming for a flawless and user-friendly experience.
        My focus was on creating low and high fidelity mockups using Adobe XD that
        showcased the improvements to navigation. `,
      imageLabel: "vulnerable",
    },
  ];
  return (
    <>
      <Box
        position="relative"
        mt={16}
        w="full"
        display="flex"
        flexDir="column"
        alignItems="start"
        justifyContent="start"
        gap="16px"
        textAlign="left"
        fontSize="36px"
        color="darkslategray.200"
      >
        <Flex alignItems="center">
          <Text ml="5rem" fontWeight="medium" color="dark">
            The Designers Hat
          </Text>
        </Flex>
        <Grid
          templateColumns={["1fr", "repeat(2, 1fr)"]}
          gap={8}
          padding={["20px", "20px 80px"]}

        >

          {DesignerPosts.map((post) => (
            <DesignerPost key={post.title} post={post} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default DesignerHat;
