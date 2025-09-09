

function Footer(){
    return(
        <footer class="bg-[#F9F4E8] font-[Poppins]">
            <div class="max-w-[1440px] flex flex-col m-auto">{/*Marenes*/}
                
                <div class="grid grid-cols-4 justify-items-center content-center px-8 pt-16">
                    
                    <div>
                        <h3 class="font-semibold mb-2 font-serif">Newsletter</h3>
                        <p class="text-sm mb-4 pt-3">Subscribe to our newsletter to get more informations</p>
                    <div class="flex">
                        <input 
                            type="email" 
                            placeholder="Email" 
                            class="px-3 py-2 w-full placeholder-black focus:outline-none focus:border-[#00715D] bg-white"
                        />
                        <button class="bg-[#00715D] text-white px-4 py-4 text-sm cursor-pointer">Subscribe</button>
                    </div>
                    </div>


                    <div>
                    <h3 class="font-semibold mb-2 font-serif">Navigation</h3>
                    <ul class="space-y-1 text-sm pt-3 flex flex-col gap-2">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Campaign</a></li>
                        <li><a href="#">Team</a></li>
                    </ul>
                    </div>


                    <div>
                    <h3 class="font-semibold mb-2 font-serif">About Us</h3>
                    <ul class="space-y-1 text-sm pt-3 flex flex-col gap-2">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Address</a></li>
                    </ul>
                    </div>

                    
                    <div>
                    <h3 class="font-serif font-semibold mb-2">Help</h3>
                    <ul class="space-y-1 text-sm flex flex-col gap-2 pt-3">
                        <li><a href="#">Donor Guide</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">We Are Hiring</a></li>
                        <li><a href="#">Returns</a></li>
                    </ul>
                    </div>
                </div>
                
                <div className="h-20 flex items-end p-8 w-full mt-8">
                    <hr className="border-t-2 border-gray-400 min-w-5 w-full max-w-[1440px]" />
                </div>

                <div class="px-8 flex items-center justify-between pb-8">
                    <p>Designed By Tanim Khan</p>
                    <a href="WWW.Dribbble.Com/Tanim_ui">WWW.Dribbble.Com/Tanim_ui</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;