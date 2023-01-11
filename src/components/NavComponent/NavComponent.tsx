import { FC, useEffect, useState } from 'react';


interface NavComponentProps { }

const NavComponent: FC<NavComponentProps> = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const menuButtonClickHandler = () => {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    // navbar
    <nav className="relative container mx-auto p-6">
      {/* flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="pt-2">
          <img src="./assets/logo.svg" alt="" />
        </div>
        {/* Menu Items */}
        <div className="hidden space-x-6 md:flex">
          <a href="#" className='hover:text-darkGreyishBlue'>Pricing</a>
          <a href="#" className='hover:text-darkGreyishBlue'>Product</a>
          <a href="#" className='hover:text-darkGreyishBlue'>About Us</a>
          <a href="#" className='hover:text-darkGreyishBlue'>Careers</a>
          <a href="#" className='hover:text-darkGreyishBlue'>Community</a>
        </div>
        {/* Button */}
        <a href="#" className="transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full align-baseline hover:bg-brightRedLight md:block">
          Get Started
        </a>

        {/* Hamburger Icon */}
        <button id="menu-btn" onClick={menuButtonClickHandler} className={`${menuIsOpen ? 'open' : ''} block hamburger md:hidden active:outline-none focus:outline-none`}>
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <div id="menu" className={`${menuIsOpen ? 'flex' : 'hidden'} animate-mobileMenu absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md p-6`}>
          <div className="relative flex flex-col items-center">
            <a href="#" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 py-1'>Pricing</a>
            <a href="#" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 py-1'>Product</a>
            <a href="#" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 py-1'>About Us</a>
            <a href="#" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 py-1'>Careers</a>
            <a href="#" className='transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300 py-1'>Community</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavComponent;
