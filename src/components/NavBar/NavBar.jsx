import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';
const navLinks = [
  {
    id: 1,
    name: "Home",
    url: "/home"
  },
  {
    id: 2,
    name: "About",
    url: "/about"
  },
  {
    id: 3,
    name: "Services",
    url: "/services"
  },
  {
    id: 4,
    name: "Projects",
    url: "/projects"
  },
  {
    id: 5,
    name: "Contact",
    url: "/contact"
  }
];

function NavBar() {
  const [open, setOpen] = useState(false); /* by default close */
  return (
    <nav className='flex justify-between mx-10'>
     <span className='flex' onClick={() => setOpen(!open)}>
      {
      open? <X className='md:hidden'></X> :  
      <Menu className='md:hidden'></Menu>
      }

      <h3 className='ml-7'>My Nav Bar</h3>

     </span>
      <ul className='flex'>
        {
          navLinks.map(route=>
            <li className='mr-10'><a href={route.url}>{route.name}</a></li> 
          )
        }
      </ul>
      <ul className={`lg:hidden absolute duration-1000 lg:mr-10
         ${open ? 'top-23' : '-top-40'}`}>
            <li className='mr-10 p-1.5 px-5 bg-amber-600 hover:bg-amber-200'><a href="/home">Home</a></li>
            <li className='mr-10 p-1.5 px-5 bg-amber-600 hover:bg-amber-200'><a href="/about">About</a></li>
            <li className='mr-10 p-1.5 px-5 bg-amber-600 hover:bg-amber-200'><a href="/contact">Contact</a></li>
            <li className='mr-10 p-1.5 px-5 bg-amber-600 hover:bg-amber-200'><a href="/blog">Blog</a></li>
        </ul> 

<button>Sign in</button>
    </nav>
  )
}

export default NavBar