import Image from "next/image";

function UspExplained() {
	const subject = [
		{
			title: "Een Circulair Design",
			description:
				"Onze filtersystemen zijn klaar voor een circulaire economie. Door het circulaire design van de filter installatie kunnen wij eenvoudig bestaande systemen upgraden of onderdelen eenvoudig hergebruiken. De filter systemen van Indumax zijn zo ontworpen dat ze modulair toepasbaar zijn bij iedere koffiebrander ongeacht het merk of uitvoering.",
			image: (
				<Image
					src="/images/duurzaamheid-circulair.png"
					alt=""
					width={400}
					height={400}
					className="w-full -mt-40 lg:mt-0 lg:max-h-[230px]"
				/>
			),
		},
		{
			title: "Hergebruik van filter mediums",
			description:
				"Onze filter mediums bestaan uit natuurlijke mineralen die voor u de lucht schoonmaken. Nadat het granulaat verzadigd is, kan het gemakkelijk hergebruiken worden in de andere toepassingen zoals waterzuivering. Dit bevorderd natuurlijk de transitie richting een circulaire economie.",
			image: (
				<Image
					src="/images/duurzaamheid-recycle.png"
					alt=""
					width={150}
					height={150}
					className="w-full -mt-40 lg:mt-0 lg:max-h-[210px]"
				/>
			),
		},
		{
			title: "Geen energie nodig",
			description:
				"De systemen verbruiken geen energie en vereisen weinig onderhoud. Dit levert u een besparing op uw energie rekening en het beter voor het milieu.",
			image: (
				<Image
					src="/images/duurzaamheid-no-energy.jpg"
					alt=""
					width={600}
					height={600}
					className="w-full lg:h-full -mt-16 lg:mt-0"
				/>
			),
		},
		{
			title: "Een schone en sociale keuze",
			description:
				"Schone lucht die ontdaan is van geur en verontreinigingen draagt bij aan een schone en gezonde leefomgeving voor uw bedrijf, omwonenden en het milieu. Dit bevorderd de relatie met de omgeving en is maatschappelijk verantwoord.",
			image: (
				<Image
					src="/images/duurzaamheid-clean-social.jpg"
					alt=""
					width={600}
					height={800}
					className="w-full lg:h-full"
				/>
			),
		},
	];
	return (
		<div className="bg-[#435558]/30 py-20">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl font-bold text-center mb-5 px-5 lg:max-w-lg lg:mx-auto leading-10">
					Onze technologie is ontwikkeld voor duurzaamheid
				</h2>
				<p className="mb-16 tracking-wider text-center">
					Wij ontwikkeling filterinstallaties die lucht reinigen tijdens het branden van koffiebonen. Maak
					kennis met onze duurzame technologie die u beschermt tegen geur, vervuiling en andere
					verontreinigingen.
				</p>

				<div className="flex flex-col gap-10 p-5 lg:p-0">
					{subject.map((item, i) => (
						<div className="grid grid-cols-1 lg:grid-cols-12">
							<div
								className={`col-span-1 lg:col-span-4 max-h-[300px] lg:max-h-none overflow-hidden ${
									i % 2 == 0 ? "lg:order-1" : "lg:order-2"
								}`}
							>
								<span className="h-full w-full">{item.image}</span>
							</div>
							<div
								className={`col-span-1 lg:col-span-8 bg-white p-10 text-center ${
									i % 2 == 0 ? "lg:order-2" : "lg:order-1"
								}`}
							>
								<h5 className="tracking-widest font-semibold text-sm mb-2">{item.title}</h5>
								<p className=" text-sm font-thin">{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default UspExplained;
