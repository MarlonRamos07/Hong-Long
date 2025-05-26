import WhiteLogo from '../assets/White_Logo.svg'
import BurguerMenu from '../assets/burguer__menu.svg'


function Header(){
    return(
      
        <header className=' flex items-center justify-between md:px-44  px-9'>
            <img className='h-[8.625rem] md:h-[15.75rem]'src={WhiteLogo} alt="Logo Branco"/>
            <nav>
                <ul className='hidden md:flex gap-10 font-["Sawarabi Gothic"] text-white text-[1.438rem]' >
                  <li className='hover:text-black'><a href="">Home</a></li>
                  <li className='hover:text-black'><a href="">Pratos</a></li>
                  <li className='hover:text-black'><a href="">Sobre nós</a></li>
                  <li className='hover:text-black'><a href="">Contato</a></li>
                </ul>                
            </nav>
            <button className='md:hidden'>
                <img className='md:hidden' src={BurguerMenu} alt=""/>
            </button>
        </header>
    )
}

export default Header