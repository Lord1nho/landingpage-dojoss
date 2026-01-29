"use client";

import { useState } from "react";

const membros = [
    {
        nome: "Jean Silva",
        cargo: "Desenvolvedor Backend",
        iniciais: "JS",
        bio: "Trabalha alinhando negócio, usuário e tecnologia.",
    },
    {
        nome: "Isabela de Gondra",
        cargo: "Desenvolvedora Frontend",
        iniciais: "IG",
        bio: "Desenvolvedora Frontend com expertise em banco de dados. Graduanda em Ciência da Computação.",
    },
    {
        nome: "Guilherme Oliveira",
        cargo: "Desenvolvedor Frontend",
        iniciais: "PS",
        bio: "Designer UX/UI com foco em experiência do usuário. Curte apreciar bons livros nas horas vagas.",
    },
    {
        nome: "Gabriel Marques",
        cargo: "Desenvolvedor Frontend",
        iniciais: "GM",
        bio: "Foco em APIs, performance e arquitetura de sistemas.",
    },
    {
        nome: "Roniclay Rodrigues",
        cargo: "Desenvolvedor Backend",
        iniciais: "MA",
        bio: "Apaixonada por interfaces modernas e acessibilidade.",
    },
    {
        nome: "Luiz da Silva",
        cargo: "Fullstack Developer",
        iniciais: "LS",
        bio: "Desenvolvedor Frontend. Graduando em Sistemas de Informação. Apaixonado por artes marciais e tecnologia.",
    },
    {
        nome: "Adriel Santana",
        cargo: "Desenvolvedor Backend",
        iniciais: "AS",
        bio: "Trabalha alinhando negócio, usuário e tecnologia.",
    },
];

export default function Equipe() {
    const [index, setIndex] = useState(0);

    const itensPorTela = 3;
    const totalPaginas = Math.ceil(membros.length / itensPorTela);

    const prev = () =>
        setIndex((prev) => (prev === 0 ? totalPaginas - 1 : prev - 1));

    const next = () =>
        setIndex((prev) => (prev === totalPaginas - 1 ? 0 : prev + 1));

    const inicio = index * itensPorTela;
    const visiveis = membros.slice(inicio, inicio + itensPorTela);

    return (
        <section
            id="equipe"
            className="scroll-mt-24 bg-[#B22222] py-24 text-white"
        >
            <div className="mx-auto max-w-7xl px-4 md:px-6">

                {/* TÍTULO */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold md:text-4xl">Sobre nós</h2>
                    <p className="mt-3 text-sm text-white/80 md:text-base">
                        Conheça um pouco mais sobre o perfil dos nossos colaboradores
                    </p>
                </div>

                {/* CARROSSEL */}
                <div className="relative">

                    {/* SETA ESQUERDA */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 hover:bg-white/30"
                    >
                        ◀
                    </button>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {visiveis.map((membro, i) => (
                            <div
                                key={i}
                                className="rounded-2xl bg-white/10 p-8 backdrop-blur-sm"
                            >
                                <div className="mb-6 text-4xl text-white/60">“</div>

                                <p className="mb-8 text-sm leading-relaxed text-white/90">
                                    {membro.bio}
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-semibold">
                                        {membro.iniciais}
                                    </div>
                                    <div>
                                        <p className="font-semibold">{membro.nome}</p>
                                        <p className="text-xs text-white/70">{membro.cargo}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* SETA DIREITA */}
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-3 hover:bg-white/30"
                    >
                        ▶
                    </button>
                </div>
            </div>
        </section>
    );
}
