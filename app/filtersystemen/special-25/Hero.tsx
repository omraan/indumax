import Image from "next/image";

function Hero() {
	return (
		<div className=" bg-primary">
			<div className="xl:grid xl:grid-cols-12 max-w-7xl mx-auto">
				<div className="xl:col-span-5 p-5 lg:px-0 lg:py-16 text-white">
					<h1 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Special 25 Filter systeem</h1>
					<p className="block text-sm lg:text-lg font-thin mt-5">
						Het nieuwste systeem waarbij kwaliteit en effectiviteit is gekoppeld aan een mooi design. Uw
						branderij trekt klanten door prachtige koffiebranders en de beste bijbehorende tools. De
						Special-25 is zo ontworpen dat deze in uw winkel kan staan.
					</p>
					<p className="block text-sm lg:text-lg font-thin mt-5">
						Deze installatie heeft maar liefst vier filter cassettes en kan daarmee lucht van 25 kilogram
						koffiebranders verwerken. Dat natuurlijk op de meest effectieve en duurzame manier. Deze filter
						is geschikt voor zowel brandlucht als koellucht. Ongeacht het merk koffiebrander.
					</p>
					<p className="block text-lg font-bold mt-5 mb-10">
						Geïnteresseerd in een Special-25 filter systeem?
					</p>
					<a href="/contact" className="px-5 py-3 text-md font-semibold text-primary bg-white rounded-lg ">
						Vraag een offerte aan
					</a>
				</div>
				<div className="xl:col-span-7 max-h-full overflow-hidden p-20">
					<Image src="/images/product-hero-eco-5.png" alt="hero" width={1920} height={1080} className="" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
