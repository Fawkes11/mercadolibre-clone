import { VStack, Text, Button, Divider } from '@chakra-ui/react'
import { Formik, Form } from 'formik'
import SimpleLayout from '../../layouts/SimpleLayout'
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import InputFieldWrapper from '../../formsUI/InputFieldWrapper'


const Register = () => {

  const INITIAL_FORM_STATE = {
    email: "",
    password: ""
}

const FORM_VALIDATION = Yup.object().shape({
    "email": Yup.string().email("Ingrese un email válido").required("Este campo es obligatorio"),
    "password": Yup.string().required("Este campo es obligatorio")
})

  return (
    (
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
                  ¡Hola! Crea tu cuenta
              </Text>
              <Formik
                  initialValues={INITIAL_FORM_STATE}
                  validationSchema={FORM_VALIDATION}
                  onSubmit={(values, actions) => {
                      setTimeout(() => {
                          console.log(values)
                          alert(JSON.stringify(values, null, 2))
                          actions.setSubmitting(false)
                          actions.resetForm()
                      }, 1000)
                  }}
              >
                  {(props) =>
                  (
                      <VStack as={Form} spacing={4} w="100%">
                          <InputFieldWrapper
                              name="email"
                              label="Teléfono, E-mail o usuario"
                              h="48px" />

                          <InputFieldWrapper
                              name="password"
                              type="password"
                              label="Contraseña"
                              h="48px" />

                          <Button
                              w="100%"
                              colorScheme="blue"
                              h="48px"
                              type="submit"
                              isLoading={props.isSubmitting}>
                              Crear Cuenta
                          </Button>
                          <Button
                              as={Link}
                              to="/login"
                              w="100%"
                              colorScheme="white"
                              textColor="blue.500"
                              h="48px">
                              ingresar
                          </Button>
                      </VStack>
                  )
                  }
              </Formik>


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
                  Necesito ayuda para crear cuenta
              </Button>
          </VStack>

      </SimpleLayout>
  )
  )
}

export default Register