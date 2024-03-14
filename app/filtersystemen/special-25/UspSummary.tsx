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
		<div className="bg-[#EEEDE7] pt-20 pb-16 text-center">
			<div className="max-w-5xl mx-auto px-5">
				<h2 className="font-bold text-2xl mb-10">Benieuwd naar deze machine?</h2>

				<p>
					Wij nemen dit model samen met de Eco-50 mee naar de beurs in{" "}
					<strong>Kopenhagen op 27 juni 2024</strong>. Zien wij u ook?
				</p>
			</div>
		</div>
	);
}

export default UspSummary;
