import { URLProps } from "@/types";
import { SparklesHeader } from "./_components/SparkleHeader";
import { Product, getAllProducts } from "./_oneentry";
import { ProductGrid } from "./_components/ProductGrid";

export default async function Home({ params }: URLProps) {
  const { category } = params
  const products: Product[] = await getAllProducts();
  return (
    <div>
      <SparklesHeader text={"Welcome"} />
      <ProductGrid products={products} />
    </div>
  );
}
