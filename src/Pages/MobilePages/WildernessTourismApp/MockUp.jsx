// @ts-ignore
import Lottie from "lottie-react";
import { Box, Text, Flex, Image } from "@chakra-ui/react";
import login from "../../../assets/login.png";
import dashboard from "../../../assets/dashboard.png";
import valleycave from "../../../assets/valleycave.png";
import loyaltyleaf from "../../../assets/loyaltyleaf.png";
import loginAnimation from "../../../Animations/login.json";
import dashboardAnimation from "../../../Animations/dashboard.json";
import tourAnimation from "../../../Animations/tour.json";
import rewardAnimation from "../../../Animations/reward.json";

function MockUp() {
    return (
        <>
            <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="medium" mt={{ base: "2rem", md: "7rem" }} ml={{ base: "2rem", md: "5rem" }}>
                Mockups
            </Text>
            {/* on-boarding */}
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "2rem", md: "4rem" }}>
                <Box mb={{ base: "2rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Image width="fit-content" src={login} alt="image" mx="auto" maxHeight="600px" />
                    </Box>
                </Box>
                <Box flex="1" display="flex" alignItems="center">
                    <Box >
                        <Lottie animationData={loginAnimation} />
                    </Box>
                    <Box ml="2rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                            Login - Onboarding
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            The log in page serves as the gateway to accessing a user's
                            account, providing a secure and personalized experience.
                            Designed with simplicity and functionality in mind, it ensures
                            a seamless and efficient process for authentication.
                        </Text>
                    </Box>
                </Box>
            </Flex>
            {/* dashboard */}
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "2rem", md: "4rem" }}>
                <Box flex="1" alignItems="center" ml={"5rem"} mt={"4rem"}>
                    <Box width={180} height={180} ml={"-1rem"}>
                        <Lottie animationData={dashboardAnimation} />
                    </Box>
                    <Box ml="2rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                            Dashboard
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            At the heart of the dashboard lies a carefully curated selection of tour categories.
                            This categorization enables users to easily navigate and select the type of local
                            tours that best align with their interests. Additionally, the dashboard features a
                            striking "Popular" section that captivates users with a visually appealing display.
                            Users have the option to swipe through this section, uncovering hidden gems and
                            top-rated experiences that have captured the attention of fellow adventurers.
                        </Text>
                    </Box>
                </Box>
                <Box mb={{ base: "2rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Image width="fit-content" src={dashboard} alt="image" mx="auto" maxHeight="600px" />
                    </Box>
                </Box>

            </Flex>
            {/* selected tours */}
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "8rem", md: "10rem" }}>
                <Box mb={{ base: "2rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Image width="fit-content" src={valleycave} alt="image" mx="auto" maxHeight="600px" />
                    </Box>
                </Box>
                <Box flex="1" display="flex" alignItems="flex-start">
                    <Box>
                        <Lottie animationData={tourAnimation} />
                    </Box>
                    <Box ml="2rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                            Local Details for Selected Tours
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            The goal is to offer users an informed journey by incorporating various
                            elements such as insurance options and rental car availability.
                            One distinctive feature of the app is the emphasis on sustainable tourism.
                            When users select a tour, they are presented with the tour provider's
                            commitment to sustainable practices.
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            This includes information on
                            eco-friendly accommodations, local community involvement, or
                            conservation efforts tied to the tour. By showcasing this commitment,
                            the app not only provides users with an opportunity to make environmentally
                            conscious choices but also promotes responsible tourism.
                        </Text>
                    </Box>
                </Box>
            </Flex>
            {/* loyalty leaf */}
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "2rem", md: "4rem" }}>
                <Box flex="1" alignItems="center" ml={"5rem"} mt={"4rem"}>
                    <Box width={180} height={140} ml={"-1rem"}>
                        <Lottie animationData={rewardAnimation} />
                    </Box>
                    <Box ml="2rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                            Loyalty Leaf Rewards
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            With Loyalty Leafs Reward, every user becomes a valuable
                            part of our growing community and gains access to an array
                            of exclusive benefits. Loyalty Leafs Reward offers users
                            exclusive discounts and offers tailored to their preferences.
                            As users reach specific point milestones, they gain access
                            to discounts on merchandise, event tickets, customized experiences, and more.
                        </Text>
                    </Box>
                </Box>
                <Box mb={{ base: "2rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Image width="fit-content" src={loyaltyleaf} alt="image" mx="auto" maxHeight="600px" />
                    </Box>
                </Box>

            </Flex>
        </>
    )
}

export default MockUp;
