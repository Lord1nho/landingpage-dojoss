import Header from "@/app/components/Header";
import Equipe from "@/app/components/Equipe";
import Funcionalidades from "@/app/components/Funcionalidades";
import Objetivo from "@/app/components/Objetivo";
import Pitch from "@/app/components/Pitch";
import Diferenciais from "@/app/components/Diferenciais";
import {CTA} from "@/app/components/Cta";
import {Footer} from "@/app/components/Footer";

const navItems = [
    { label: "CTA", href: "#cta" },
];

export default function Home() {
  return (
      <>
        <Header></Header>
          <section
              className="bg-[#B22222] text-white"
          >
              <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

                  {/* TÍTULO */}
                  <h1 className="text-4xl font-bold leading-tight md:text-5xl">
                      DojOSS!: Elevando a Gestão <br />
                      de Academias a Novos Patamares
                  </h1>

                  {/* SUBTÍTULO */}
                  <p className="mt-6 max-w-2xl text-base text-white/90 md:text-lg">
                      Potencializando habilidades e otimizando resultados de forma excepcional.
                  </p>

                  {/* BOTÕES */}
                  <div className="mt-8 flex gap-4">
                      <a
                          href={navItems[0].href}
                          className="inline-block rounded-lg bg-[#F5F5F5] px-6 py-3 font-semibold text-black transition hover:bg-white"
                      >
                          Começar Agora →
                      </a>

                      <button className="rounded-lg border border-white/70 px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#B22222]">
                          Conheça-nos
                      </button>
                  </div>

              </div>
          </section>
        <Objetivo></Objetivo>
        <Diferenciais></Diferenciais>
        <Funcionalidades></Funcionalidades>
        <Pitch></Pitch>
        <Equipe></Equipe>
         <CTA></CTA>
          <Footer></Footer>
      </>
  );
}
