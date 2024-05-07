import furniturechallenge from "../../../assets/furniturechallenge.jpg";
// import vulnerablemain from "../../../assets/vulnerablemain.png";
import circleimage from "../../../assets/circle-image.png";
import {
    Box,
    Text,
    Image,
    Heading,
    Flex
} from "@chakra-ui/react";

const OverviewFurniture = () => {
    return (
        <>
            <Flex>
                <Box maxW={["40%", "60%"]}>
                    <Box mt={["8rem", "14rem"]}>
                        <Image
                            h="auto"
                            maxW="100%"
                            position="absolute"
                            src={circleimage}
                            alt=""
                            ml="2rem"
                            mt="-3rem"
                        />
                    </Box>
                    <Text fontSize={["3xl", "4xl"]} ml={["1rem", "7rem"]} fontWeight="bold" mt="10" color={"#006D6C"}>
                        Challenges
                    </Text>
                    <Text as="p" ml={["1rem", "7rem"]} fontSize={["md", "md"]} mt={["1rem", "3rem"]} width={["40%", "80%"]}>
                        <Heading fontSize={["2xl", "2xl"]} fontWeight="bold">
                            Inefficient Search
                        </Heading>{" "}
                        <Text mt={["1rem", "1rem"]}>
                            One major challenge users often encounter on existing
                            platforms is the inability to efficiently find
                            furniture that meets their specific needs and
                            constraints. Traditional marketplaces may lack
                            detailed filter options, making the search
                            process time-consuming and less effective.
                        </Text>
                    </Text >
                    <Text as="p" ml={["1rem", "7rem"]} fontSize={["md", "md"]} mt={["1rem", "3rem"]} width={["40%", "80%"]}>
                        <Heading fontSize={["2xl", "2xl"]} fontWeight="bold">
                            Unreliable Communication with Sellers
                        </Heading>{" "}
                        <Text mt={["1rem", "1rem"]}>
                            Another issue users may face is the lack of a
                            reliable channel for communicating with
                            sellers. Existing platforms may rely on
                            external means like email or phone, which
                            can lead to delayed responses and increased
                            chances of misunderstandings.
                        </Text>
                    </Text >
                </Box >
                <Box maxW={["20%", "30%"]} mt={["6rem", "8rem"]}>
                    <Image src={furniturechallenge} />
                </Box>
            </Flex>
        </>
    );
};

export default OverviewFurniture;
