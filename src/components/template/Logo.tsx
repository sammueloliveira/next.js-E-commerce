import Link from "next/link";
import { IconBrandAmazon } from '@tabler/icons-react';

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex flex-col items-center mt-1">
                <div className="text-lg leading-3 text-white">A Z</div>  {/* Texto menor */}
                <IconBrandAmazon size={24} stroke={1} className="text-white mt-1" />  {/* Ícone menor */}
            </div>
        </Link>
    );
}
