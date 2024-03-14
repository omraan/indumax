import React from "react";

function HowItWorks() {
	const steps = [
		{
			title: "Koffielucht in",
			description: "De lucht wordt aangezogen door de ventilator",
		},
		{
			title: "Filtratieproces",
			description: "De lucht wordt gefilterd door het filter systeem",
		},
		{
			title: "Schone lucht eruit",
			description: "De schone lucht wordt terug de ruimte in geblazen",
		},
	];

	return (
		<div className="max-w-5xl mx-auto text-center py-20 px-5">
			<h3 className="font-bold text-2xl mb-16">Hoe werken onze filter systemen?</h3>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
				{steps.map((step, i) => (
					<div className="flex flex-col items-center">
						<div className="h-10 w-10 bg-primary mb-5 text-center text-white flex justify-center items-center rounded rounded-[9999px] font-bold">
							{i + 1}
						</div>
						<h4 className="mb-5 font-bold">{step.title}</h4>
						<p>{step.description}</p>
					</div>
				))}
			</div>
			<p className="lg:px-20">
				De filter systemen maken lucht schoon door het absorberen van verontreinigingen. Geur, etherische oliën,
				vliesjes en schadelijke stoffen worden opgenomen.
			</p>
		</div>
	);
}

export default HowItWorks;
