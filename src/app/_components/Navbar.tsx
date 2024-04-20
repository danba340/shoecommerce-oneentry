"use client"
import React, { useState } from "react";
import { Menu, MenuItem } from "./Menu";
import { cn } from "@/utils/cn";
import { IMenusPages } from "oneentry/dist/menus/menusInterfaces";
import { ColorDot } from "./ColorDot";
import { ProductItem } from "./ProductItem";
import { IPagesEntity } from "oneentry/dist/pages/pagesInterfaces";
import { Product } from "../_oneentry";

export function Navbar({ className, products, menu }: { className?: string, pages: IPagesEntity[], products: Product[], menu: IMenusPages[] }) {
	const [active, setActive] = useState<string | null>(null);
	const colorsSet = new Set<string>()
	products.forEach(p => {
		colorsSet.add(p.attributeValues.color.value.value)
	})
	const colors = Array.from(colorsSet)
	if (!menu) return null;
	return (
		<div
			className={cn("fixed top-10 max-w-2xl mx-auto z-50", className)}
		>
			<Menu setActive={setActive}>
				{colors.length > 1 ? colors.map(color => {
					return (
						<MenuItem align="center" key={color} setActive={setActive} active={active} itemKey={color} item={ColorDot({ color })}>
							<div className="text-sm grid grid-cols-2 gap-10 p-4">
								{products.filter(p => {
									return p.attributeValues.color.value.value === color
								}).map(p => {
									return (
										<ProductItem
											key={p.id}
											product={p}
											showBuy={true}
										/>
									)
								})}
							</div>
						</MenuItem >
					)
				}) : null}
			</Menu>
		</div >
	);
}