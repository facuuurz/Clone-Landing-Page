import Boton from './Boton'
import HeroImage from '../img/Hero/imagen-Hero.jpg'
import About from '../img/Hero/About.PNG'


function Hero () {
    return (
        <div class="flex w-full font-[Poppins]">{/* ancho totoal */}
            <div class="bg-[#FDF6EB] w-[50%] flex justify-end "> {/*Color de fondo */}
                <div class="w-[720px] flex flex-col h-dvh px-3 justify-end gap-12">{/*Contenedor de los datos */}
                    {/* <div class="flex flex-col h-dvh justify-center px-3 gap-5">datos */}
                        <h1 class="font-serif font-black text-6xl">Charity Is An <br />
                            Act Of A Soft  <br />
                            Heart.
                        </h1>

                        <div class="flex flex-col gap-5">
                            <div class="h-28 w-[60%] text-balance">
                                <p class="text-gray-700">We've spent the last 5 years helping over 25,00000 teams just like yourself create and sustain successful online support.</p>
                            </div>
                            <div class="flex gap-5 items-center gap-14">
                                <Boton texto="Donate Now" alto="h-18" ancho="w-44"></Boton>

                                <div class="h-40 w-60">
                                    <img src={About} alt="#" class="w-full h-full object-cover"/>
                                </div>
                            </div>
                        </div>
                    
                        <div class="flex items-center justify-around font-semibold pb-8">
                            <a href="#">Youtube</a>
                            <p>•</p>
                            <a href="#">Facebook</a>
                            <p>•</p>
                            <a href="#">Instragram</a>
                        </div>
                    {/* </div> */}
                </div>
            </div>

            <div class="bg-[#FDD65B] w-[50%] flex justify-start">{/*Color de Fondo */}
                <div class="w-[720px] h-dvh flex items-end">{/*Contenedor de los datos*/}
                    {/*Datos */}
                    <div className="h-[85%] w-[80%] bg-slate-600">
                        <img src={HeroImage} alt="Hero" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
                
        </div>
    ) 
}

export default Hero;