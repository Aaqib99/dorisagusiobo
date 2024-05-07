// @ts-ignore
import Lottie from "lottie-react";
import { useState } from 'react';
import {
    Box,
    Text,
    Image,
    Flex,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton
} from "@chakra-ui/react";
import itemlisting1 from "../../../assets/itemlisting1.png";
import itemlisting2 from "../../../assets/itemlisting2.png";
import strokeicon from "../../../assets/strokeicon.svg";
import itemlistingAnimation from "../../../Animations/itemlisting.json";
import searchimageAnimation from "../../../Animations/searchimage.json";
import filterAnimation from "../../../Animations/filter.json";
import filter1 from "../../../assets/filter1.svg";
import filter2 from "../../../assets/filter2.svg";
import filter3 from "../../../assets/filter3.svg";
import filter4 from "../../../assets/filter4.svg";
import filter5 from "../../../assets/filter5.svg";
import filter6 from "../../../assets/filter6.svg";

function HighFidelityMockup() {
    const [selectedImage, setSelectedImage] = useState(null);

    // @ts-ignore
    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
    return (
        <>
            <Flex alignItems="center" ml={{ base: "2rem", md: "5rem" }} mt={{ base: "2rem", md: "7rem" }}>
                <Text
                    fontWeight="bold" fontSize={"36px"} color="#006D6C"
                >
                    High Fidelity Mockups & Core Features
                </Text>
                <Image
                    width="fit-content"
                    src={strokeicon}
                    alt="image"
                    // mx="auto"
                    maxHeight="50px"
                    ml={{ base: "1rem", md: "3rem" }}
                />
            </Flex>
            <Text ml="5rem" mt={"5rem"} fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="65%">
                I advanced to creating high-fidelity mockups that served as the project's
                visual and functional blueprint. The high-fidelity designs
                encapsulated all of the application's core features.
            </Text>
            {/* item listings */}
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "2rem", md: "4rem" }}>
                <Box flex="1" alignItems="center" ml={"5rem"} mt={"2rem"}>
                    <Box width={180} height={180} ml={"-1rem"}>
                        <Lottie animationData={itemlistingAnimation} />
                    </Box>
                    <Box ml="2rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                            Item listings
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            In line with the brand's emphasis on minimalism, the item listing
                            section is designed to deliver essential information in a clean,
                            uncluttered format. The focus is on highlighting images provided
                            by the seller, as visuals often convey more than text alone can.

                            Key details like price, condition, and location are displayed
                            succinctly, allowing users to quickly assess the value
                            and relevance of an item without feeling overwhelmed
                            by information.
                        </Text>
                    </Box>
                </Box>
                <Box mb={{ base: "2rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Image width="fit-content" src={itemlisting1} alt="image" mx="auto" maxHeight="600px" />
                    </Box>
                </Box>

            </Flex>

            {/* search by images */}
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "8rem", md: "10rem" }}>
                <Box mb={{ base: "2rem", md: 0 }} flex={{ base: "1", md: "1" }}>
                    <Box ml={"4rem"} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
                        <Image width="fit-content" src={itemlisting2} alt="image" mx="auto" maxHeight="560px" />
                    </Box>
                </Box>
                <Box flex="1" display="flex" alignItems="flex-start" mt={"12rem"}>
                    <Box width="700px" ml={"2rem"}>
                        <Lottie animationData={searchimageAnimation} />
                    </Box>
                    <Box ml="2rem" textAlign="left">
                        <Text fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                            Search By Images
                        </Text>
                        <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                            One of the standout features allows users to search by using
                            a photo. Whether taken on the spot or uploaded, this
                            function helps users find the closest available match
                            to a piece of furniture they've seen online or in person.
                        </Text>
                    </Box>
                </Box>
            </Flex>

            {/* filter options */}
            <Box flex="1" alignItems="center" ml={"5rem"} mt={"4rem"}>
                <Box width={120} height={120} ml={"1rem"}>
                    <Lottie animationData={filterAnimation} />
                </Box>
                <Text mt={"3rem"} fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold" mb="2">
                    Filter Options
                </Text>
                <Text fontSize={{ base: "xl", md: "1xl" }} color="gray.500" width="80%">
                    Understanding the frustration often experienced due to
                    limited search customization, the filter menu in this
                    project was carefully designed to give users a
                    greater sense of control and precision.
                </Text>

            </Box>
            <Text ml={"5rem"} position={"absolute"} mt={"4rem"} color={"red.500"}>Click to view the filter bigger</Text>
            <Flex direction={{ base: "column", md: "row" }} mt={{ base: "2rem", md: "4rem" }} justifyContent="center" alignItems="center">
                <Box mt={["2rem", "3rem"]} position="relative" display="grid" gridTemplateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)"]} gap={4}>
                    <Image src={filter3} cursor={"pointer"} boxSize={["auto"]} style={{ animation: 'galleryanim 0.6s infinite alternate', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)' }} onClick={() => openModal(filter3)} />
                    <Image src={filter1} cursor={"pointer"} boxSize={["auto"]} style={{ animation: 'galleryanim 1.0s infinite alternate', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }} onClick={() => openModal(filter1)} />
                    <Image src={filter2} cursor={"pointer"} boxSize={["auto"]} style={{ animation: 'galleryanim 1.0s infinite alternate', boxShadow: '3px 2px 2px rgba(0, 0, 0, 0.3)' }} onClick={() => openModal(filter2)} />
                    <Image src={filter4} cursor={"pointer"} boxSize={["auto"]} style={{ animation: 'galleryanim 0.5s infinite alternate', boxShadow: '4px 2px 3px rgba(0, 0, 0, 0.1)' }} onClick={() => openModal(filter4)} />
                    <Image src={filter5} cursor={"pointer"} boxSize={["auto"]} style={{ animation: 'galleryanim 0.7s infinite alternate', boxShadow: '4px 2px 5px rgba(0, 0, 0, 0.2)' }} onClick={() => openModal(filter5)} />
                    <Image src={filter6} cursor={"pointer"} boxSize={["auto"]} style={{ animation: 'galleryanim 1.1s infinite alternate', boxShadow: '5px 3px 7px rgba(0, 0, 0, 0.1)' }} onClick={() => openModal(filter6)} />
                </Box>
            </Flex>
            {selectedImage && (
                <Modal isOpen={true} onClose={closeModal}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalCloseButton
                            _focus={{ bg: "white", borderRadius: "50%", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.3)" }}
                            position="absolute"
                            right="8px"
                            top="8px"
                        />
                        <ModalBody>
                            <Image src={selectedImage} width="120%" height="120%" objectFit="contain" />
                        </ModalBody>
                    </ModalContent>
                </Modal>
            )}
        </>
    )
}

export default HighFidelityMockup;
