export default function Objetivo() {
    return (
        <section
            id="objetivo"
            className="bg-[#FAF7F5] py-14 md:py-20"
        >
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 md:grid-cols-2 md:gap-12 md:px-6">

                {/* CARD ILUSTRADO */}
                <div className="mx-auto w-full max-w-sm md:max-w-md rounded-2xl bg-[#F6E4E1] p-8 md:p-10 shadow-sm">

                    {/* ÍCONE CENTRAL */}
                    <div className="mx-auto mb-8 flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-[#F2B9B3]">
                        <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-4 border-[#B22222]">
                            <div className="h-2.5 w-2.5 rounded-full bg-[#B22222]" />
                        </div>
                    </div>

                    {/* ÍCONES INFERIORES */}
                    <div className="flex justify-between gap-3 md:gap-4">
                        <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white shadow">
                            📘
                        </div>
                        <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white shadow">
                            👥
                        </div>
                        <div className="flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-xl bg-white shadow">
                            📊
                        </div>
                    </div>
                </div>

                {/* TEXTO */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-black md:text-4xl">
                        Nosso <span className="text-[#B22222]">Objetivo</span>
                    </h2>

                    <p className="mt-5 text-sm leading-relaxed text-gray-700 md:mt-6 md:text-base">
                        Plataforma digital para gestão completa de academias de artes marciais,
                        utilizando <span className="font-semibold text-[#B22222]">controle de turmas</span> e{" "}
                        <span className="font-semibold text-[#B22222]">gestão financeira integrada</span>{" "}
                        para gerar relatórios completos que facilitam o acompanhamento do
                        desempenho da sua academia.
                    </p>

                    <p className="mt-3 text-sm leading-relaxed text-gray-700 md:mt-4 md:text-base">
                        O <strong>DojOSS!</strong> nasceu para simplificar toda essa gestão,
                        permitindo que professores e gestores foquem no que realmente
                        importa: ensinar e desenvolver seus alunos.
                    </p>
                </div>

            </div>
        </section>
    );
}
