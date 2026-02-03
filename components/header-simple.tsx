import Link from "next/link";

export default function HeaderSimple() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="mx-auto max-w-7xl px-4">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <span className="text-xl font-bold text-black">Motto</span>
                        <span className="text-xl font-light text-gray-600 ml-1">Beyoğlu</span>
                    </Link>

                    <nav className="flex items-center gap-8">
                        <Link href="/urunler" className="text-sm font-medium text-black hover:text-gray-600">
                            Ürünler
                        </Link>
                        <Link href="/hakkimizda" className="text-sm font-medium text-black hover:text-gray-600">
                            Hakkımızda
                        </Link>
                        <Link href="/iletisim" className="text-sm font-medium text-black hover:text-gray-600">
                            İletişim
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}