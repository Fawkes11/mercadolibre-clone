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
    InputGroup,
    InputLeftElement,
    
} from "@chakra-ui/react";

import { BiSearchAlt2 } from "react-icons/bi";

const header = () => {
    return (
        <Flex as="header" bg="yellow.500" h="87px" mb="500px" direction='row'>
            <Container maxW="1200px" h="100%" >
                <Link
                display='block'
                    pos="relative"
                    top={{ base: "8px", lg: "11px" }}
                    left="10px"
                    w={{ base: "44px", lg: "134px" }}
                    h={{ base: "31px", lg: "34" }}
                    href="#"
                    bgImage={{
                        base: "url('https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.1/mercadolibre/logo__small@2x.png')",
                        lg: "https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.1/mercadolibre/logo__large_plus@2x.png",
                    }}
                    bgRepeat="no-repeat"
                    bgSize={{ base: "44px 31px", lg: "134px 34px" }}
                ></Link>
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<BiSearchAlt2 color="gray.300" />}
                    />
                    <Input type="tel" placeholder="Phone number" bg='white'/>
                </InputGroup>
            </Container>
        </Flex>
    );
};

export default header;
