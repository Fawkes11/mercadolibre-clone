import { useState } from "react";
import { Box, Input, InputGroup, InputRightElement, InputLeftElement, Divider } from "@chakra-ui/react"
import { AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addSearchProducts } from "../../app/features/searchProducts/searchProductSlice"


const FormInputSearch = () => {

    const [inputValue, setInputValue] = useState("");
    const [dataList, setDataList] = useState([]);
    const dispatch = useDispatch();

    const handleSearch = (e) => { 
        e.preventDefault()
        fetch(`https://api.mercadolibre.com/sites/MCO/search?q=${inputValue}`)
        .then((response) => {
            return response.json()
        }).then((data)=> {
            dispatch(addSearchProducts(data.results))
        })
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
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
                    type="submit"
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
                    type="sumbit"
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
                    name="title"
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
                    onChange={handleChange}
                />
            </InputGroup>
        </Box>
    )
}

export default FormInputSearch