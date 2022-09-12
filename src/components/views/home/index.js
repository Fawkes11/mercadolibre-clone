import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <>
    <div>This is a Home</div>
    <Link to='login'> Login</Link>
    </>
  )
}

export default home