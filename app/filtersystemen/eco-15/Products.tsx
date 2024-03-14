import ProductCatalog from "@/components/ProductCatalog";
import { productList } from "@/components/ProductList";

function Products() {
	return (
		<div className="bg-[#EEEDE7] w-full py-20 ">
			<div className="max-w-7xl mx-auto px-5">
				<h2 className="text-3xl font-bold text-center mb-5 leading-10">
					Benieuwd welk filtersysteem bij u past?
				</h2>
				<p className="mb-16 tracking-wider text-center">
					Ontdek onze andere duurzame en gebruiksvriendelijke oplossingen voor uw koffiebranderij.
				</p>

				<ProductCatalog products={productList.filter((product) => product.title !== "ECO-15")} />
			</div>
		</div>
	);
}

export default Products;
