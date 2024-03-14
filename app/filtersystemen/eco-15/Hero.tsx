import Image from "next/image";

function Hero() {
	return (
		<div className=" bg-primary">
			<div className="xl:grid xl:grid-cols-12 max-w-7xl mx-auto">
				<div className="xl:col-span-5 p-5 lg:px-0 lg:py-16 text-white">
					<h1 className="text-3xl mb-5 font-bold leading-10 rounded-lg">ECO-15 Filter systeem</h1>
					<p className="block text-sm lg:text-lg font-thin mt-5">
						De ECO-15 bevat twee filter cassettes voor een effectief geurloos eindresultaat. Net als de
						ECO-5 en ECO-25 vangt deze installatie ook vrijkomende etherische oliën op.
					</p>
					<p className="block text-sm lg:text-lg font-thin mt-5">
						De ECO-15 is in staat 6 tot 15 kilogram gebrande koffiebonen te verwerken per productie batch en
						is daarmee uitermate geschikt voor de ambachtelijke koffiebranderij.
					</p>
					<p className="block text-sm lg:text-lg font-thin mt-5 italic">
						Optioneel: De ECO-15 is stapelbaar met een ECO-15 en ECO-25 waardoor eenvoudig uw filter
						capaciteit kan worden vergroot. Hierdoor bent u eenvoudig voorbereid op toekomst met mogelijke
						schaalvergrotingen.
					</p>
					<p className="block text-lg font-bold mt-5 mb-10">Geïnteresseerd in een ECO-15 filter systeem?</p>
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
