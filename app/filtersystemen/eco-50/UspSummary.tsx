import React from "react";
import { FaCheck } from "react-icons/fa6";

function UspSummary() {
	const usps = [
		{
			title: "Iedere dag vertrouwen vele koffiebranderijen op de filterinstallaties van Indumax voor zorgvuldige en effectieve verwerking van vervelende geuren die tijdens het branden van koffiebonen vrijkomen.",
		},
		{
			title: "Geschikt voor alle koffiebranders ongeacht het merk.",
		},
		{
			title: "Geen duur gas of electra nodig integenstelling tot naverbranders en electrostatische filters. Hierdoor vele malen duurzamer.",
		},
		{
			title: "Verstelbare diameter inlaat en uitlaat (modulair gebouwd voor de beste opstelling).",
		},
		{
			title: "Goedkoop in onderhoud.",
		},
		{
			title: "Hoog rendement door duurzame absorptie filterproces.",
		},
		{
			title: "Nederlandse kwaliteit en vakmanschap.",
		},
	];

	return (
		<div className="bg-[#EEEDE7] pt-20 pb-16">
			<div className="max-w-5xl mx-auto px-5">
				<h2 className="font-bold text-2xl mb-10">Voorkom geuroverlast bij het branden van koffiebonen</h2>

				{usps.map((usp) => (
					<div className="flex items-center mb-5">
						<div className="max-w-10 h-10 flex items-center justify-center mr-5">
							<span className="text-primary text-lg font-bold w-full">
								<FaCheck />
							</span>
						</div>
						<p className="text-primary">{usp.title}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default UspSummary;
