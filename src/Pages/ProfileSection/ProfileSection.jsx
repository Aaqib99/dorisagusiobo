import "../../App.css";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import doris from "../../assets/doris-image.png";

function ProfileSection() {
    return (
        <>
            <Flex
                flexDir={["column", "row"]}
                alignItems="center"
                justifyContent={["center", "space-between"]}
                overflow="hidden"
                marginTop={"10rem"}
            >
                <Box w={["60%", "30%"]} position="relative" marginLeft={"80px"}>
                    <img
                        src={doris}
                        alt="image 1"
                    />
                </Box>
                <Box
                    maxW={["70%", "50%"]}
                    px={[4, 6, 12]}
                    py={12}
                    textAlign={["center", "left"]}
                >
                    <div className="circle"></div>
                    <Heading
                        mt={0}
                        mb={6}
                        fontSize={["4xl", "6xl"]}
                        fontWeight="bold"
                        letterSpacing="tight"
                        color="blue.500"
                        as="h3"
                    >
                        UI | UX Designer
                    </Heading>
                    <Text mb={6} color="blackAlpha.700">
                        Doris is a UX designer with a focus on a human-centred approach. With a fascination for inclusive design thinking methods and experiences leading teams through solving business challenges, she shares a deep interest & curiosity in the effects technology continues to have on people’s demands and lifestyles.
                    </Text>
                    <Text mb={6} color="blackAlpha.700">
                        Her path to UX design began more than 7 years ago as a graphic designer and evolved with each milestone. Through her work, she aims to bring new experiences and opportunities for people to delightfully enrich their lives and the tools they use. She believes digital products should be enjoyable and accessible to all who use them.
                    </Text>
                </Box>

            </Flex>
        </>
    )
}

export default ProfileSection