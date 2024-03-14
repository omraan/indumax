import React from "react";

function Hero() {
	return (
		<div className="relative mt-16 lg:mt-10 w-full h-screen max-h-[600px] lg:max-h-[800px] bg-[url('/images/hero.png')] bg-cover lg:p-20 p-5 bg-center">
			<div className="max-w-7xl mx-auto">
				<div className="max-w-3xl">
					<h1 className="text-xl text-white mb-2 bg-primary bg-opacity-60 w-fit px-5 py-2 rounded-lg">
						Ontwikkeld voor de <strong>koffie industrie</strong>
					</h1>
					<p className="text-2xl lg:text-4xl text-white mb-5 font-bold leading-10 bg-primary bg-opacity-80 lg:bg-opacity-60 p-5 rounded-lg">
						Wij ontwikkelen duurzame filterinstallaties tegen geur van koffiebranders
						<span className="block text-sm lg:text-lg font-normal mt-5">
							Indumax ontwikkelt filter systemen die lucht reinigen tijdens het branden van koffiebonen.
							Maak kennis met onze duurzame technologie die u beschermt tegen geur, vervuiling en andere
							verontreinigingen.
						</span>
						<strong className="block text-lg font-bold mt-5">Benieuwd naar onze oplossingen?</strong>
					</p>

					<a
						href="/filtersystemen/algemeen"
						className="px-5 py-3 text-md font-semibold text-primary bg-white rounded-lg"
					>
						Bekijk onze filtersystemen
					</a>
				</div>
			</div>
		</div>
	);
}

export default Hero;
