export default function Pitch() {
    return (
        <section id="Pitch" className="bg-[#B22222] py-16 md:py-24 text-white">
            <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">

                {/* TÍTULO */}
                <h2 className="text-2xl font-bold md:text-4xl">
                    Confira o nosso <span className="font-extrabold">Pitch</span>
                </h2>

                {/* VIDEO */}
                <div className="mx-auto mt-12 w-full max-w-3xl overflow-hidden rounded-2xl shadow-lg aspect-video">
                    <iframe
                        className="h-full w-full"
                        src="https://www.youtube.com/embed/uD5Fl8_HWW4"
                        title="Pitch DojOOS"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>

                {/* LEGENDA */}
                <p className="mt-4 text-sm md:text-base text-white/90">
                    Sistema de Gestão Integrada de Academias
                </p>

            </div>
        </section>
    );
}
