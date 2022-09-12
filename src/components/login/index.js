import React from "react";
import {
    Divider,
    Text,
    Box,
    Link,
    FormControl,
    FormLabel,
    Input,
    FormHelperText,
    VStack,
    Flex,
    Button,
    Container,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const Login = () => {
    return (
        <Flex
            w="100%"
            bg="blackAlpha.200"
            h="100vh"
            spacing={0}
            direction="column"
            alignItems="center"
        >
            <Box w="100%" h={{ base: "48px", md: "56px" }} bg="yellow.500">
                <Container maxW="1200px" h="100%" pos="relative">
                    <Link
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
                    ></Link>
                </Container>
            </Box>
            <Box w="100%" h={{ base: "0px", md: "182px" }} bg="yellow.500"></Box>

            <VStack
                bg="white"
                pos="relative"
                w={{ base: "100%", md: "424px" }}
                px={{ base: "24px", md: "64px" }}
                pt={{ base: "0", md: "32px" }}
                h={{ base: "100%", md: "auto" }}
                mt={{ base: "0", md: "-150px" }}
                borderRadius="6px"
            >
                <Text
                    alignSelf="start"
                    as="h1"
                    fontWeight="semibold"
                    fontSize={{ base: "xl", md: "2xl" }}
                    size="sm"
                    noOfLines={2}
                    mt={{ base: "30px", md: "16px" }}
                >
                    ¡Hola! Ingresa tu teléfono, e‑mail o usuario
                </Text>

                <VStack as="form" spacing={4} w="100%">
                    <FormControl as="fieldset">
                        <FormLabel as="legend" fontSize="sm" fontWeight="normal">
                            Teléfono, E-mail o usuario
                        </FormLabel>
                        <Input name="email" type="email" h="48px" />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    </FormControl>
                    <FormControl as="fieldset">
                        <FormLabel as="legend" fontSize="sm" fontWeight="normal">
                            Contraseña
                        </FormLabel>
                        <Input name="password" type="password" h="48px" />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                    </FormControl>
                    <Button w="100%" colorScheme="blue" h="48px">
                        Continuar
                    </Button>
                    <Button w="100%" colorScheme="white" textColor="blue.500" h="48px">
                        Crear cuenta
                    </Button>
                </VStack>

                <Divider w={{ base: "0", md: "424px" }} />
                <Button
                    mt={0}
                    pos="relative"
                    bottom="0"
                    fontSize="sm"
                    w={{ base: "auto", md: "424px" }}
                    colorScheme="white"
                    textColor="blue.500"
                    h="48px"
                >
                    Necesito ayuda para ingresar
                </Button>
            </VStack>
        </Flex>
    );
};

export default Login;
