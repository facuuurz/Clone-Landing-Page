import PointImg from "../img/Point/Point.webp";
import Point2 from "../img/Point/Point2.webp";
import Point3 from "../img/Point/Point3.webp"


function Points (){
    return(
        <section class="bg-[#F9F4E8]">{/*color*/}
            <div class="max-w-[1440px]  m-auto py-26">{/*Margen*/}
                
                <div class="flex justify-center">
                    <div class="relative w-[30rem] h-[26rem]">
                        <div class="absolute top-0 -right-20 bg-[#FDD65B] bg-no-repeat bg-center bg-cover w-[30rem] h-[26rem] rounded-b-full" style={{ backgroundImage: `url(${PointImg})` }}>{/*bg color e image */}
                            <div class="bg-[#00715D] rounded-b-full w-[25%] h-26 flex items-center justify-center">

                                <p class="font-serif inline-block text-white text-center">⭐5.0</p>
                            </div>
                        </div>
                    </div>
                    

                    <div class="w-[46%] bg-white h-[22rem] font-[Poppins] flex flex-col items-start justify-center gap-10 pl-36 mr-25">
                        <div class="w-96 text-balance">
                            <p>"We're very happy that the challenge went well, and we're grateful that we have a partner in Charity Challenge whom we could trust to take the best possible care of our supporters."</p>
                        </div>
                        <div class="flex flex-col gap-1">
                            <p class="font-serif font-semibold text-2xl">Mustafa Kamal</p>
                            <p class="text-sm">Ceo, Toogle</p>
                        </div>
                    </div>

                </div>
            </div>
            <div class="bg-green-500 flex items-center justify-center h-0 relative">
                <div class="flex gap-3 absolute -top-32">
                    <div class="rounded-full ml-8 w-14 h-14 flex items-center justify-center cursor-pointer">
                        <img src={Point2} alt="" class="w-7 h-7"/>
                    </div>
                    <div class="rounded-full bg-[#FAF0C9] w-14 h-14 flex items-center justify-center cursor-pointer">
                        <img src={Point3} alt="" class="w-7 h-7"/>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Points;