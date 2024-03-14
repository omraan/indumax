import Image from "next/image";

function Hero() {
	return (
		<div className="flex flex-col">
			<div className="w-full xl:grid xl:grid-cols-12 h-full ">
				<div className="xl:col-span-7 max-h-[400px] xl:max-h-full xl:h-full overflow-hidden">
					<Image src="/images/mallant.png" alt="hero" width={1920} height={1080} className="brightness-75" />
				</div>
				<div className="xl:col-span-5 p-5 lg:px-16 py-20 flex flex-col justify-center">
					<div>
						<h1 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Over ons Familiebedrijf</h1>
						<p className="block text-sm lg:text-lg font-normal mt-5">
							Indumax B.V. is een Brabants familiebedrijf dat zich specialiseert in het ontwikkelen van
							technische oplossingen voor de verbetering van lucht voor mens en klimaat. Al 22 jaar lang
							en 2 generaties verder houdt Indumax zich bezig met de ontwikkeling van innovatieve en
							duurzame oplossingen. Niet voor niets is Indumax sindsdien een volwaardig leverancier
							geworden van lucht filterende toepassingen in de koffie industrie.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
