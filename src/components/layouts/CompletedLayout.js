import React from 'react'
import Header from '../header'
import { Container, Box } from '@chakra-ui/react'

const CompletedLayout = ({children}) => {
  return (
    <Box bg="#ebebeb">
    <Header/>
    <Container maxW="1200px" px={{base: "10px", lg: "16px"}}>
        {children}
    </Container>
    </Box>
  )
}

export default CompletedLayout