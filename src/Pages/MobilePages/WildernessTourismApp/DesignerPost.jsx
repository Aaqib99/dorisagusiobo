// @ts-nocheck
import PropTypes from "prop-types";
import { Box, Card, Heading, Link, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function DesignerPost(props) {
  const navigate = useNavigate();
  const { post } = props;
  const [snakeLeft, setSnakeLeft] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSnakeLeft((prevLeft) => {
        const nextLeft = prevLeft + 1;
        return nextLeft >= 100 ? 0 : nextLeft;
      });
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Card boxShadow="0 0 8px rgba(0, 0, 0, 0.2)">

        <Box position="relative" overflow="hidden">
          <Box p={6}>
            <div
              style={{
                position: "absolute",
                borderRadius: "5px",
                width: "50px",
                height: "10px",
                background: "#FFEBCF",
                left: `${snakeLeft}%`,
                top: "95%",
                transformOrigin: "left center",
                zIndex: 1,
              }}
            />
            <Heading as="h1" size="xl" color="#FFB03B" fontWeight="bold">
              {post.title}
            </Heading>
            <Text fontSize="14" fontWeight="normal" color="gray.300" mt={4}>
              {post.date}
            </Text>
            <Text fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" mt={8} maxW="100%">
              {post.description}
            </Text>
          </Box>
        </Box>
      </Card>

    </>
  );
}

export default DesignerPost;
