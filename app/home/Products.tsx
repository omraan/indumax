import ProductCatalog from "@/components/ProductCatalog";
import { productList } from "@/components/ProductList";

function Products() {
	return (
		<div className="bg-[#EEEDE7] w-full p-5 lg:py-20 ">
			<div className="max-w-7xl mx-auto mb-10">
				<h2 className="text-3xl font-bold text-center mb-5 leading-10">
					Benieuwd welk filtersysteem bij u past?
				</h2>
				<p className="mb-16 tracking-wider text-center">
					Ontdek onze duurzame en gebruiksvriendelijke oplossingen voor uw koffiebranderij.
				</p>

				<ProductCatalog products={productList} />
			</div>
		</div>
	);
}

export default Products;
