import Maps from '../assets/Image_maps.svg'

function Location() {
    return(
        
        <section id="location">
            <div className='md:flex-row md:justify-center flex flex-col gap-5 items-center mt-24 text-center md:mt-52 md:gap-40  '>
                <div className='flex flex-col items-center gap-4 md:items-start md:gap-8 '>
                <h2 className='md:w-[23.875rem] md:h-[7.625rem] md:text-[3.125rem] md:text-start font-[Montserrat] font-bold text-2xl text-white w-[12.188rem] '>Saiba onde nos encontrar!</h2>
                <p className='md:w-[33.438rem] md:h-[12.563rem] md:text-[2.25rem] md:text-start text-center font-[Sawarabi Gothic] text-[1rem] w-[10.75rem] h-[7.438rem] text-white  '>
                    Rua das Palmeiras, 123 — Centro 
                    São Paulo — SP
                    Aberto todos os dias, das 11h às 23h
                </p>
                <button className='md:block hidden w-[23.688rem] h-[4.875rem] bg-white rounded-[0.625rem]'>
                    <a className='font-[Sawarabi Gothic] text-[1.625rem] text-[#A62C2C]  ' href="">Ver no Google Maps!</a>
                </button>
                </div>
               
                <img className='md:w-[33.375rem] md:h-[33.375rem] w-[17.923rem] h-[17.875rem] ' src={Maps}/>
            </div>
        </section>
        
    )
}


export default Location