import leftArrow from '../assets/left_arrow.svg'
import rightArrow from '../assets/Right_Arrow.svg'
import CardWomen from '../assets/Card_Women.svg'
import CardMan from '../assets/Card_Man.svg'
import CardPessoa from './CardPessoa'

function Testimonials () {
    return(
        <section className='flex flex-col gap-10 mt-40'>
            <h2 className='md:w-[58.125rem] md:h-[3.438rem] md:text-[2.813rem]    font-[Montserrat] text-white w-[22.063rem] h-[3.625rem] text-2xl font-bold text-center mx-auto'>Descubra o que nossos clientes dizem</h2>
            <h4 className='md:w-[58.125rem] md:h-[2.375rem] md:text-[1.625rem] font-[Sawarabi Gothic] text-center text-[1rem] w-[21.25rem] mx-auto h=[3rem] text-white '>Descubra o que torna o Hong Long o favorito de quem ama sabor e tradição!</h4>
            <div className='hidden md:flex md:flex-row md:mx-auto md:justify-center md:mt-28 gap-8 flex-col'>
                <img className='hidden md:block cursor-pointer'src={leftArrow}/>
                <CardPessoa image={CardMan} title={'Antonio Nunes'} description={'“O melhor jantar asiático que já tive! Atendimento impecável, pratos saborosos e tudo servido com muito capricho.”'}/>
                <CardPessoa image={CardWomen} title={'Daenerys Silva'} description={'“Fui ao Hong Long com minha família e cada detalhe nos encantou — do aroma ao atendimento.”'}/>
                <img className='hidden md:block cursor-pointer' src={rightArrow}/>
            </div>
            <div className='flex flex-col gap-8 md:hidden'>
            <CardPessoa image={CardMan} title='Antonio Nunes' description='“O melhor jantar asiático que já tive! Atendimento impecável, pratos saborosos e tudo servido com muito capricho.”' />
            <CardPessoa image={CardWomen} title='Daenerys Silva' description='“Fui ao Hong Long com minha família e cada detalhe nos encantou — do aroma ao atendimento.”' />
            </div>
        </section>
    )
}


export default Testimonials