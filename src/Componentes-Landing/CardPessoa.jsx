const CardPessoa = ({image, title, description}) => {
    return(
        <>
         <div className="w-[15.063rem] h-[19.063rem] bg-white mx-auto rounded-[20px] gap-4 p-6  flex flex-col items-center text-center">
         <img className='w-[8rem] h-[10.625rem] mb-2' src={image} alt={title} />
         <h3 className="font-[Montserrat] font-extrabold text-[#E83F25] w-[11.875rem] h-[1.813] mb-5 text-center">{title}</h3>
         <p className="text-[0.813rem] text-[#A62C2C] font-[Sawarabi Gothic] w-[13.625rem] h-[5.938rem] text-center ">{description}</p>
         </div>
        </>
    )
}



export default CardPessoa