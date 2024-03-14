import Image from "next/image";

function MediumExplained() {
	const usps = [
		{
			title: "Absorbeert Gassen, Chemicaliën en Geuren",
			description: "Het medium voorkomt uitstuit van schadelijke en giftige stoffen.",
		},
		{
			title: "Recyclebaar",
			description: "Het filtermedium bestaat uit duurzame mineralen en zijn volledig recyclebaar",
		},
		{
			title: "Absorptiekracht",
			description:
				"Overstijgt een regulier actief kool granulaat met een filtercapaciteit dat kan oplopen tot een factor van 6.",
		},
		{
			title: "Voorkomt uitstoot en verbeterd luchtkwaliteit",
			description: "De katalysator verbeterd de lucht in de omgeving van de brander en uw bedrijf.",
		},
	];
	return (
		<div className="px-5 max-w-7xl mx-auto">
			<hr className="mb-20" />
			<h3 className="font-bold text-2xl mb-3 text-center">Het filtermedium</h3>
			<p className="mb-16 text-center">Het geheim en de kracht van onze machines.</p>
			<div className="grid grid-cols-1 lg:grid-cols-12 mb-20 max-w-7xl mx-auto px-10">
				<div className="col-span-7 flex items-center justify-center mb-10">
					<div className="border-[20px] border-primary rounded-[9999px] w-[250px] lg:w-[450px] h-[250px] lg:h-[450px] overflow-hidden flex justify-center items-center">
						<Image src="/images/korrel-coating.png" alt="" width={300} height={300} />
					</div>
				</div>
				<div className="col-span-5 flex flex-col gap-10 lg:pt-10 text-center lg:text-left">
					{usps.map((usp) => (
						<div className="">
							<div>
								<h3 className="font-semibold text-lg mb-2">{usp.title}</h3>
								<p className="text-sm tracking-widest">{usp.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="max-w-5xl mx-auto mb-20">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div>
						<h3 className="font-bold text-2xl mb-5">Onze uitvinding</h3>
						<p className="mb-5">
							Dit granulaat is ontwikkeld in samenwerking met diverse universiteiten. Het filter granulaat
							bestaat uit een basis van zeoliet en actieve kool met daaromheen een speciale laag met
							meerdere mineralen.
						</p>
						<p className="mb-5">
							Het filter granulaat bevat zeer kleine poriën die zich op het oppervlak bevinden. Deze
							poriën zijn zeer effectief in het absorberen van gassen, geuren en chemicaliën uit de lucht.
							Wanneer de lucht door het filter met filter granulaat stroomt, worden de stoffen uit de
							lucht geabsorbeerd door het granulaat en vastgehouden.
						</p>
						<a
							href="https://mijnoctrooi.rvo.nl/fo-eregister-view/search/details/2021004_NP/0/0/1/10/0/0/0/null_nl_null/KGFhbnZyYWdlcmhvdWRlcjooaW5kdW1heCkpIEFORCBwYXRlbnRSZWNvcmRTZXE6MQ=="
							className="px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg "
						>
							Bekijk het patent
						</a>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	);
}

export default MediumExplained;
