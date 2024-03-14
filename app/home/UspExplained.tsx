import Image from "next/image";

function UspExplained() {
	const subject = [
		{
			title: "Filterinstallatie",
			subtitle: "De filter die past bij iedere koffiebrander",
			description:
				"De filter systemen van Indumax zijn zo ontworpen dat ze modulair toepasbaar zijn bij iedere koffiebrander ongeacht het merk of uitvoering.",
			image: <Image src="/images/kast.jpg" alt="" width={125} height={125} className="lg:-mt-2" />,
		},
		{
			title: "Filter medium",
			subtitle: "Duurzame katalysator van mineralen",
			description:
				"Het filter medium is speciaal ontwikkeld uit natuurlijke mineralen om zo op een duurzame manier geur en verontreinigen te absorberen.",
			image: <Image src="/images/korrel-met-coating.jpeg" alt="" width={300} height={125} className="lg:-mt-2" />,
		},
		{
			title: "Filtercassettes",
			subtitle: "Absorberen van etherische oliën en vliesjes",
			description:
				"Extra filter cassettes zijn toegevoegd om etherische oliën en vliesjes af te vangen. Dit is niet allen goed voor het mileu, ook gaat het filter medium langer mee.",
			image: <Image src="/images/cassette.png" alt="" width={175} height={125} className="lg:-mt-2" />,
		},
	];
	return (
		<div className="bg-[#0A3851]/30 py-20">
			<div className="max-w-4xl mx-auto mb-10">
				<h2 className="text-2xl text-primary font-semibold mb-10 text-center">
					Reduceer geuroverlast bij het branden van koffiebonen
				</h2>

				<div className="flex flex-col gap-10 p-5 lg:p-0">
					{subject.map((item, i) => (
						<div className="grid grid-cols-1 lg:grid-cols-12 rounded-[10px] overflow-hidden ">
							<div
								className={`col-span-1 lg:col-span-3 bg-white ${
									i % 2 == 0 ? "lg:order-1" : "lg:order-1"
								}`}
							>
								<span className="flex items-center justify-center h-full w-full min-h-[200px]">
									{item.image}
								</span>
							</div>
							<div
								className={`col-span-1 lg:col-span-9 bg-primary text-white p-10  ${
									i % 2 == 0 ? "lg:order-1" : "lg:order-1"
								}`}
							>
								<div className="lg:flex justify-between items-center text-center lg:text-left">
									<h5 className="lg:order-2 tracking-widest text-sm mb-5 bg-white/25 rounded-[50px] mx-auto lg:mx-0 w-fit px-5 py-2">
										{item.title}
									</h5>
									<h3 className="lg:order-1 text-md text-white font-semibold mb-4">
										{item.subtitle}
									</h3>
								</div>
								<hr className="mb-5 hidden lg:block" />

								<p className="text-white text-sm leading-8 tracking-wider text-center lg:text-left">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="text-center">
				<a
					href="/filtersystemen/algemeen"
					className="px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg"
				>
					Ontdek hoe het werkt
				</a>
			</div>
		</div>
	);
}

export default UspExplained;
