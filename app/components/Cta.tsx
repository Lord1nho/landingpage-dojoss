"use client";

import { useState } from "react";
import { toast } from "react-toastify";

export function CTA() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "Quero assinar o Dojoss!",
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!res.ok) throw new Error();

            toast.success("Mensagem enviada com sucesso! Um dos nossos consultores entrará em contato");
            setForm({ name: "", email: "", message: "Quero assinar o Dojoss!" });
            setOpen(false);
        } catch {
            toast.error("Erro ao enviar mensagem 😢");
        } finally {
            setLoading(false);
        }
    }

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
                        <button
                            onClick={() => setOpen(true)}
                            className="inline-block rounded-lg bg-[#F5F5F5] px-6 py-3 font-semibold text-black transition hover:bg-white"
                        >
                            Entrar em Contato →
                        </button>
                    </div>
                </div>
            </section>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
                    <div className="relative w-full max-w-lg rounded-xl bg-[#B22222] p-8">
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 text-white text-xl"
                        >
                            ✕
                        </button>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <input
                                name="name"
                                placeholder="Nome completo"
                                required
                                value={form.name}
                                onChange={handleChange}
                                className="rounded-md bg-transparent border border-white/30 px-4 py-3 text-white"
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                value={form.email}
                                onChange={handleChange}
                                className="rounded-md bg-transparent border border-white/30 px-4 py-3 text-white"
                            />

                            <textarea
                                name="message"
                                rows={4}
                                required
                                value={form.message}
                                onChange={handleChange}
                                className="rounded-md bg-transparent border border-white/30 px-4 py-3 text-white"
                            />

                            <button
                                disabled={loading}
                                className="rounded-md bg-white px-6 py-3 font-semibold text-black disabled:opacity-60"
                            >
                                {loading ? "Enviando..." : "Enviar"}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
