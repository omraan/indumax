import Reviews from "@/app/home/Reviews";
import UspSummary from "@/app/home/UspSummary";
import ContactUs from "./ContactUs";
import FiltersystemSummary from "./FiltersystemSummary";
import Hero from "./Hero";
import HowItWorks from "./HowItWorks";
import MediumExplained from "./MediumExplained";
import ProductExplained from "./ProductExplained";
import Products from "./Products";
import UspExplained from "./UspExplained";

export default function Algemeen() {
	return (
		<main className="relative pt-16">
			<Hero />

			<Products />
			<UspSummary />
			<div className="my-20"></div>
			<UspExplained />
			<ProductExplained />

			<HowItWorks />
			<MediumExplained />

			<Reviews />
			<ContactUs />
		</main>
	);
}
