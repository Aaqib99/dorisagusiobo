import { useState } from "react";
import zxcvbn from "zxcvbn";
import { Box, Center, Heading, Input, Text, border } from "@chakra-ui/react";
const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [score, setScore] = useState(0);
  const handleChange = (event) => {
    setPassword(event.target.value);
    const { score } = zxcvbn(event.target.value);
    setScore(score);
  };

  const formatTimeToCrack = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${seconds}s`;
    } else if (minutes > 0) {
      return `${minutes}m ${seconds}s`;
    } else {
      return `${seconds}s`;
    }
  };

  let feedback = "";
  let timeToCrack = "";
  let color = "";
  let width = "";
  let border = "";
  let shadow = "";
  let requirements = [];

  if (password.length < 8) {
    requirements.push("at least 8 characters");
  }

  if (!password.match(/[A-Z]/)) {
    requirements.push("at least one uppercase letter");
  }

  if (!password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)) {
    requirements.push("at least one symbol");
  }

  switch (score) {
    case 0:
      feedback = "Very weak";
      color = "#F44336";
      border = "1px solid #F44336";
      width = "1%";
      timeToCrack = "Less than a second";
      shadow = "0px 0px 50px rgba(255, 0, 0, 0.1)";
      break;

    case 1:
      feedback = "Weak";
      color = "#FFC107";
      border = "1px solid #FFC107";
      width = "10%";
      timeToCrack = formatTimeToCrack(1);
      shadow = " 0px 0px 50px rgba(222, 184, 135, 0.1)";
      break;

    case 2:
      feedback = "Fair";
      color = "#FFEB3B";
      border = "1px solid #FFEB3B";
      width = "50%";
      timeToCrack = formatTimeToCrack(1000);
      shadow = " 0px 0px 50px rgba(139, 69, 19, 0.1)";
      break;

    case 3:
      feedback = "Good";
      color = "#4CAF50";
      border = "1px solid #4CAF50";
      width = "75%";
      timeToCrack = formatTimeToCrack(1000000);
      shadow = " 0px 0px 50px rgba(0, 255, 0, 0.1)";
      break;

    case 4:
      feedback = "Strong";
      color = "#1976D2";
      border = "1px solid #1976D2";
      width = "100%";
      timeToCrack = formatTimeToCrack(10000000);
      shadow = " 0px 0px 10px rgba(0, 0, 255, 0.1)";
      break;

    default:
      feedback = "Very weak";
      color = "#F44336";
      border = "1px solid #F44336";
      width = "1%";
      timeToCrack = "Less than a second";
      shadow = "0px 0px 10px rgba(255, 0, 0, 0.1)";
  }

  if (score > 2 && requirements.length === 0) {
    timeToCrack = "More than 27777 hours";
  }

  return (
    <>
      <Center height="auto" mt={{ base: "2rem", md: "4rem", lg: "4rem" }}>
        <Box
          width={{ base: "90%", md: "50vw", lg: "40vw" }}
          mx="auto"
          p={{ base: "10px", md: "20px" }}
          borderRadius="md"
        >
          <Text
            as="h3"
            fontSize={22}
            fontWeight={"bold"}
            mx="auto"
            textAlign="center"
          >
            Password Strength Checker
          </Text>
          <Box
            boxShadow={shadow}
            p={{ base: "10px", md: "20px" }}
            mt="20px"
            borderRadius="md"
            border={border}
          >
            <Text as="p" fontSize={18} fontWeight={"bold"} color={"#1976D2"}>
              Password Challenge
            </Text>
            <Box mt="10px">
              <Text as="b">Enter your password:</Text>
              <Input
                type="password"
                value={password}
                onChange={handleChange}
                mt="2"
              />
              <Box
                bg={color}
                height="10px"
                borderRadius="5px"
                mt="4"
                transition="width 0.3s"
                width={width}
              />
              <Box mt="4">{feedback}</Box>
              {requirements.length > 0 && (
                <Box mt="2">
                  Please include {requirements.join(", ")} in your password.
                </Box>
              )}
              <Text as="b" mt="5">
                <Box mt="4">
                  Hacker may take{" "}
                  <Text as="b" color="#1976D2">
                    {timeToCrack}
                  </Text>{" "}
                  to crack this password
                </Box>
              </Text>
            </Box>
          </Box>
        </Box>
      </Center>
    </>
  );
};

export default PasswordStrength;
