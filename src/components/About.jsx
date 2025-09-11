import AboutImg from "../img/About/About.webp";

function About() {
  return (
    <section className="bg-[#F9F4E8] font-[Poppins] py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col px-4 pt-8">
        <div className="flex pt-8">
          
          {/* Círculo con imagen */}
          <div class="w-[30%] relative">
            <div class="w-[28rem] h-[29rem] overflow-hidden rounded-t-full absolute right-[-58%] top-[-20.9%]">
                <img src={AboutImg} alt="" class="w-full h-full object-cover object-top"/>
            </div>
          </div>
          

          {/* Tarjeta blanca */}
          <div class="w-[70%]">
            <div className="bg-white pl-78 flex
            flex-col h-96 justify-center w-[80%]">
                <div>
                    <h2 className="font-serif text-5xl md:text-6xl py-2 text-[#1D2A21]">
                        About Us
                    </h2>
                    <hr className="my-4 border-t-4 border-gray-400 w-20" />
                </div>
              
              <div class="w-[70%]">
                <p className="text-[#5f6a64] text-balance">
                The legal definition of a charitable organization (and of charity) varies
                between countries and in some instances regions of the country. The
                regulation, the tax treatment, and the way in which charity law affects
                charitable organizations also vary.
                </p>
              </div>

              <a
                href="#"
                className="mt-5 inline-block underline underline-offset-4 font-semibold"
              >
                Read More
              </a>
            </div>
           </div>
        </div>

        {/* Línea inferior */}
        <div class="h-20 flex items-end p-8 w-full mt-8">
            <hr class="border-t-2 border-gray-400 min-w-5 w-full max-w-[1440px]"/>
        </div>
      </div>
    </section>
  );
}

export default About;