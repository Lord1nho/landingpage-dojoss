import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-BR">
        <body className={inter.className}>
        {children}

        <ToastContainer
            position="top-right"
            autoClose={3000}
            pauseOnHover
            closeOnClick
            draggable
            theme="light"
        />
        </body>
        </html>
    );
}