import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import CardPessoa from './CardPessoa'
import CardMan from '../assets/Card_Man.svg'
import CardWomen from '../assets/Card_Women.svg'
import CardMan2 from '../assets/Card_Man2.svg'
const cardData = [
  {
    image: CardMan,
    title: 'Antonio Nunes',
    description: '“O melhor jantar asiático que já tive! Atendimento impecável, pratos saborosos e tudo servido com muito capricho.”'
  },
  {
    image: CardWomen,
    title: 'Daenerys Silva',
    description: '“Fui ao Hong Long com minha família e cada detalhe nos encantou — do aroma ao atendimento.”'
    },
    {
    image: CardMan2,
    title: 'João Ninja',
    description: "Melhor yakissoba que eu já comi em toda a minha vida!"
    }
]

function Carrossel() {
  const carrossel = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (carrossel.current) {
      setWidth(carrossel.current.scrollWidth - carrossel.current.offsetWidth)
    }
  }, [])

  return (
    <div>
    <div className='hidden md:block w-full max-w-[39.625rem] m-auto items-center justify-center'>
      <motion.div ref={carrossel} className="carrossel overflow-hidden" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner flex flex-col md:flex-row"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {cardData.map((data, index) => (
            <motion.div
              className='p-10 md:min-w-[20.063rem] md:min-h-[26.125rem]'
              key={index}
            >
              <CardPessoa
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
    
    <div className='md:hidden w-full max-w-[45.625rem] m-auto items-center justify-center'>
      <motion.div ref={carrossel} className="carrossel overflow-hidden" whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner flex md:flex-row items-center justify-center"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {cardData.map((data, index) => (
            <motion.div
              className='p-10 min-w-[19.063rem] min-h-[15.125rem]'
              key={index}
            >
              <CardPessoa
                image={data.image}
                title={data.title}
                description={data.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
    </div>
  )
}

export default Carrossel
