// import React from 'react'

import circleimage from "../../assets/circle-image.png"
import furniture from "../../assets/furnituresimilarappbg.svg";
import tourism from "../../assets/tourismsimilarappbg.svg";
import assurance from "../../assets/assurancesimilarappbg.svg";
import {
    Box,
    Grid,
    Image,
    Text,
} from "@chakra-ui/react";
import SimilarAppPosts from "./SimilarAppPosts";
function SimilarApps() {
    const InsideImages4 = [
        {
            description: "Second-Hand Furniture Simplified",
            image: furniture,
        },
        {
            description: "Wilderness Tourism App Case Study",
            image: tourism,
        },
        {
            description: "Vanguard Assurance Corporation(VAC)",
            image: assurance,
        },
    ];
    return (
        <>

            <Box>
                <Box mt={["9rem", "9rem"]}>
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
                <Text fontSize={["2xl", "2xl"]} ml={["1rem", "7rem"]} fontWeight="bold" mt="10">
                    Similar Apps
                </Text>
            </Box>

            <Grid
                templateColumns={["1fr", "repeat(3, 1fr)"]}
                padding={["20px", "20px 40px", "20px 80px"]}
                gridColumnGap={9}
            >
                {InsideImages4.map((pimage) => (
                    <Box key={pimage.description} width="100%" height="100%">
                        <SimilarAppPosts pimage={pimage} />
                    </Box>
                ))}
            </Grid>
        </>
    )
}

export default SimilarApps