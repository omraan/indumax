import Image from "next/image";

function Hero() {
	return (
		<div className="xl:h-[600px] flex flex-col">
			<div className="w-full xl:grid xl:grid-cols-12 h-full ">
				<div className="order-1 xl:order-2 xl:col-span-6 max-h-[400px] xl:max-h-full xl:h-full overflow-hidden">
					<Image src="/images/duurzaamheid-hero.png" alt="hero" width={600} height={600} className="w-full" />
				</div>
				<div className="order-2 xl:order-1 xl:col-span-6 p-5 lg:px-16 flex flex-col justify-center">
					<div>
						<h5 className="text-xl mb-2 bg-opacity-60 w-fit rounded-lg">
							Maak uw koffiebranderij toekomstbestendig
						</h5>
						<h1 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Projecten</h1>
						<p className="block text-sm lg:text-lg font-normal mt-5">
							Ontdek onze projecten en oplossingen die wij hebben uitgevoerd bij verschillende
							branderijen. Gedurende deze projecten hebben wij onze technologie gevalideerd en
							doorontwikkeld. Bij verschillende branderijen zijn vergunningen verleend en goedkeuringen
							verleend bij praktijk testen door de omgeving dient.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
