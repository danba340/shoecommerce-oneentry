"use client";
import React from "react";
import { BackgroundGradient } from "./BackgroundGradient";
import Image from "next/image";
import { AddToCart } from "./AddToCart";
import Link from "next/link";
import { Product } from "../_oneentry";

export function ProductCard({ product }: { product: Product }) {
	const name = product.attributeValues.title.value
	const image = product.attributeValues.shoe_image.value.downloadLink
	const description = product.attributeValues.description.value
	const href = `/products/${product.id}`
	return (
		<div>
			<BackgroundGradient className="aspect-[9/10] rounded-[22px] p-4 sm:p-10 bg-zinc-900">
				<div className="flex flex-col justify-between h-full">
					<div className="aspect-square">
						<Link href={href}>
							<Image
								src={image}
								alt="jordans"
								height={225}
								width={400}
								className="object-contain aspect-video"
							/>
						</Link>
						<p className="text-base sm:text-xl  mt-4 mb-2 text-neutral-200">
							{name}
						</p>

						<p className="text-sm min-h-[40px] text-neutral-400">
							{description}
						</p>
					</div>
					<AddToCart product={product} />
				</div>
			</BackgroundGradient>
		</div>
	);
}
