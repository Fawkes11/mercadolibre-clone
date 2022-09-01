import React from 'react'
import { Container, Box, Link, FormControl, FormLabel, Input, FormHelperText, VStack, Heading } from '@chakra-ui/react'

const Login = () => {
    return (

        <Box w='100%'>
            <Box
                w='100%'
                h='48px'
                bg='yellow.500'
                pos='relative'
            >
                <Link
                    pos="absolute"
                    top="8px"
                    left="10px"
                    w='44px'
                    h='32px'
                    href='#'
                    bgImage="url('https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.1/mercadolibre/logo__small@2x.png')"
                    bgRepeat="no-repeat"
                    bgSize="44px 31px"
                >

                </Link>
            </Box>
            <VStack px={['24px', '64px']} bg='red.500' spacing={6}>
                <Heading as='h1' size='sm' noOfLines={2}>
                    ¡Hola! Ingresa tu teléfono, e‑mail o usuario
                </Heading>
                <form>
                    <FormControl as='fieldset'>
                        <FormLabel as='legend'>Email address</FormLabel>
                        <Input type='email' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                    <FormControl as='fieldset'>
                        <FormLabel as='legend'>Password</FormLabel>
                        <Input type='password' />
                        <FormHelperText>We'll never share your email.</FormHelperText>
                    </FormControl>
                </form>
                <Link href='#' color='blue.500' p='16px' bg='whiteBack.500'>Necesito ayuda para ingresar</Link>
            </VStack>


        </Box>

    )
}

export default Login