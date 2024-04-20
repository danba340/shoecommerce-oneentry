"use client"
import { useLocalStorage } from 'usehooks-ts'
import { v4 as uuid } from "uuid";
import { Product } from "../_oneentry";

export function AddToCart({ product }: { product: Product }) {
	const [, saveCart] = useLocalStorage<Product[]>("cart", [], { initializeWithValue: false });
	const price = product.attributeValues.price.value
	return (
		<button onClick={() => {
			saveCart((prev: Product[]) => {
				const cartProduct = { ...product, cartId: uuid() }
				console.log("cartP", cartProduct)
				return [...prev, cartProduct]
			})
		}} className="rounded-full pl-4 pr-2 py-1 text-white space-x-1 mt-4 text-sm font-bold bg-zinc-800">
			<span>Buy now </span>
			<span className="bg-zinc-700 rounded-full text-xs border-white border px-2 py-0 text-white">
				${price}
			</span>
		</button>
	)
}