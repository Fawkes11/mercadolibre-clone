import React from 'react'
import Header from '../header'
import { Container, Flex } from '@chakra-ui/react'

const CompletedLayout = ({children}) => {
  return (
    <>
    <Header/>
    <Container maxW="1200px">
        {children}
    </Container>
    </>
  )
}

export default CompletedLayout