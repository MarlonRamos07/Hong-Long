import Moto from '../assets/moto_image.svg'

function DeliveryCall(){
    return(
        <section className='md:mt-44 mt-24 pb-10'>
            <div className='flex flex-col gap-[1.313rem] md:gap-14 items-center md:text-center'>
                <h2 className='md:w-[58.125rem] md:h-[9.75rem] md:text-[4rem] text-center w-[22.25rem] h-[3.625rem] text-white font-bold font-[Montserrat] text-2xl '>E... que tal saborear de onde quiser?</h2>
                <h6 className='md:w-[59.313rem] md:h-[3.438rem] md:text-[2.813rem] text-white font-semibold font-[Montserrat] w-[19.438rem] h-[1.188rem] '>Sim? Então a gente entrega até você!</h6>
                <img className='md:w-[19.438rem] md:h-[22.813rem]' src={Moto}/>
                <button className='md:w-[29.25rem] md:h-[8rem] cursor-pointer w-[18.563rem] h-[4.718rem] rounded-[1.875rem] bg-[#EB2E2E]'>
                    <a className= 'md:text-[2.25rem] text-white font-[Montserrat] font-bold w-[9.313rem] h-[1.125rem] text-[0.938rem]' href="">Acesse o Delivery!</a>
                </button>
            </div>
        </section>
    )
}



export default DeliveryCall