const cardPrato = ({image, title, description}) => {
    return (


      <div className="w-[15.063rem] h-[19.063rem] bg-white mx-auto rounded-[20px] p-4 gap-3 flex flex-col items-center text-center">
      <img className='w-[8.688rem] h-[8.688rem] mb-2' src={image} alt={title} />
      <h3 className="font-[Montserrat] font-bold text-black w-[10.938rem] h-[2.938rem] text-center">{title}</h3>
      <p className="text-[0.938rem] font-[Sawarabi Gothic] w-[11.688rem] h-[4.125rem] ">{description}</p>
      </div>


    )
}

export default cardPrato