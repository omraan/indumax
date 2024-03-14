import Image from "next/image";

function Hero() {
	return (
		<div className=" bg-primary">
			<div className="xl:grid xl:grid-cols-12 max-w-7xl mx-auto">
				<div className="xl:col-span-5 p-5 lg:px-0 lg:py-16 text-white">
					<h1 className="text-3xl mb-5 font-bold leading-10 rounded-lg">ECO-5 Filter systeem</h1>
					<p className="block text-sm lg:text-lg font-thin mt-5">
						De ECO-5 is misschien de kleinste filterinstallatie uit onze product reeks, maar doet zeker niet
						onder aan de rest.
					</p>
					<p className="block text-sm lg:text-lg font-thin mt-5">
						Deze installatie bestaat uit één cassette en kan lucht gemiddeld van 1 tot 5 kilogram gebrande
						koffiebonen per productie batch verwerken. Hiermee is de ECO-5 vooral geschikt voor kleinere
						koffiebranders of koffiebranderijen.
					</p>
					<p className="block text-lg font-bold mt-5 mb-10">Geïnteresseerd in een ECO-5 filter systeem?</p>
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
