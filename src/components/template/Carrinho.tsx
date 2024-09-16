import useCarrinho from "@/data/hooks/useCarrinho";
import { IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";

export default function Carrinho() {
    const { qtdeDeItens } = useCarrinho()
    return (
        <Link href="/carrinho" className="text-white">
            <div className=" flex items-center relative">
                <IconShoppingCart size={32} stroke={1} />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full
                flex justify-center items-center text-xs ">{qtdeDeItens}</div>
            </div>
        </Link>
    );
}
