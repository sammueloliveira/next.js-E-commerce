'use client'
import { ProvedorCarrinho } from "@/data/contexts/ContextoCarrinho";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ProvedorCarrinho>
            {children}
        </ProvedorCarrinho>
    );
}
