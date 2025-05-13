import Yakissoba from '../assets/Hero_Image 1.svg'
function Hero () {
    return(
        <>
          <section className='flex flex-col-reverse md:flex-row items-center justify-center gap-6 md:gap-24 px-4 py-8 md:px-48'>
            <div className='flex flex-col items-center md:items-start text-center md:text-left gap-4'>
                <h1 className='font-[Montserrat] font-bold text-white text-[1.75rem] md:text-[2.813rem] md:w-[32.563rem]'>
                    Sabores Autênticos. <br className="hidden md:inline" />
                    Tradição no seu prato.
                </h1>

                <h6 className='text-white font-[Sawarabi Gothic] text-[1.125rem] md:text-[1.625rem] md:w-[34.313rem]'>
                    Onde o dragão cozinha e a comida ganha vida!
                </h6>

                <button className='w-[16.25rem] h-[4.25rem] bg-white rounded-[0.625rem] flex items-center justify-center cursor-pointer mt-2'>
                    <a className='text-[1.563rem] font-[Sawarabi Gothic] text-[#DF2828]' href="">
                        Explorar Pratos
                    </a>
                </button>
            </div>
            <img 
                src={Yakissoba} 
                alt="Prato principal" 
                className="w-60 md:w-[34.188rem]" 
            />
        </section>
        </>
    )
}


export default Hero