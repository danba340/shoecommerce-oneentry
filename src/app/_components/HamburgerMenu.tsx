"use client"

import { HoveredLink, Menu, MenuItem } from "./Menu"
import { useState } from "react";
import { IMenusPages } from "oneentry/dist/menus/menusInterfaces";

function HamburgerIcon({ width }: { width: number }) {
	return (
		<svg className="hover:opacity-75 hover:-translate-y-0.5 transition" style={{ width }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 12L20 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> <path d="M4 6L20 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round"></path> </g></svg>
	)
}

export function HamburgerMenu({ menu }: { menu: Array<IMenusPages> }) {
	const [active, setActive] = useState<string>("");

	return (
		<div className="absolute top-[-95px] left-0 pt-1 pb-2 m-2 cursor-pointer">
			<Menu setActive={setActive}>
				<MenuItem setActive={setActive} active={active} align="left" itemKey={"Pages"} item={HamburgerIcon({ width: 20 })}>
					<div className="flex flex-col space-y-4 text-sm">
						{menu.sort((a, b) => {
							return b.position - a.position
						}).map(p => {
							let href = ""
							href = p.pageUrl == "home" ? "/" : `/${p.pageUrl}`
							return (
								<HoveredLink key={p.id} href={href}>{p.localizeInfos.menuTitle}</HoveredLink>
							)
						})}
					</div>
				</MenuItem >
			</Menu>
		</div>
	)
}