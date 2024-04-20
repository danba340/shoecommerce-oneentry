"use client"

import { BackgroundGradient } from "./BackgroundGradient"
import { AddToCart } from "@/app/_components/AddToCart";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";

export function ProductPageContent({ product }: { product: Product }) {

	const name = product.attributeValues.title.value
	const image = product.attributeValues.shoe_image.value.downloadLink
	const description = product.attributeValues.description.value
	const href = `/products/${product.id}`
	return (
		<div>
			<BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-zinc-900">
				<div className="flex flex-col justify-start h-full">
					<div>
						<Link href={href}>
							<div className="flex justify-center">
								<Image
									src={image}
									alt="jordans"
									height={450}
									width={800}
									className="object-contain aspect-video"
								/>
							</div>
						</Link>
						<p className="text-base sm:text-xl mt-4 mb-2 text-neutral-200">
							{name}
						</p>

						<p className="text-sm min-h-[40px] text-neutral-400">
							{description}
						</p>
					</div>
					<div>
						<AddToCart product={product} />
					</div>
				</div>
			</BackgroundGradient>
		</div>
	)
}