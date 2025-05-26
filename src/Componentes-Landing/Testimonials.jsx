import Carrossel from "./Carrossel"

function Testimonials () {
    return(
        <section className='flex flex-col gap-10 mt-40'>
            <h2 className='md:w-[58.125rem] md:h-[3.438rem] md:text-[2.813rem]    font-[Montserrat] text-white w-[22.063rem] h-[3.625rem] text-2xl font-bold text-center mx-auto'>Descubra o que nossos clientes dizem</h2>
            <h4 className='md:w-[58.125rem] md:h-[2.375rem] md:text-[1.625rem] font-[Sawarabi Gothic] text-center text-[1rem] w-[21.25rem] mx-auto h=[3rem] text-white '>Descubra o que torna o Hong Long o favorito de quem ama sabor e tradição!</h4>
           <Carrossel/>
        </section>
    )
}


export default Testimonials