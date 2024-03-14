import CardUsp from "@/components/CardUsp";
import AirConditioningIcon from "@/public/images/icon/008-air-conditioning.svg";
import EcologyIcon from "@/public/images/icon/027-ecology.svg";
import CubeIcon from "@/public/images/icon/3d-cube.svg";
import HandshakeIcon from "@/public/images/icon/hand-shake.svg";

import NetherlandsIcon from "@/public/images/Flag_of_the_Netherlands.svg";
import CoffeeBeanIcon from "@/public/images/icon/041-coffee-bean.svg";
import MedicalResultIcon from "@/public/images/icon/050-medical-result.svg";
import Plant from "@/public/images/icon/plant.svg";
const usps = [
	{
		title: "Bouwen aan een duurzame relatie",
		description: "Wij hechten aan goed contact en denken mee bij het installatie proces en de toekomst.",
		icon: <HandshakeIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Gevalideerd resultaten",
		description: "Bewezen effectief door geaccrediteerde meetinstituten & laboratoria.",
		icon: <MedicalResultIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Circulair filtermedium",
		description: "Bestaand uit natuurlijke materialen en is volledig recyclebaar.",
		icon: <EcologyIcon width="80" height="80" fill="#0A3851" />,
	},
	{
		title: "Made in Holland",
		description: "Geproduceerd en gebouwd in Nederland voor de beste kwaliteit en maatwerk.",
		icon: <NetherlandsIcon width="80" height="80" />,
	},
	{
		title: "Ervaring & onderhoud",
		description: "Eenvoudig onderhoud en lage kosten door onze ervaring en technologie.",
		icon: <CoffeeBeanIcon width="80" height="80" fill="#0A3851" />,
	},
];
function UspSustainability() {
	return (
		<div className="bg-white py-20">
			<div className="max-w-7xl mx-auto text-center px-5">
				<h2 className="text-2xl text-primary font-semibold mb-10">Benieuwd waarom klanten voor ons kiezen?</h2>
				<p className="">Bent u klaar voor de duurzaamste geur oplossing voor uw koffiebranderij?</p>
				<div className="flex flex-wrap gap-10 mt-20 justify-center">
					{usps.map((usp) => (
						<CardUsp usp={usp} />
					))}
				</div>
			</div>
		</div>
	);
}

export default UspSustainability;
