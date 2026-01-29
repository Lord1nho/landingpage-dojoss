export default function Funcionalidades() {
    return (
        <section id="Funcionalidades" className="bg-[#FAF7F5] py-16 md:py-24">
            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* ================= TÍTULO ================= */}
                <div className="mb-16 text-center">
                    <h2 className="text-2xl font-bold text-black md:text-4xl">
                        O que o <span className="text-[#B22222]">DojOSS!</span> tem a oferecer
                    </h2>
                    <p className="mt-4 text-sm text-gray-700 md:text-base">
                        Solução completa para aprimorar a gestão da sua academia.
                    </p>
                </div>

                {/* ================= BLOCO 1 (mockup + lista) ================= */}
                <div className="mb-24 grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                    {/* MOCKUP */}
                    <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-4 shadow-lg">
                        <div className="mb-3 flex items-center gap-2">
                            <span className="h-3 w-3 rounded-full bg-red-500" />
                            <span className="h-3 w-3 rounded-full bg-yellow-400" />
                            <span className="h-3 w-3 rounded-full bg-green-500" />
                        </div>

                        <div className="mb-4 h-6 w-1/2 rounded bg-[#E8C1BC]" />

                        <div className="grid grid-cols-3 gap-3">
                            <div className="h-16 rounded bg-[#EDEDED]" />
                            <div className="h-16 rounded bg-[#EDEDED]" />
                            <div className="h-16 rounded bg-[#EDEDED]" />
                        </div>

                        <div className="mt-4 h-28 rounded bg-[#EDEDED]" />
                    </div>

                    {/* LISTA */}
                    <div className="text-center md:text-left">
                        <ul className="space-y-4">
                            {[
                                "Gerenciamento de turmas eficiente e integrado",
                                "Controle financeiro com alertas de inadimplência",
                                "Planos de aula personalizados por modalidade",
                                "Múltiplos perfis de acesso (gestor, professor, aluno)",
                                "Relatórios visuais para tomada de decisões",
                                "Interface intuitiva sem necessidade de treinamento",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm text-gray-700 md:text-base">
                                    <span className="mt-1 text-[#B22222]">✔</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* ================= BLOCO 2 (detalhamento) ================= */}
                <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

                    {/* TEXTO */}
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold text-black md:text-3xl">
                            <span className="text-[#B22222]">Gerenciamento</span> de turmas de <br />
                            forma completa e organizada
                        </h3>

                        <p className="mt-6 text-sm leading-relaxed text-gray-700 md:text-base">
                            O Gerenciamento de Turmas permite adicionar e editar informações
                            de alunos de maneira simples e rápida, com controle total sobre
                            horários, modalidades e planos de aula.
                        </p>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {[
                            {
                                title: "Gestão de Turmas",
                                desc: "Organize turmas, horários e modalidades de forma intuitiva.",
                                icon: "📘",
                            },
                            {
                                title: "Planos de Aula",
                                desc: "Crie e gerencie planos personalizados para cada turma.",
                                icon: "📅",
                            },
                            {
                                title: "Controle Financeiro",
                                desc: "Acompanhe pagamentos e histórico financeiro dos alunos.",
                                icon: "💳",
                            },
                            {
                                title: "Gestão de Alunos",
                                desc: "Cadastre alunos e monitore frequência e inadimplência.",
                                icon: "👥",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                            >
                                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#F6E4E1]">
                                    {card.icon}
                                </div>
                                <h4 className="font-semibold text-black">{card.title}</h4>
                                <p className="mt-2 text-sm text-gray-600">{card.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
