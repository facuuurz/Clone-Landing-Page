import Icono from '../img/Header/Icono.PNG'


function Header(){
    return(
        <header class=" h-30 m-auto absolute w-full">
            <div class="max-w-[1440px] flex justify-between items-center h-full px-5 m-auto">
                <div class="w-28 h-20">
                    <img src={Icono} alt="" class="w-full h-full object-fit"/>
                </div>
                <nav class="flex gap-3 font-semibold">
                    <a href="#">About Us</a>
                    <p>*</p>
                    <a href="#">Campaing</a>
                    <p>*</p>
                    <a href="#">Contact US</a>
                </nav>
            </div>
        </header>
        
    )
}

export default Header;