import Image from "next/image";

function Review() {
	return (
		<div className="lg:grid lg:grid-cols-12">
			<div className="lg:col-span-6 px-5 py-10 lg:p-10 xl:p-20 text-center flex items-center justify-center">
				<div>
					<h3 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Special-25 in praktijk</h3>
					<p className="block font-normal mt-5 mb-5 max-w-sm mx-auto">
						Al ruim 20 jaar maakt koffiebranderij Gulden Tas gebruik van het filtersysteem dat wij vroeger
						hebben ontwikkeld. Nog steeds werkt deze installatie naar behoren en wordt jaarlijks het
						onderhoud uitgevoerd. Wij zijn trots om met Gulden Tas deze lange en prettige samenwerking te
						hebben.
					</p>
					<p>- Gulden tas</p>
				</div>
			</div>
			<div className="lg:col-span-6 max-h-[400px] lg:max-h-full overflow-hidden bg-primary items-center justify-center py-16 lg:py-24">
				<div className="w-[250px] mx-auto h-[300px]">
					<Image src="/images/rm-5-print.png" alt="hero" width={200} height={200} className="w-full h-full" />
				</div>
			</div>
		</div>
	);
}

export default Review;
