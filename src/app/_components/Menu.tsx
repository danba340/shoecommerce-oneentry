"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const transition = {
	type: "spring",
	mass: 0.5,
	damping: 11.5,
	stiffness: 100,
	restDelta: 0.001,
	restSpeed: 0.001,
};

type MenuAlign = "left" | "right" | "center"

function alignClass(align: MenuAlign) {
	if (align === "left") {
		return "left-0"
	}
	if (align === "right") {
		return "right-0"
	}
	return "left-[50%] transform -translate-x-1/2"
}

export const MenuItem = ({
	setActive,
	active,
	item,
	itemKey,
	children,
	align,
}: {
	setActive: (item: string) => void;
	active: string | null;
	itemKey: string;
	item: React.ReactNode;
	children?: React.ReactNode;
	align: MenuAlign;
}) => {
	return (
		<div onMouseEnter={() => setActive(itemKey)} className="relative">
			<motion.div
				transition={{ duration: 0.3 }}
				className="cursor-pointer hover:opacity-[0.9] text-white"
			>
				{item}
			</motion.div>
			{active !== null && (
				<motion.div
					initial={{ opacity: 0, scale: 0.85, y: 10 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					transition={transition}
				>
					{active === itemKey && (
						<div className={`absolute z-50 ${alignClass(align)} top-[calc(100%_+_1rem)] `}>
							<motion.div
								transition={transition}
								layoutId="active" // layoutId ensures smooth animation
								className="bg-black   backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
							>
								<motion.div
									layout // layout ensures smooth animation
									className="w-max h-full p-4"
								>
									{children}
								</motion.div>
							</motion.div>
						</div>
					)}
				</motion.div>
			)}
		</div>
	);
};

export const Menu = ({
	setActive,
	children,
}: {
	setActive: (item: string) => void;
	children: React.ReactNode;
}) => {
	return (
		<nav
			onMouseLeave={() => setActive("")} // resets the state
			className="relative rounded-full boder  bg-black border-white/[0.2]  shadow-input flex justify-center space-x-4 p-6"
		>
			{children}
		</nav>
	);
};

export const HoveredLink = ({ children, ...rest }: any) => {
	return (
		<Link
			{...rest}
			className="text-neutral-200  "
		>
			{children}
		</Link>
	);
};
