
function Boton({texto, alto, ancho}){
    return(
        <button className={`${alto} ${ancho} bg-[#00715D] text-white cursor-pointer font-[Poppins]`}>
            {texto}
        </button>
    )
}

export default Boton;