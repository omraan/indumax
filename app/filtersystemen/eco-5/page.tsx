import Customization from "./Customization";
import DidYouKnow from "./DidYouKnow";
import Hero from "./Hero";
import ProductSpecifications from "./ProductSpecifications";
import ProductSummary from "./ProductSummary";
import Products from "./Products";
import Review from "./Review";
import UspSummary from "./UspSummary";

export default function RM5() {
	return (
		<main className="relative pt-16">
			<Hero />
			<UspSummary />
			<ProductSummary />
			<ProductSpecifications />
			<DidYouKnow />
			<Review />
			<Products />
			<Customization />
		</main>
	);
}
