import { Button ,Navbar,  } from 'flowbite-react'
import React from 'react'

const Nav = () => {
  return (
    <div className='bg-blue-500'>
   <Navbar className="bg-blue-700"
  fluid={true}
  rounded={true}
>
  <Navbar.Brand href="https://flowbite.com/">
  
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Flowbite
    </span>
  </Navbar.Brand>
  <div className="flex md:order-2 bg-black">
    <Button>
      Get started
    </Button>
    <Navbar.Toggle />
  </div>
  <Navbar.Collapse>
    <Navbar.Link
      href="/navbars"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      About
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Services
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Pricing
    </Navbar.Link>
    <Navbar.Link href="/navbars">
      Contact
    </Navbar.Link>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}

export default Nav