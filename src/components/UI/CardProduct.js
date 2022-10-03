import React from 'react'
import { Flex, Image, Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react"

import useHover from '../hooks/useHover';


const CardProduct = () => {

    const [hoverRef, isHovered] = useHover();

    return (
        <LinkBox
        cursor="pointer"
            display="flex"
            flexDirection={{ base: "row", lg: "column" }}
            ref={hoverRef}
            bg="white"
            mr={{ base: "0", lg: "10px" }}
            borderRadius={{base:"none", lg: "0 0 6px 6px"}}
            boxShadow="0 1px 1px 0 rgb(0 0 0 / 10%)"
            align="center"
            _hover={{
                base: {},
                lg: { boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)" }
            }}
        >
            <Flex p={{ base: "4px", lg: "20px" }} minWidth={{ base: "112px", lg: "224" }} height={{ base: "112px", lg: "224" }} justifyContent="center" align="center">
                <Image src='https://http2.mlstatic.com/D_Q_NP_783936-MCO44218542862_122020-AB.webp' borderRadius="5px" w="100%" h="100%" />
            </Flex>

            <Box
                p="7px 16px 10px 8px"
                borderTop={{ base: "none", lg: "1px solid #ebebeb" }}
                display="flex"
                flexDirection={{ base: "column", lg: "column-reverse" }}
                w="100%"
            >
                <LinkOverlay
                    href='#'
                    color="#424242"
                    fontWeight="normal"
                    fontSize="sm"
                    textAlign="left"
                    lineHeight="18px"
                    noOfLines={2}
                    display="block"
                    height={{ base: "auto", lg: isHovered ? "auto" : "0" }}
                    transition="all 0.15s ease-out"
                >
                    Soporte Base Celular Tablet Escritorio Ajustable Dos Ejes v1
                </LinkOverlay>
                <Text
                    textAlign="left"
                    color="#00a650"
                    display={{ base: "none", lg: "block" }}
                    fontWeight="semibold"
                    fontSize="sm">
                    Envío gratis
                </Text>
                <Flex m="8px 0 4px">
                    <Text
                        color="textGrayColor.600"
                        fontSize="xl"
                        lineHeight="0.83"
                        mr="5px"
                    >$18.990
                    </Text>
                    <Text color="#00a650" lineHeight="1" fontSize="xs" mt="1px">20% OFF</Text>
                </Flex>
                <Text
                    textAlign="left"
                    lineHeight="1em"
                    fontSize="sm"
                    display={{ base: "visible", lg: "none" }}
                >36x $527</Text>
                <Box w="42px" display={{ base: "flex", lg: "none" }}>
                    <svg fill='#00a650' viewBox="0 0 44 14"><path d="M2.83 0h5.66L5.66 5h4.716L2.83 14l1.886-6H0l2.83-8zm12.48 10.267h-2.109l1.803-8.093H21l-.405 1.82h-3.887l-.27 1.262h3.79l-.405 1.82h-3.801l-.712 3.19zm10.197.145c-2.514 0-3.752-1.189-3.752-2.887 0-.134.037-.413.061-.534l1.08-4.817h2.145l-1.067 4.768c-.012.06-.037.194-.037.34.013.667.528 1.31 1.57 1.31 1.128 0 1.705-.703 1.913-1.65l1.067-4.768h2.134l-1.067 4.805c-.442 1.965-1.52 3.433-4.047 3.433zm10.896-.145h-5.396l1.803-8.093h2.11l-1.387 6.273h3.275l-.405 1.82zm7.192 0H38.2l1.802-8.093h2.11l-1.386 6.273H44l-.405 1.82z"></path></svg>
                </Box>
            </Box>

        </LinkBox>
    )
}

export default CardProduct