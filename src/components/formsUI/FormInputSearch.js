import { useState } from "react";
import { Box, Input, InputGroup, InputRightElement, InputLeftElement, Divider } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai";

const FormInputSearch = () => {

    const [inputValue, setInputValue] = useState("")
    const [dataList, setDataList] = useState([])

    const handleSearch = (e) => {
        console.log(inputValue)
        e.preventDefault()
        fetch("https://api.mercadolibre.com/sites/MCO/search?q=iphone%2013")
        .then((response) => {
            return response.json()
        }).then((data)=> {
            setDataList(data.results)
            console.log(dataList)
        })
    }

    return (
        <Box
            as="form"
            h={{ base: "48px", lg: "56px" }}
            py="8px"
            position="relative"
            left={{ base: "64px", lg: "190px" }}
            w={{ base: "calc(100% - 158px)", lg: "calc(100% - 570px)" }}>
            <InputGroup
                h={{ base: "32px", lg: "39px" }}>


                <InputLeftElement
                    as="button"
                    display={{ base: "flex", lg: "none" }}
                    h={{ base: "32px", lg: "39px" }}
                    cursor="pointer"
                    _active={{
                        paddingTop: "4px"
                    }}
                    onClick={handleSearch}
                    children={<AiOutlineSearch w="20px" color="gray.300" />}
                /><InputRightElement
                    as="button"
                    display={{ base: "none", lg: "flex" }}
                    h={{ base: "32px", lg: "39px" }}
                    cursor="pointer"
                    _active={{
                        paddingTop: "4px"
                    }}
                    onClick={handleSearch}
                    children={<AiOutlineSearch color="green.100" />}
                />

                <Divider orientation='vertical' />
                <Input
                    h={{ base: "32px", lg: "39px" }}
                    type="text"
                    placeholder="Buscar productos, marcas y más..."
                    _placeholder={{ opacity: 0.4 }}
                    bg="white"
                    border="none"
                    borderRadius="2px"
                    boxShadow="base"
                    pl={{ lg: "16px" }}
                    pr={{ base: "8px" }}
                    onChange={(inputV)=>setInputValue(inputV.target.value)}
                />
            </InputGroup>
        </Box>
    )
}

export default FormInputSearch