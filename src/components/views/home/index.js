import React from 'react'

import CompletedLayout from '../../layouts/CompletedLayout'
import ProductLayout from '../../layouts/ProductLayout'
import CardProduct from '../../UI/CardProduct'
import { ListItem } from  '@chakra-ui/react'
import { useSelector } from 'react-redux'

const Home = () => {
  const dataList = useSelector(state => state.searchProducts)
  console.log(dataList)
  return (

    <CompletedLayout h="100vh">
      <ProductLayout
        topTitle="Inspirado en lo último que viste"
        bottomTitle="Ver más..."
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
      <ProductLayout
        topTitle="Basado en tu Busqueda"
        bottomTitle="Ver más..."
      >
        {
          dataList.map((item, index) => 
          { return (
            <ListItem key={index} borderTop="1px solid #ebebeb" borderBottom="1px solid #ebebeb" listStyleType="none">
              <CardProduct/>
            </ListItem>)
          })
        }
      </ProductLayout>
    </CompletedLayout>
  )
}

export default Home