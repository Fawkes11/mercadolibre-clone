import React from 'react'
import { Link, Box } from '@chakra-ui/react'
import { Link as LinkItem} from "react-router-dom"


const NavLink = ({to, children, color, ...props}) => {
    return (
      <LinkItem to={to}>
        <Link as={Box} {...props} fontWeight="light" fontSize="sm" _hover={{textDecoration: "none", fontWeight: "normal"}} color={color}>
          {children}
        </Link>
      </LinkItem>
    )
  }

export default NavLink

