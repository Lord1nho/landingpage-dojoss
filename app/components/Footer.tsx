export function Footer() {
    return (
        <footer className="bg-[#B22222]">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-6 text-white md:flex-row md:px-6">

                {/* LOGO */}
                <div className="flex items-center gap-2 font-semibold">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#E02525]">
                        D
                    </div>
                    <span>DojOSS!</span>
                </div>

                {/* COPYRIGHT */}
                <p className="text-sm text-white/90">
                    © 2026 DojOSS!. Todos os direitos reservados.
                </p>

                {/* ÍCONES */}
                <div className="flex gap-4 text-white/90">
                    <span className="cursor-pointer hover:text-white">🏆</span>
                    <span className="cursor-pointer hover:text-white">👤</span>
                </div>
            </div>
        </footer>
    );
}
