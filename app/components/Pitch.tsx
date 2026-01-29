export default function Pitch() {
    return (
        <section id="Pitch" className="bg-[#B22222] py-16 md:py-24 text-white">
            <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">

                {/* TÍTULO */}
                <h2 className="text-2xl font-bold md:text-4xl">
                    Confira o nosso <span className="font-extrabold">Pitch</span>
                </h2>

                {/* PLAYER / MOCK DE VÍDEO */}
                <div className="mx-auto mt-12 flex w-full max-w-3xl flex-col items-center justify-center rounded-2xl bg-[#C62828] px-6 py-20 shadow-lg">

                    {/* BOTÃO PLAY */}
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white">
                        <span className="ml-1 text-2xl text-[#B22222]">▶</span>
                    </div>

                    {/* LEGENDA */}
                    <p className="text-sm md:text-base text-white/90">
                        Sistema de Gestão Integrada de Academias
                    </p>
                </div>

            </div>
        </section>
    );
}
