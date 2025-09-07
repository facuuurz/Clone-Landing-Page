
function Boton({texto, alto, ancho}){
    return(
        <button className={`${alto} ${ancho} bg-[#00715D] text-white cursor-pointer`}>
            {texto}
        </button>
    )
}

export default Boton;