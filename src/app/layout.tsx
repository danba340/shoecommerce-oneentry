import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { getMenus, getPages, getAllProducts, Product } from "./_oneentry";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shoecommerce",
  description: "Lace Up and Step Out, No Doubt",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menu = await getMenus("main");
  const pages = await getPages();
  const products: Product[] = await getAllProducts();
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col p-24">
          <Header pages={pages} products={products} menu={menu} />
          {children}
        </div>
      </body>
    </html >
  );
}
