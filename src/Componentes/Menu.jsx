import emojiNoodles from '../assets/emoji_noodles.svg'
import emojiDragon from '../assets/emoji_dragon.png'
import Card from '../Componentes/CardPrato'
import prato1 from '../assets/prato1_card.png'
import prato2 from '../assets/prato2_card.png'
import prato3 from '../assets/prato3_card.png'
import prato4 from '../assets/prato4_card.png'
import prato5 from '../assets/prato5_card.png'
import prato6 from '../assets/prato6_card.png'

function Menu (){
    return (


       <section className='flex flex-col gap-10'>
        <div className='text-center mt-8 flex flex-col gap-4 px-4'>
            <h2 className='mx-auto text-white font-[Montserrat] text-[1.5rem] font-bold w-[20.188rem] h-[1.813rem] md:text-[2.813rem] md:w-[37.938rem] md:h-[3.438rem]  '>Sabores que conquistam</h2>
            <h6 className='md:text-[1.625rem] md:w-[53.563rem] md:-[2.375rem] text-center mx-auto font-[Sawarabi Gothic] text-white w-[11.938] h-[2.625rem] text-[1.2rem]'>Explore nossos pratos mais pedidos e que encantam nossos clientes!</h6>
        </div>
            <div className='md:mx-auto mt-12'> 
                <div className=' flex items-center gap-2 justify-center md:items-center md:justify-start'>
                    <img src={emojiNoodles}/>
                    <h4 className='font-[Montserrat] font-extrabold text-white text-[1.75rem]'>Yakissobas</h4>
                </div>
                <div className='md:flex-row md:gap-8 flex flex-col gap-4 mt-6'>
                <Card image={prato1} title={"Yakissoba de Camarão"} description={"Camarões salteados com legumes frescos e molho oriental."}/>
                <Card image={prato2} title={"Yakissoba Vegetariano"} description={"Legumes temperados com molho 100% vegetal."}/>
                <Card  image={prato3} title={"Yakissoba de Porco"} description={"Barriga de porco caramelizada com molho picante"}/>
                </div>
            </div>
            <div className='md:mx-auto mt-12'> 
                <div className=' flex items-center gap-2 justify-center md:items-center md:justify-start'>
                    <img src={emojiDragon}/>
                    <h4 className='font-[Montserrat] font-extrabold text-white text-[1.75rem]'>Entradas</h4>
                </div>
                <div className='md:flex-row md:gap-8 flex flex-col gap-4 mt-6'>
                <Card image={prato4} title={"Guioza de Porco"} description={"Pastéis japoneses recheados, crocantes e suculentos por dentro."}/>
                <Card image={prato5} title={"Rolinho Primavera"} description={"Clássico recheado com legumes, servido com molho agridoce."}/>
                <Card  image={prato6} title={"Shimeji na Manteiga"} description={"Cogumelos salteados com manteiga e cebolinha."}/>
                </div>
            </div>

       </section>


)
}



export default Menu