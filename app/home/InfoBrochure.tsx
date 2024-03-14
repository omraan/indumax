import Image from "next/image";
import React from "react";

function InfoBrochure() {
	const blocks = [
		{
			title: "Geuroverlast voor de omgeving",
			description:
				"Tijdens het branden van koffiebonen ontstaat er bij de eerste crack (de Maillard-reactie) helaas een vervelend neveneffect: een penetrante geur die door de omgeving als onprettig wordt ervaren.",
			imageUrl: "/images/info-1.png",
		},
		{
			title: "Geuroverlast voor de omgeving",
			description: "Effectief op zowel brandlucht als koellucht van koffiebranders.",
			imageUrl: "/images/info-2.png",
		},
	];

	return (
		<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 lg:my-40">
			<div className="flex justify-center items-center">
				<div className="bg-[url('/images/coffee-beans.jpg')] brightness-80 bg-cover h-80 w-full lg:w-[75%] lg:h-full lg:rounded-[50px] overflow-hidden drop-shadow-lg"></div>
			</div>

			<div className="flex justify-center items-center lg:px-10">
				<div className="">
					<h4 className="text-md font-semibold text-zinc-700 bg-primary/10 rounded-[9999px] w-fit py-2 px-5 mb-5">
						Heeft u geur problemen bij het branden van koffiebonen?
					</h4>
					<h2 className="text-3xl font-bold text-primary mb-5">Maak uw branderij toekomstbestendig</h2>
					<p className="text-primary text-lg leading-8 mb-5">
						Tijdens het branden van koffiebonen ontstaat er bij de eerste crack (de Maillard-reactie) helaas
						een vervelend neveneffect: een penetrante geur die door de omgeving als onprettig wordt ervaren.
					</p>
					<p className="text-primary text-lg leading-8 mb-10">
						Deze geur wordt via de lucht uitgang van de koffiebrander verspreid tijdens het brand- en koel
						proces.
					</p>

					<p>
						<a
							href="/filtersystemen/algemeen"
							className="px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg"
						>
							Bekijk onze filtersystemen
						</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default InfoBrochure;
