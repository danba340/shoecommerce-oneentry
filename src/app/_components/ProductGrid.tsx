import { Product } from "../_oneentry";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: Product[] }) {
	const gridColClass = products.length > 1 ? "grid-cols-3" : "grid-cols-1"
	return (
		<div className={`grid gap-8 ${gridColClass}`}>
			{products.map(p => <ProductCard key={p.id} product={p} />)}
		</div>
	)
}