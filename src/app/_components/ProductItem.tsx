import Image from "next/image"
import { AddToCart } from "./AddToCart";
import Link from "next/link";
import { Product } from "../_oneentry";

export const ProductItem = ({
	product,
	showBuy
}: {
	product: Product
	showBuy: boolean
}) => {
	const title = product.attributeValues.title.value
	const src = product.attributeValues.shoe_image.value.downloadLink
	const description = product.attributeValues.description.value
	return (
		<div className="flex items-center space-x-2">
			<div>
				<Link href={`/products/${product.id}`}>
					<Image
						src={src}
						width={140}
						height={140}
						alt={title}
						className="flex-shrink-0 object-contain aspect-square rounded-md shadow-2xl"
					/>
				</Link>
			</div>
			<div>
				<h4 className="text-xl font-bold mb-1 text-white">
					{title}
				</h4>
				<p className="text-sm max-w-[10rem] text-neutral-300">
					{description}
				</p>
				{showBuy ? <AddToCart product={product} /> : <div>${product.attributeValues.price.value}</div>}
			</div>
		</div>
	);
};
