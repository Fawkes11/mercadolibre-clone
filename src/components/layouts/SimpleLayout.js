import { Flex } from "@chakra-ui/react"
import FormHeader from "../formsUI/formHeader"

const SimpleLayout = ({children}) => {
    return (
      <Flex
              w="100%"
              bg="blackAlpha.200"
              h="100vh"
              spacing={0}
              direction="column"
              alignItems="center"
          >
              <FormHeader/>
  
              {children}
              
          </Flex>
    )
  }
  

  export default SimpleLayout