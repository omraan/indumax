import Image from "next/image";

function Review() {
	return (
		<div className="lg:grid lg:grid-cols-12">
			<div className="lg:col-span-6 px-5 py-10 lg:p-10 xl:p-20 text-center flex items-center justify-center">
				<div>
					<h3 className="text-3xl mb-5 font-bold leading-10 rounded-lg">ECO-50 in praktijk</h3>
					<p className="block font-normal mt-5 mb-5 max-w-2xl mx-auto">
						''k ben blij met de samenwerking tussen Indumax en onze branderij. Het was voor ons spannend om
						de eerste Eco-50 te bestellen, maar door het continue meedenken en de korte communicatie lijnen
						met Onno ging het allemaal goed. De filterinstallatie zorgt ervoor dat wij zorgeloos kunnen
						focussen op het koffiebranden. Ik zal Indumax zeker aanraden, en mocht u de filter installatie
						willen bekijken bent u altijd welkom bij onze branderij.''
					</p>
					<p>- Koffiebranderij Pure Flavor</p>
				</div>
			</div>
			<div className="lg:col-span-6 max-h-[400px] lg:max-h-full overflow-hidden bg-primary items-center justify-center py-16 lg:py-24">
				<div className="w-[250px] mx-auto h-[300px]">
					<Image
						src="/images/eco-5-print.png"
						alt="hero"
						width={200}
						height={200}
						className="w-full h-full"
					/>
				</div>
			</div>
		</div>
	);
}

export default Review;
