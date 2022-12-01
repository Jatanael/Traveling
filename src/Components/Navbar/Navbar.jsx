import React, {useState} from 'react'
import './navbar.css'
import { MdOutlineTravelExplore  } from 'react-icons/md';
import {AiFillCloseCircle} from 'react-icons/ai';
import {TbGridDots} from 'react-icons/tb';

const Navbar = () => {
  const [active, setActive] = useState('navBar')
// Função para ativar a navbar
const showNav = () =>
{
  setActive('navBar activeNavbar');
}
// Função para remover a navbar
const removeNavbar = () =>
{
  setActive('navBar');
}

  return (
    <section className='navBarSection'>
      <header className="header flex">

        <div className="logoDiv">
          <a href="#top" className="logo flex">
            <h1><MdOutlineTravelExplore className='icon'/>Travel.</h1>
          </a>
        </div>

   

  <div className={active}>
    <ul className="navList flex">
      <li className="navItem">
        <a href="#top" className="navLink">Home</a>
      </li>

      <li className="navItem">
        <a href="#top" className="navLink">Packages</a>
      </li>

      <li className="navItem">
        <a href="#top" className="navLink">Shop</a>
      </li>

      <li className="navItem">
        <a href="#top" className="navLink">About</a>
      </li>

      <li className="navItem">
        <a href="#top" className="navLink">Pages</a>
      </li>

      <li className="navItem">
        <a href="#top" className="navLink">News</a>
      </li>

      <li className="navItem">
        <a href="#top" className="navLink">Contact</a>
      </li>

      <button className='btn'>
        <a href="#top">BOOK NOW</a>
      </button>
    </ul>

    <div onClick={removeNavbar} className="closeNavbar">
    <AiFillCloseCircle className='icon'/>
    </div>

  </div>

  <div onClick={showNav}
  className="toggleNavbar">
    <TbGridDots className='icon'/>
  </div>

      </header>
    </section>
  )
}

export default Navbar;