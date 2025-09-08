import Support1 from "../img/Support/Support1.jpg"
import Support2 from "../img/Support/Support2.jpg"
import Support3 from "../img/Support/Support3.jpg"


function Support(){
    return(
        <section class="bg-[#F9F4E8] font-[Poppins]">
            <div class="max-w-[1440px] flex flex-col px-4">{/* margen*/}
                <div class="flex">
                    <div class="">
                        <div class="flex flex-col gap-6 py-8">
                            <h2 class="font-serif text-6xl inline-block w-98 py-6">Support Your Community</h2>
                            <hr class="border-t-4 border-gray-400 w-18"/>
                            <p class="inline-block w-[84%]">The legal definition of a charitable organization (and of charity) varies between countries and in charity law affects charitable organizations also vary</p>
                        </div>

                        <div class="flex justify-start items-center gap-8">
                            <div>
                                <div class="w-96 h-80">
                                <img src={Support1} alt="" class="w-full h-full object-cover"/>
                                </div>

                                <div class="flex items-center px-6 h-20 bg-white">
                                    <p class="font-serif font-semibold">Covid - 19</p>
                                </div>
                            </div>

                            <div>
                                <div class="w-96 h-80">
                                <img src={Support2} alt="" class="w-full h-full object-cover"/>
                                </div>

                                <div class="flex items-center px-6 h-20 bg-white">
                                    <p class="font-serif font-semibold">Food Bank</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <div class="mt-8">
                            <div class="w-98 h-[32rem]">
                                <img src={Support3} alt="" class="w-full h-full object-cover"/>
                            </div>
                            <div class="bg-white flex items-center h-20 px-6">
                                <p class="font-serif font-semibold">Safe Water</p>
                            </div>
                        </div>
                        <div class="h-23 flex items-center justify-center">
                            <a href="#" class="underline underline-offset-4 font-semibold">view All Campaign</a>
                        </div>
                    </div>
                </div>
                
                <div class="h-20 flex items-end p-8 w-full mt-8">
                    <hr class="border-t-2 border-gray-400 min-w-5 w-full max-w-[1440px]"/>
                </div>

            </div>
        </section>
    )
}


export default Support;