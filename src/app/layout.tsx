
'use client'

import { Inter } from "next/font/google";
import "../styles/index.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { menuDash } from "@/data";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="beer-systems">
          <div className="container">
          <div className="container__nav">
            <Image src={'/assets/logo.svg'} alt="Beer System" width={200} height={200} />
            <nav>
              <ul>
                {menuDash.map((item) => (
                  <li key={item.name} className={`container__nav__item ${pathname === item.url ? 'active' : ''}`}>
                    <Link href={item.url}>{item.name}</Link>
                  </li>
                ))}
             
              </ul> 
            </nav>
          </div>
          <div className="container__content">
          {children}
          </div>
          </div>
        </main>
        </body>
    </html>
  );
}
