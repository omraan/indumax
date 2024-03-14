import Image from "next/image";
import DidYouKnow from "./duurzaamheid/DidYouKnow";
import Customization from "./home/Customization";
import Hero from "./home/Hero";
import InfoBrochure from "./home/InfoBrochure";
import Products from "./home/Products";
import Reviews from "./home/Reviews";
import UspExplained from "./home/UspExplained";
import UspSummary from "./home/UspSummary";
import UspSustainability from "./home/UspSustainability";

export default function Home() {
	return (
		<main className="relative">
			<Hero />
			<UspSummary />

			<InfoBrochure />
			<Reviews />
			<UspExplained />
			<UspSustainability />
			<DidYouKnow />
			<Products />
			<Customization />
		</main>
	);
}
