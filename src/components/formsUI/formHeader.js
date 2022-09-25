import { Container, Box } from '@chakra-ui/react'
import React from 'react'
import NavLink from '../navigation/NavLink'

const FormHeader = () => {
  return (
    <>
        <Box w="100%" h={{ base: "48px", md: "56px" }} bg="yellow.500">
            <Container maxW="1200px" h="100%" pos="relative">
                <NavLink
                    to="/"
                    pos="absolute"
                    top={{ base: "8px", lg: "11px" }}
                    left="10px"
                    w={{ base: "44px", lg: "134px" }}
                    h={{ base: "32px", lg: "34" }}
                    href="#"
                    bgImage={{
                        base: "url('https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.1/mercadolibre/logo__small@2x.png')",
                        lg: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.1/mercadolibre/logo__large_plus@2x.png",
                    }}
                    bgRepeat="no-repeat"
                    bgSize={{ base: "44px 32px", lg: "134px 34px" }}
                ></NavLink>
            </Container>
        </Box>

        <Box w="100%" h={{ base: "0px", md: "182px" }} bg="yellow.500"></Box>
    </>
  )
}

export default FormHeader