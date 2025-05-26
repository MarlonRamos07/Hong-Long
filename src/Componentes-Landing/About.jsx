import CheffImage from '../assets/Chef_Image.svg'
function About() {
    return(
        
        <section className='flex flex-col   md:flex-row md:text-left md:justify-center text-center md:gap-16 mt-8'>
        <div className='flex flex-col md:text-left md:items-start  justify-center items-center gap-6p'>
            <h2 className='w-[34.188rem] h-[3.625rem] md:w-[36.125rem] md:h-[3.438rem] text-white font-[Montserrat] font-bold text-[1.5rem] md:text-[2.813rem] text-center'>A alma por trás 
            do sabor</h2>
            <p className='md:w-[32.688rem] md:h-[26.5rem] md:text-4xl text-white font-[Sawarabi Gothic] md:mt-10 mb-8'>
                Na Hong Lóng, cada prato conta uma história. Inspirado pela tradição oriental e pela paixão por comida feita com carinho, nosso restaurante nasceu para oferecer muito mais que refeições: uma experiência.
            </p>
        </div>
        <img className="w-[21.875rem] h-[31.25rem] mx-auto md:w-[26.063rem] md:h-[52.125rem] md:m-0"  src={CheffImage}/>
        </section>
        
    )
}


export default About