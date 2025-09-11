// Team.jsx
// Sección Team en un solo componente, siguiendo el mismo estilo de About
import Team1 from "../img/Team/Team1.webp"
import Team2 from "../img/Team/Team2.webp"
import Team3 from "../img/Team/Team3.webp"
import Team4 from "../img/Team/Team4.webp"

function Team() {
  return (
    <section className="bg-[#F9F4E8] font-[Poppins]">
      <div className="max-w-[1440px] flex flex-col gap-16 m-auto">
        {/* Encabezado */}
        <div className="flex flex-col items-center justify-start py-8  gap-5">
          <h2 className="font-serif text-5xl md:text-6xl text-[#1D2A21]">
            Our Team
          </h2>
          <hr className="border-t-4 border-gray-400 w-20 mx-auto" />
        </div>

        <div class="flex items-center justify-center gap-16">

            <div class="flex flex-col gap-5">
                <div class="w-64 h-64 rounded-full overflow-hidden bg-[#FDD65B]">
                    <img src={Team4} alt="" class="w-full h-full object-cover"/>
                </div>

                <div class="flex flex-col items-center justify-center">
                    <p class="font-serif font-semibold text-3xl">Lily Gomez</p>
                    <p>Founder</p>
                </div>
            </div>
            
            <div class="flex flex-col gap-5">
                <div class="w-64 h-64 rounded-full overflow-hidden bg-[#00715D]">
                    <img src={Team2} alt="" class="object-cover w-full h-full"/>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="font-serif font-semibold text-3xl">Dm Lincoln</p>
                    <p>Co-Founder</p>
                </div>
            </div>
            
            <div class="flex flex-col gap-5">
                <div class="w-64 h-64 rounded-full overflow-hidden bg-[#FDD65B]">
                    <img src={Team3} alt="" />
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="font-serif font-semibold text-3xl">Serena Mei</p>
                    <p>Manager</p>
                </div>
            </div>
            
            <div class="flex flex-col gap-5">
                <div class="w-64 h-64 rounded-full overflow-hidden bg-[#00715D]">
                    <img src={Team1} alt="" class="w-full h-full object-cover"/>
                </div>
                <div class="flex flex-col items-center justify-center">
                    <p class="font-serif font-semibold text-3xl">Abdel Latif</p>
                    <p>Superviser</p>
                </div>
            </div>
            
        </div>

        {/* Línea inferior */}
        <div className="h-20 flex items-end p-8 w-full mt-8">
          <hr className="border-t-2 border-gray-400 min-w-5 w-full max-w-[1440px]" />
        </div>
      </div>
    </section>
  );
}

export default Team;
