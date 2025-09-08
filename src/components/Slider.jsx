import Logo1 from '../img/Slider/logo1.PNG'
import Logo2 from '../img/Slider/logo2.PNG'
import Logo3 from '../img/Slider/logo3.PNG'
import Logo4 from '../img/Slider/logo4.PNG' // si existe, si no, borrá este bloque

function Slider(){
    return(
        <section class="bg-[#00715D] w-full font-[Poppins]">
            <div class="flex items-center justify-around text-white px-10 w-full h-58 m-auto gap-4">{/* CONTENIDO*/}
                
                <div class="flex items-center">
                    <div class="w-28">
                        <img src={Logo1} alt="#" class="object-fit h-full w-full"/>
                    </div>
            
                    <div class="flex flex-col items-center w-48">
                        <h3 class="font-serif font-semibold self-start text-4xl">985+</h3>
                        <p class="text-xl font-extralight">Donation Received</p>
                    </div>
                </div>

                <div class="flex items-center">
                    <div class="w-28">
                        <img src={Logo2} alt="#" class="object-fit h-full w-full"/>
                    </div>
                    
                    <div class="flex flex-col items-center w-48">
                        <h3 class="font-serif font-semibold self-start text-4xl">$10 M</h3>
                        <p class="text-xl font-extralight">Moeny Donated</p>
                    </div>
                </div>

                <div class="flex items-center ">
                    <div class="w-28">
                        <img src={Logo3} alt="#" class="object-fit h-full w-full"/>
                    </div>
            
                <div class="flex flex-col items-center w-48">
                    <h3 class="font-serif font-semibold self-start text-4xl">12+</h3>
                    <p class="text-xl font-extralight">Active Campagins</p>
                </div>
                </div>

                <div class="flex items-center ">
                    <div class="w-28">
                        <img src={Logo4} alt="#" class="object-fit h-full w-full"/>
                    </div>
                    
                <div class="flex flex-col items-center w-48">
                    <h3 class="font-serif font-semibold self-start text-4xl">$60 M</h3>
                    <p class="text-xl font-extralight">Charity in last Year</p>
                </div>
                </div>

            </div>
        </section>
    )
}

export default Slider;