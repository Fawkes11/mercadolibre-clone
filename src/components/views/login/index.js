import React from "react";
import * as Yup from 'yup';
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
    FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik, Form, Formik, Field } from "formik";
import SimpleLayout from "../../layouts/SimpleLayout";
import InputFieldWrapper from "../../formsUI/InputFieldWrapper";

const Login = () => {

    const INITIAL_FORM_STATE = {
        email: "",
        password: ""
    }

    const FORM_VALIDATION = Yup.object().shape({
        "email": Yup.string().email("email no ").required("required"),
        "password": Yup.string().required("required pass")
    })

    return (
        <SimpleLayout>

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
            
        </SimpleLayout>
    );
};

export default Login;
