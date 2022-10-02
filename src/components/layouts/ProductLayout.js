import React, { useRef } from 'react'
import { Link as NavLink } from 'react-router-dom'
import { Box, Link, Flex, Button, UnorderedList, Icon } from '@chakra-ui/react'
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";


const ProductLayout = ({ children, topTitle, bottomTitle, ...otherProps }) => {

    const scrollBox = useRef()

    const handleScrollLeft = () => {
        scrollBox.current.scroll({
            top: 0,
            left: scrollBox.current.scrollLeft - 1168,
            behavior: 'smooth'
        });
    }
    const handleScrollRight = () => {
        scrollBox.current.scroll({
            top: 0,
            left: scrollBox.current.scrollLeft + 1168,
            behavior: 'smooth'
        });
    }


    return (
        <Box
            borderRadius="6px"
            my="30px"
            boxShadow="box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
            pos="relative"
        >
            <Box bg={{ base: "white", lg: "transparent" }} p="12px">
                <Link to="/"
                    as={NavLink}
                    position="sticky"
                    fontSize={{ base: "lg", lg: "2xl" }}
                    fontWeight={{ base: "semibold", lg: "light" }}
                    lineHeight="1"
                    color={{ base: "grayTextColor.600", lg: "#666" }}
                    _hover={{ textDecoration: "none" }}
                >{topTitle}</Link>
            </Box>
            <Flex
                ref={scrollBox}
                as={UnorderedList}
                {...otherProps}
                m="0"
                w="100%"
                direction={{ base: "column", lg: "row" }}
                overflow="hidden"
                h={{ base: "570px", lg: "auto" }}
                css={{
                    '&::-webkit-scrollbar': {
                        marginTop: "15px",
                        height: '6px',
                        width: '3px'
                    },
                    '&::-webkit-scrollbar-track': {
                        width: '3px',
                        height: "3px"
                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: "gray",
                        borderRadius: '24px',
                    },
                }}>
                {children}

            </Flex>
            <Button
                display={{ base: "none", lg: "inline-flex" }}
                pos="absolute"
                left="0"
                top="50%"
                transform={{ base: "translateY(-10%)", xl: "translateX(-30px)" }}
                w="60px"
                h="60px"
                rounded="full"
                bg="white"
                boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.19)"
                _hover={{
                    backgroundColor: "white",
                    boShadow: "0 7px 16px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                }}
                _active={{
                    backgroundColor: "white",
                    boShadow: "0 7px 16px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                }}
                onClick={handleScrollLeft}>
                <Icon
                    color="blue.500"
                    h="36px"
                    w="25px"
                    as={IoChevronBackSharp} />
            </Button>
            <Button
                display={{ base: "none", lg: "inline-flex" }}
                pos="absolute"
                right="0"
                top="50%"
                transform={{ base: "translateY(-10%)", xl: "translateX(22px)" }}
                w="60px"
                h="60px"
                rounded="full"
                bg="white"
                boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.19)"
                _hover={{
                    backgroundColor: "white",
                    boShadow: "0 7px 16px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                }}
                _active={{
                    backgroundColor: "white",
                    boShadow: "0 7px 16px 0 rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                }}
                onClick={handleScrollRight}>

                <Icon
                    color="blue.500"
                    h="36px"
                    w="25px"
                    as={IoChevronForwardSharp} />
            </Button>
            <Box bg="white" p="12px" display={{ base: "flex", lg: "none" }}>
                <Link to="/" as={NavLink} fontSize="sm" fontWeight="semibold" lineHeight="1" color="blue.500" _hover={{ textDecoration: "none" }}>{bottomTitle}</Link>
            </Box>
        </Box>
    )
}

export default ProductLayout