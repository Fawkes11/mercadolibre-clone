import React from "react";
import {
  Divider,
  Text,
  Box,
  Link,
  FormControl,
  FormLabel,
  Square,
  Input,
  Icon,
  FormHelperText,
  VStack,
  Flex,
  Button,
  Container,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";

import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";


const header = () => {
  return (
    <Flex
      as="header"
      bg="yellow.500"
      mb="500px"
      direction="column"
      h={{ base: "89px", lg: "92px" }}
      w="100%"
      p="0"
    >
      <Container w="100%" maxW="1200px" p="0" position="relative">

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

        <Box
          as="form"
          h={{ base: "48px", lg: "56px" }}
          py="8px"
          position="relative"
          left={{ base: "64px", lg: "155px" }}
          w={{ base: "calc(100% - 158px)", lg: "calc(100% - 249px)" }}>
          <InputGroup
            h={{ base: "32px", lg: "39px" }}>
            {window.screen.width > 1024 ? (
              <InputRightElement
                h={{ base: "32px", lg: "39px" }}
                pointerEvents="none"
                children={<AiOutlineSearch color="green.100" />}
              />
            ) : (
              <InputLeftElement
                h={{ base: "32px", lg: "39px" }}
                pointerEvents="none"
                children={<AiOutlineSearch color="gray.300" />}
              />
            )}
            <Input
              h={{ base: "32px", lg: "39px" }}
              type="text"
              placeholder="Buscar productos, marcas y más"
              bg="white"
            />
          </InputGroup>
        </Box>



        <Square position="absolute" right="45px" top="0" w="45px" h="50px" cursor="pointer">
          <Icon as={AiOutlineMenu} w={6} h={6} />
        </Square>

        <Square position="absolute" right="0" top="0" w="45px" h="50px" cursor="pointer">
          <Icon as={AiOutlineShoppingCart} w={6} h={6} />
        </Square>
        <Divider />
        <Link variant="with-border" lineHeight="15px" display={{ base: "flex", lg: "inline-block" }}
          position="absolute"
          alignItems="center"
          top="52px"
          padding="0px 8px 0px 30px"
          height="39px"
          maxW="100%"
        >
          <Icon as={IoLocationOutline} position="absolute"
            top={{ base: "10px", lg: "4px" }}
            left={{ base: "10px", lg: "5px" }}
            fontSize={{ base: "16px", lg: "26px" }} />
          <Box fontSize={{ base: "sm", lg: "xs" }} color={{ base: "#736c28", lg: "textGrayColor.300" }} display="inline">Enviar a Hessler</Box>
          <Box fontSize="sm" color={{ base: "#736c28", lg: "textGrayColor.600" }} h="20px" ml={{ base: 1, lg: 0 }} display={{ base: "inline", lg: "block" }}>Calle 6 #10-11</Box>
        </Link>


      </Container>

    </Flex >
  );
};

export default header;
