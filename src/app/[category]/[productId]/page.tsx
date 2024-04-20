import { URLProps } from "@/types";
import { Product, getProductById } from "../../_oneentry";
import { SparklesHeader } from "../../_components/SparkleHeader";
import { capitalizeFirstLetter } from "@/utils/string";
import { BackgroundGradient } from "@/app/_components/BackgroundGradient";
import { ProductPageContent } from "@/app/_components/ProductPageContent";

export default async function ProductPage({ params }: URLProps) {
	const { productId } = params;
	const product: Product = await getProductById(parseInt(productId))
	return (
		<>
			<SparklesHeader text={capitalizeFirstLetter(product.attributeValues.title.value)} />
			<ProductPageContent product={product} />
		</>
	)
}