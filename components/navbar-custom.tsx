'use client';

import { Navbar } from 'flowbite-react';
import { useState } from 'react';

export default function NavbarCust(){
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () =>{
      if(window.scrollY > 150){
        setColorChange(true);
      }else{
        setColorChange(false);
      }
    }

    window.addEventListener('scroll', changeNavbarColor);

    return(
        <Navbar
        className={(colorChange ? 'md:bg-white' : 'md:bg-transparent text-white') + ' bg-white border-gray-200 dark:bg-gray-900 fixed w-full transition ease-in-out duration-300'}
      >
        <Navbar.Brand
        href="/"
      >
        <span className="text-4xl font-semibold whitespace-nowrap">
          Flowbite React
        </span>
      </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            active
            href="#"
            className='text-base'
          >
            <p>
              Home
            </p>
          </Navbar.Link>
          <Navbar.Link          
            href="#"
            className='text-base'
          >
            <p>
              About
            </p>
          </Navbar.Link>
          <Navbar.Link href="#" className='text-base'>
            Services
          </Navbar.Link>
          <Navbar.Link href="#" className='text-base'>
            Pricing
          </Navbar.Link>
          <Navbar.Link href="#" className='text-base'>
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    )
}