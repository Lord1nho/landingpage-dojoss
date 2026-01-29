export function CTA() {
    return (
        <section id='#cta' className="bg-white py-20 text-center">
            <div className="mx-auto max-w-3xl px-4">
                <h2 className="text-2xl font-bold text-black md:text-4xl">
                    Pronto para transformar sua gestão?
                </h2>

                <p className="mt-4 text-sm text-gray-600 md:text-base">
                    Comece agora mesmo e descubra como o DojOSS! pode simplificar sua rotina.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <button className="flex items-center gap-2 rounded-lg bg-[#E02525] px-6 py-3 font-semibold text-white hover:bg-[#c61f1f]">
                        Acessar Sistema →
                    </button>

                    <button className="rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-100">
                        Entrar em Contato
                    </button>
                </div>
            </div>
        </section>
    );
}
