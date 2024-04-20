import { Navbar } from "./Navbar";
import { IMenusPages } from "oneentry/dist/menus/menusInterfaces";
import { HamburgerMenu } from "./HamburgerMenu";
import { Cart } from "./Cart";
import { Suspense } from "react";
import { IPagesEntity } from "oneentry/dist/pages/pagesInterfaces";
import { Product } from "../_oneentry";

export default function Header({ pages, products, menu }: { pages: IPagesEntity[], products: Product[], menu: Array<IMenusPages> }) {
	return (
		<div className="relative w-full flex items-start justify-center">
			<Suspense fallback={null} >
				<HamburgerMenu menu={menu} />
				<Navbar pages={pages} products={products} menu={menu} className="top-3" />
				<Cart />
			</Suspense>
		</div>
	);
}