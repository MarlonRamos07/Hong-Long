import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import Logo from '../assets/White_Logo_Mobile (2).svg'
import '../styles.css'


function Header() {
  return (
    <header className="w-full ">
    <Navbar  rounded className="bg-[#A62C2C] dark:bg-[#A62C2C] flex justify-between items-center gap-x-4 ">
      <NavbarBrand href="#" className="">
        <img src={Logo} className="w-[9rem] md:w-[15.75rem] md:h-[15.75rem]"/>
      </NavbarBrand>
      <NavbarToggle id="menu" />
        
      <NavbarCollapse className="text-center font-['Sawarabi_Gothic'] text-2xl   ">
        <a href="#home" className="text-white dark:text-white mb-2.5 hover:text-[black] md:text-[1.438rem] ">
          Home
        </a>
        <a href="#pratos" className="text-white dark:text-white mb-2.5 hover:text-[black] md:text-[1.438rem]">
          Pratos
        </a>
        <a href="#about" className="text-white dark:text-white mb-2.5 hover:text-[black] md:text-[1.438rem]">
          Sobre nós
        </a>
        <a href="#location" className="text-white dark:text-white mb-2.5 hover:text-[black]  md:text-[1.438rem]">
          Localização
        </a>
        <a href="#delivery" className="text-white dark:text-white mb-2.5 hover:text-[black] md:hidden md:text-[1.438rem]">
          Baixe o Delivery!
        </a>
      </NavbarCollapse>
    </Navbar>
    </header>
  );
}

export default Header;