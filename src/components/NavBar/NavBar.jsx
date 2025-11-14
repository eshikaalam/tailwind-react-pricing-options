import React from 'react'
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
  return (
    <nav>
      <h3>My Nav Bar</h3>
      <ul className='flex'>
        {
          navLinks.map(route=>
            <li className='mr-10'><a href={route.url}>{route.name}</a></li> 
          )
        }
      </ul>
       {/* <ul className='flex'>
            <li className='mr-10'><a href="/home">Home</a></li>
            <li className='mr-10'><a href="/about">About</a></li>
            <li className='mr-10'><a href="/blog">Blog</a></li>
        </ul> 
*/}
<button>Sign in</button>
    </nav>
  )
}

export default NavBar