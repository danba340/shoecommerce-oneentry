import { URLProps, } from "@/types";
import { Product, getProductsByPageUrl } from "../_oneentry";
import { SparklesHeader } from "../_components/SparkleHeader";
import { capitalizeFirstLetter } from "@/utils/string";
import { ProductGrid } from "../_components/ProductGrid";

export default async function CategoryPage({ params }: URLProps) {
	const { category } = params;
	const products: Product[] = await getProductsByPageUrl(category)
	return (
		<>
			<SparklesHeader text={capitalizeFirstLetter(category)} />
			<ProductGrid products={products} />
		</>
	)
}