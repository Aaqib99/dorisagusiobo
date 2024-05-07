import { useState } from "react";
import image1 from "../../../assets/galleryphotoalbum/image1.png";
import image2 from "../../../assets/galleryphotoalbum/image2.png";
import image3 from "../../../assets/galleryphotoalbum/image3.png";
import image4 from "../../../assets/galleryphotoalbum/image4.png";
import image5 from "../../../assets/galleryphotoalbum/image5.png";
import image6 from "../../../assets/galleryphotoalbum/image6.png";
import { Box, Flex, Text } from "@chakra-ui/react";
// @ts-ignore
import Masonry from "react-responsive-masonry";
const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image5,
    image6,
    image6,
]
const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // @ts-ignore
    const openModal = (index) => {
        setSelectedImage(index);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };
    return (
        <>
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
                    <Text ml="5rem" fontWeight="medium" fontSize={"24px"} color="dark">
                        Branding
                    </Text>
                </Flex>
                <Flex>
                    <Text ml="5rem" fontWeight="medium" color="#FFB03B">
                        Moodboard
                    </Text>
                </Flex>
                <Text ml="5rem" fontSize={{ base: "sm", md: "md", lg: "lg" }} color="gray.600" width="80%">
                    I put together a mood board that encapsulates a minimalist and vibrant aesthetic. The minimalist aspect
                    leans into the simplicity and elegance of the brand, streamlining user interaction,
                    while vibrant accents are used to evoke a sense of energy, positivity, and freshness.
                </Text>
            </Box>
            <div style={{ margin: "60px 30px 0 50px" }}>
                <Masonry columnsCount={3} gutter="20px">
                    {images.map((image, i) => (
                        <div key={i} style={{ margin: "0 15px", animation: "galleryanim 1.5s infinite alternate" }} onClick={() => openModal(i)}>
                            <img
                                src={image}
                                style={{
                                    borderRadius: "10px",
                                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                                    width: "100%",
                                    height: "auto",
                                    display: "block",
                                    transition: "transform 0.3s ease-in-out",
                                    cursor: "pointer",
                                }}
                                alt={`Image ${i + 1}`}
                            />
                        </div>
                    ))}
                </Masonry>
            </div>
            {selectedImage !== null && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0, 0, 0, 0.8)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    onClick={closeModal}
                >
                    <img
                        src={images[selectedImage]}
                        alt={`Image ${selectedImage + 1}`}
                        style={{
                            maxWidth: "90%",
                            maxHeight: "90%",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
                        }}
                    />
                </div>
            )}
        </>
    );
}

export default Gallery;
