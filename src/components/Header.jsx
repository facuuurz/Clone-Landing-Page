import Icono from '../img/Header/Icono.webp'


function Header(){
    return(
        <header class="h-32 m-auto absolute w-full">
            <div class="max-w-[1440px] flex justify-between items-center h-full pr-8 pl-3 m-auto">
                <div class="w-28 h-20">
                    <img src={Icono} alt="" class="w-full h-full object-fit"/>
                </div>
                <nav class="flex gap-8 font-semibold font-[Poppins]">
                    <a href="#">About Us</a>
                    <p>•</p>
                    <a href="#">Campaing</a>
                    <p>•</p>
                    <a href="#">Contact US</a>
                </nav>
            </div>
        </header>
        
    )
}

export default Header;