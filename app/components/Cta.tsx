"use client";

import { useState } from "react";

export function CTA() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <section id="cta" className="bg-white py-20 text-center">
                <div className="mx-auto max-w-3xl px-4">
                    <h2 className="text-2xl font-bold text-black md:text-4xl">
                        Pronto para transformar sua gestão?
                    </h2>

                    <p className="mt-4 text-sm text-gray-600 md:text-base">
                        Comece agora mesmo e descubra como o DojOSS! pode simplificar sua rotina.
                    </p>

                    <div className="mt-8 flex justify-center">
                        <a
                            onClick={() => setOpen(true)}
                            className="inline-block rounded-lg bg-[#F5F5F5] px-6 py-3 font-semibold text-black transition hover:bg-white cursor-pointer"
                        >
                            Entrar em Contato →
                        </a>
                    </div>
                </div>
            </section>

            {/* MODAL */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className="w-full max-w-lg rounded-xl bg-[#B22222] p-8 relative">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 text-white text-xl hover:opacity-70"
                        >
                            ✕
                        </button>

                        <form className="flex flex-col gap-6 text-left">
                            <div>
                                <label className="text-white font-medium">
                                    Nome Completo <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="mt-2 w-full rounded-md border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-white"
                                />
                            </div>

                            <div>
                                <label className="text-white font-medium">
                                    Email Pessoal <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="mt-2 w-full rounded-md border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-white"
                                />
                            </div>

                            <div>
                                <label className="text-white font-medium">
                                    Algo a mais? <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    className="mt-2 w-full resize-none rounded-md border border-white/20 bg-transparent px-4 py-3 text-white outline-none focus:border-white"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 w-fit rounded-md bg-white px-6 py-3 font-semibold bg-[#B22222] hover:bg-gray-100 transition"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
