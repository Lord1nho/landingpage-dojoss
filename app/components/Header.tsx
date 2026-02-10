"use client";

import { useState } from "react";

const navItems = [
    { label: "Objetivo", href: "#objetivo" },
    { label: "Diferenciais", href: "#Diferencial" },
    { label: "Funcionalidades", href: "#Funcionalidades" },
    { label: "Pitch", href: "#Pitch" },
    { label: "Equipe", href: "#Equipe" },
    { label: "Contato", href: "#cta" },
];

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-[#B22222]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

                {/* LOGO → VOLTA PRO INÍCIO */}
                <a href="#inicio" className="text-lg font-bold text-white">
                    DojOSS!
                </a>

                {/* NAV DESKTOP */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="text-sm font-medium text-white/70 transition-colors hover:text-white focus:outline-none"
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                {/* BOTÃO MOBILE */}
                <button
                    onClick={() => setOpen(!open)}
                    aria-label="Abrir menu"
                    className="md:hidden text-white focus:outline-none"
                >
                    &#9776;
                </button>
            </div>

            {/* MENU MOBILE */}
            {open && (
                <div className="md:hidden bg-white px-6 pb-6">
                    <nav className="flex flex-col gap-3 pt-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-red-50 hover:text-red-600"
                            >
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
