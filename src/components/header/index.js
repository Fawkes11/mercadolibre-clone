import React from "react";
import LinkItem from "../navigation/NavLink";
import {
  Divider,
  Box,
  Link,
  Square,
  Icon,
  HStack,
  Flex,
  Button,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  Badge,
} from "@chakra-ui/react";
import FormInputSearch from "../formsUI/FormInputSearch";
import { AiOutlineShoppingCart, AiOutlineMenu } from "react-icons/ai";
import { IoLocationOutline, IoChevronDown, IoNotificationsOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import NavLink from "../navigation/NavLink";




const header = () => {
  return (
    <Flex
      as="header"
      bg="yellow.500"
      direction="column"
      h={{ base: "89px", lg: "100px" }}
      w="100%"
      p="0"
    >
      <Container w="100%" maxW="1200px" p="0" position="relative">

        <NavLink
          pos="absolute"
          top={{ base: "8px", lg: "11px" }}
          left="10px"
          w={{ base: "44px", lg: "134px" }}
          h={{ base: "32px", lg: "34" }}
          to="/"
          bgImage={{
            base: "url('https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.1/mercadolibre/logo__small@2x.png')",
            lg: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.1/mercadolibre/logo__large_plus@2x.png",
          }}
          bgRepeat="no-repeat"
          bgSize={{ base: "44px 32px", lg: "134px 34px" }}
        ></NavLink>

        <FormInputSearch/>

        <Link position="absolute" right="0" top="8px" display={{base: "none", lg: "flex"}}>
              <Image src="https://http2.mlstatic.com/D_NQ_921393-MLA51371540772_092022-OO.webp" alt="starplus" w="340px" borderRadius="rounded"/>
        </Link>


        <Square position="absolute" right="45px" top="0" w="45px" h="50px" cursor="pointer" display={{base:"flex", lg: "none"}}>
          <Icon as={AiOutlineMenu} w={5} h={5} />
        </Square>

        <Square position="absolute" right="0" top="0" w="45px" h="50px" cursor="pointer"  display={{base:"flex", lg: "none"}}>
          <Icon as={AiOutlineShoppingCart} w={5} h={5} />
        </Square>

        <Divider display={{ base: "block", lg: "none" }} />
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
          <Box fontSize={{ base: "xs", lg: "xs" }} color={{ base: "#736c28", lg: "textGrayColor.300" }} display="inline">Enviar a Hessler</Box>
          <Box fontSize={{ base: "xs", lg: "sm" }} color={{ base: "#736c28", lg: "textGrayColor.600" }} ml={{ base: 1, lg: 0 }} display={{ base: "inline", lg: "block" }}>Calle 6 #10-11</Box>
        </Link>

        <HStack as="ul" listStyleType="none" spacing={6} ml="190px" display={{base: "none", lg:"flex"}}>
          <li>
            <Menu>
              <MenuButton  _hover={{bg:"transparent", textDecoration: "none", fontWeight: "normal"}} as={Button} rightIcon={<IoChevronDown />} bg="transparent" fontWeight="light" fontSize="sm" color="textGrayColor.300" _active={{bg:"transparent"}} p="0">
                Categor??as
              </MenuButton>
              <MenuList bg="rgb(51,51,51)">
                <MenuItem bg="transparent" color="white" _active={{bg: "blue.600"}} _hover={{bg: "blue.500"}}>Veh??culos</MenuItem>
                <MenuItem bg="transparent" color="white" _active={{bg: "blue.600"}} _hover={{bg: "blue.500"}}>Supermercado</MenuItem>
                <MenuItem bg="transparent" color="white" _active={{bg: "blue.600"}} _hover={{bg: "blue.500"}}>Tecnolog??a</MenuItem>
                <MenuItem bg="transparent" color="white" _active={{bg: "blue.600"}} _hover={{bg: "blue.500"}}>Electrodom??sticos</MenuItem>
                <MenuItem bg="transparent" color="white" _active={{bg: "blue.600"}} _hover={{bg: "blue.500"}}>Hogar y Muebles</MenuItem>
              </MenuList>
            </Menu>
          </li>
          <li>
            <LinkItem to="/" color="textGrayColor.300">Ofertas</LinkItem>
          </li>
          <li>
            <LinkItem to="/" color="textGrayColor.300">Historial</LinkItem>
          </li>
          <li>
            <LinkItem to="/" color="textGrayColor.300">Vender</LinkItem>
          </li>
          <li>
            <LinkItem to="/" color="textGrayColor.300">Ayuda/PQR</LinkItem>
          </li> 
        </HStack>

        <HStack position="absolute" bottom="8px" right="10px" as="ul" listStyleType="none" spacing={4} ml="190px" display={{base: "none", lg:"flex"}}>
          <li>
            <LinkItem to="/register" color="textGrayColor.600">Crea tu cuenta</LinkItem>
          </li>
          <li>
            <LinkItem to="/login" color="textGrayColor.600">Ingresa</LinkItem>
          </li>
          <li>
            <LinkItem to="/"color="textGrayColor.600">Mis compras</LinkItem>
          </li>
          <li>
          <Square cursor="pointer">
            <Icon as={IoNotificationsOutline} w={5} h={5} />
          </Square>
          </li>
          <li>
          <Square cursor="pointer" position="relative">
            <Badge position="absolute" top="-5px" right="-5px" fontSize='0.6em' bg='red' color="white"></Badge>
            <Icon as={RiShoppingCartLine} w={5} h={5} />
          </Square>
          </li>
        </HStack>


      </Container>

    </Flex >
  );
};

export default header;
