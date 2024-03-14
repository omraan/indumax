import ContactUs from "./ContactUs";
import DidYouKnow from "./DidYouKnow";
import Hero from "./Hero";
import ResponsibleChoice from "./ResponsibleChoice";
import UspExplained from "./UspExplained";

export default function Duurzaamheid() {
	return (
		<main className="relative pt-16">
			<Hero />
			<UspExplained />
			<DidYouKnow />
			<ResponsibleChoice />
			<ContactUs />
		</main>
	);
}
