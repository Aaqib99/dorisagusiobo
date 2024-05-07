import reward from "../../../assets/reward.svg";
import user from "../../../assets/user.svg";
import need from "../../../assets/need.svg";
import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import UpdatePost from "./UpdatePost";

const InterviewSights = () => {
  const UpdatePosts = [
    {
      title: "Value-added Rewards",
      description:
        "Users made it clear that they aren't just looking for financial incentives; rather, they appreciate rewards that add to the quality of their experience. These could be anything from exclusive event access to loyalty points redeemable for future activities, which serve as motivators to explore and engage more deeply with the local wilderness community.",
      image: reward,
      imageLabel: "value added",
    },
    {
      title: "Timely user engagement",
      description:
        "Our discussions highlighted the critical nature of user engagement, especially as businesses prepare for the busy tourism season starting in May. Users are more inclined to return to or advocate for businesses that offer a compelling, rewarding experience.",
      image: user,
      imageLabel: "user engagement",
    },
    {
      title: "Adapting to evolving needs",
      description:
        "While they appreciate the immediate impact of meaningful rewards, they also want to see businesses adapting to long-term consumer trends for sustainability and engagement. This dual focus emphasizes the importance of a strategy that provides immediate benefits to the local wilderness tourism community while also setting the stage for long-term success.",
      image: need,
      imageLabel: "adapting evolution",
    },
  ];
  return (
    <Box
      position="relative"
      mt={16}
      display={{ base: "block", md: "flex" }}
      flexDir="column"
      alignItems="start"
      justifyContent="start"
      gap="26px"
      textAlign="left"
      fontSize="36px"
      color="darkslategray.200"
    >
      <Flex alignItems="center">
        <Text ml="5rem" fontWeight="medium" color="dark">
          Interview Insights
        </Text>
      </Flex>
      <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
        I conducted a stakeholder interview session with three business owners and entrepreneurs
        to better understand their goals, needs, and pains. We discussed potential solutions
        and brainstormed ideas. Here are the key takeaways from the round tables.
      </Text>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
        gap={{ base: 2, md: 2 }}
        padding={{ base: "10px", md: "10px 80px" }}
      >
        {UpdatePosts.map((post) => (
          <Box key={post.title} width="100%" height="100%">
            <UpdatePost post={post} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default InterviewSights;
