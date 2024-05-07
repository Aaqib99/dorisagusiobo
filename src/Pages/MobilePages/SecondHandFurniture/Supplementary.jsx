// @ts-nocheck
// import furniturechallenge from "../../../assets/furniturechallenge.jpg";
import { useState } from 'react';
import circleimage from "../../../assets/circle-image.png";
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
import image1 from "../../../assets/supplementary/image1.png";
import image2 from "../../../assets/supplementary/image2.png";
import image3 from "../../../assets/supplementary/image3.png";
import image4 from "../../../assets/supplementary/image4.png";
import image5 from "../../../assets/supplementary/image5.png";
import image6 from "../../../assets/supplementary/image6.png";
import image7 from "../../../assets/supplementary/image7.png";
import image8 from "../../../assets/supplementary/image8.png";

const Supplementary = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
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
                        Supplementary Images
                    </Text>

                    <Text as="p" ml={["1rem", "7rem"]} fontSize={["md", "md"]} mt={["1rem", "3rem"]} width={["40%", "80%"]}>
                        In furtherance of the brand identity, I curated a collection
                        of supplemental images that strikingly blend natural and
                        man-made elements. This selection of imagery not only
                        adds layers of depth to the aesthetic experience but
                        also resonates with the brand's ethos of bridging
                        Fsustainable living with modern convenience.
                    </Text>
                    <Text as="p" ml={["1rem", "7rem"]} fontSize={["md", "md"]} mt={["1rem", "3rem"]} width={["40%", "80%"]}>
                        The Supplementary Images section offers a
                        glimpse into a carefully curated assortment
                        that seamlessly merges elements from nature
                        and human craftsmanship. These images are
                        not merely visual aids but integral components
                        that enhance the overall aesthetic appeal.
                        They embody the brand's commitment to
                        harmonizing sustainable living practices with
                        contemporary convenience, fostering a deeper
                        connection with the audience and reinforcing
                        the brand's core values.
                    </Text>
                    <Text as="p" ml={["1rem", "7rem"]} fontSize={["md", "md"]} mt={["1rem", "3rem"]} width={["40%", "80%"]}>
                        Each image serves as a testament to the brand's
                        dedication to excellence, showcasing a blend of artistry and functionality.
                    </Text>
                </Box >
                <Text position={"absolute"} ml={"57rem"} mt={"13rem"} color={"red.500"}>Click to view the image bigger</Text>
                <Box mt={["14rem", "16rem"]} position="relative" display="grid" gridTemplateColumns={["repeat(3, 1fr)", "repeat(3, 1fr)"]} gap={4}>
                    <Image src={image1} cursor={"pointer"} boxSize={["120px", "180px"]} style={{ animation: 'galleryanim 1.2s infinite alternate' }} onClick={() => openModal(image1)} />
                    <Image src={image3} cursor={"pointer"} boxSize={["160px", "120px"]} style={{ animation: 'galleryanim 0.6s infinite alternate' }} onClick={() => openModal(image3)} />
                    <Image src={image2} cursor={"pointer"} boxSize={["120px", "180px"]} style={{ animation: 'galleryanim 1.0s infinite alternate' }} onClick={() => openModal(image2)} />
                    <Image src={image4} cursor={"pointer"} boxSize={["160px", "120px"]} style={{ animation: 'galleryanim 0.5s infinite alternate' }} onClick={() => openModal(image4)} />
                    <Image src={image5} cursor={"pointer"} boxSize={["120px", "180px"]} style={{ animation: 'galleryanim 0.7s infinite alternate' }} onClick={() => openModal(image5)} />
                    <Image src={image6} cursor={"pointer"} boxSize={["180px", "120px"]} style={{ animation: 'galleryanim 1.6s infinite alternate' }} onClick={() => openModal(image6)} />
                    <Image src={image7} cursor={"pointer"} boxSize={["200px", "150px"]} style={{ animation: 'galleryanim 1.3s infinite alternate' }} onClick={() => openModal(image7)} />
                    <Image src={image8} cursor={"pointer"} boxSize={["180px", "120px"]} style={{ animation: 'galleryanim 1.1s infinite alternate' }} onClick={() => openModal(image8)} />
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
    );
};

export default Supplementary;
