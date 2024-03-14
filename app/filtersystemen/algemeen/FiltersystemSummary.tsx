import CardUsp from "@/components/CardUsp";
import AirConditioningIcon from "@/public/images/icon/008-air-conditioning.svg";
import React from "react";
const usps = [
	{
		title: "Verwijder Geur",
		description: "Reduceer geur tijdens het koffiebranden en voorkom geuroverlast.",
		icon: <AirConditioningIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Brand en Koellucht toepasbaar",
		description: "Effectief op zowel brandlucht als koellucht van koffiebranders.",
		icon: <AirConditioningIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Reinigt Lucht en  verontreinigingen",
		description: "Reinigt lucht en absorbeert verontreinigingen om uitstoot te verminderen.",
		icon: <AirConditioningIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Absorbeert Etherische Oliën",
		description: "Absorbeert etherische olien en vliesjes uit de lucht.",
		icon: <AirConditioningIcon width="80" height="80" fill="#0A3851" />,
	},
];

function FiltersystemSummary() {
	return (
		<div className="bg-white py-20">
			<div className="max-w-7xl mx-auto text-center px-5">
				<h2 className="text-2xl font-bold mb-10">Waarom een filterinstallatie belangrijk is?</h2>
				<p className="text-primary max-w-5xl mx-auto mb-20">
					Het reinigen van lucht en uitstoot draagt positief bij aan de gezondheid van mens en klimaat. Iedere
					dag vertrouwen vele koffiebranderijen op de filterinstallaties van Indumax.
				</p>

				<div className="flex flex-wrap max-w-5xl mx-auto gap-5 justify-center">
					{usps.map((usp) => (
						<CardUsp usp={usp} />
					))}
				</div>
			</div>
		</div>
	);
}

export default FiltersystemSummary;
