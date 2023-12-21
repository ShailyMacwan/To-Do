import React from 'react'

export const Footer = () => {
  let footerStyle ={
      position:"absolue",
      top:"100vh",
      width:"100%"
  }
  return (

   
    <footer className='bg-dark text-light py-3' style={footerStyle}>
      <p className='text-center'>
        Copyright &copy; MyToDoApp
      </p>
    </footer>
  )
}
