import Image from "next/image";

function Hero() {
	return (
		<div className=" bg-primary">
			<div className="xl:grid xl:grid-cols-12 max-w-7xl mx-auto">
				<div className="xl:col-span-5 p-5 lg:px-0 lg:py-16 text-white">
					<h1 className="text-3xl mb-5 font-bold leading-10 rounded-lg">ECO-25 Filter systeem</h1>
					<p className="block text-sm lg:text-lg font-thin mt-5">
						Voor de grotere koffiebranderijen die meer dan 15 kilogram koffiebonen per batch branden is de
						ECO-25 uitermate geschikt. Deze installatie heeft maar liefst vier cassettes en kan daarmee tot
						25 kilogram gebrande koffiebonen per productie batch verwerken. En dat natuurlijk op de meest
						effectieve en duurzame manier, ook voor koellucht.
					</p>
					<p className="block text-lg font-bold mt-5 mb-10">Geïnteresseerd in een ECO-25 filter systeem?</p>
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
