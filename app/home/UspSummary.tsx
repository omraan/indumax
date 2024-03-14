import CardUsp from "@/components/CardUsp";
import NoseIcon from "@/public/images/icon/007-nose.svg";
import AirConditioningIcon from "@/public/images/icon/008-air-conditioning.svg";
import OilFilterIcon from "@/public/images/icon/011-oil-filter-1.svg";
import NoFireIcon from "@/public/images/icon/049-no-fire.svg";
import CubeIcon from "@/public/images/icon/3d-cube.svg";
const usps = [
	{
		title: "Reduceert geuroverlast",
		description: "Reduceert geur tijdens het branden van koffiebonen met uw koffiebrander.",
		icon: <NoseIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Modulair design",
		description: "Filter systemen zijn stapelbaar en groeien mee met uw bedrijf.",
		icon: <CubeIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Toepasbaar op brand- en koellucht",
		description: "Multi inzetbaar ongeacht het merk of type koffiebrander.",
		icon: <AirConditioningIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Verbruikt geen energie",
		description: "Geen gas of elektra nodig in vergelijking met naverbranders.",
		icon: <NoFireIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Filtert etherische oliën",
		description: "Absorbeert oliën en vangt	overige vliesjes en schaft af tijdens het branden.",
		icon: <OilFilterIcon width="80" height="80" fill="#0A3851" />,
	},
];
function UspSummary() {
	return (
		<div className="bg-white pt-20">
			<div className="max-w-7xl mx-auto text-center px-5">
				<h2 className="text-2xl text-primary font-semibold mb-10">Waarom kiezen klanten voor Indumax?</h2>

				<div className="flex flex-wrap gap-10 mt-20 justify-center">
					{usps.map((usp) => (
						<CardUsp usp={usp} />
					))}
				</div>
			</div>
		</div>
	);
}

export default UspSummary;
