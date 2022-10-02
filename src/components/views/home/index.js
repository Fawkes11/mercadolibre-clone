import React from 'react'

import CompletedLayout from '../../layouts/CompletedLayout'
import ProductLayout from '../../layouts/ProductLayout'
import CardProduct from '../../UI/CardProduct'
import { UnorderedList, ListItem, Box, Text, Link, HStack, Flex } from '@chakra-ui/react'

const home = () => {
  return (

    <CompletedLayout>
      <ProductLayout
        topTitle="Inspirado en lo último que viste"
        bottomTitle="Ver más..."
        h="100vh"
      >
        {
          ["a","a","a","a","a","a","a","a","a","a","a","a","a","a"].map((item, index) => 
          { return (
            <ListItem key={index} borderTop="1px solid #ebebeb" borderBottom="1px solid #ebebeb" listStyleType="none">
              <CardProduct/>
            </ListItem>)
          })
        }
      </ProductLayout>
      <h1>HOLA MUNDO</h1>
    </CompletedLayout>
  )
}

export default home