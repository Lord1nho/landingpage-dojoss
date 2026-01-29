export default function Diferencial() {
    return (
        <section id="Diferencial" className="bg-white py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* TÍTULO */}
                <div className="mb-12 text-center md:mb-16">
                    <h2 className="text-2xl font-bold text-black md:text-4xl">
                        Nosso <span className="text-[#B22222]">Diferencial</span>
                    </h2>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {/* CARD 1 */}
                    <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6E4E1] text-xl">
                            📚
                        </div>
                        <h3 className="mb-2 font-semibold text-black">
                            Tudo em uma única plataforma
                        </h3>
                        <p className="text-sm text-gray-600">
                            Acesse e gerencie turmas, alunos e planos de aula com praticidade em um só lugar.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6E4E1] text-xl">
                            📈
                        </div>
                        <h3 className="mb-2 font-semibold text-black">
                            Gestão Financeira
                        </h3>
                        <p className="text-sm text-gray-600">
                            Controle simples e eficiente de mensalidades, garantindo mais organização e previsibilidade financeira.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6E4E1] text-xl">
                            🔒
                        </div>
                        <h3 className="mb-2 font-semibold text-black">
                            Perfis de acesso diversos
                        </h3>
                        <p className="text-sm text-gray-600">
                            Atribuição e personalização de perfis de acesso.
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className="rounded-xl bg-white p-6 text-center shadow-md transition hover:shadow-lg">
                        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#F6E4E1] text-xl">
                            📱
                        </div>
                        <h3 className="mb-2 font-semibold text-black">
                            Acesse de qualquer lugar
                        </h3>
                        <p className="text-sm text-gray-600">
                            Sistema responsivo para uso em desktop, tablet ou smartphone.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
