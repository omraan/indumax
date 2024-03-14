import Image from "next/image";

function Hero() {
	return (
		<div className="xl:h-[600px] flex flex-col">
			<div className="w-full xl:grid xl:grid-cols-12 h-full ">
				<div className="xl:col-span-7 max-h-[400px] xl:max-h-full xl:h-full overflow-hidden">
					<Image
						src="/images/filtersysteem-algemeen.png"
						alt="hero"
						width={1920}
						height={1080}
						className="sepia brightness-90"
					/>
				</div>
				<div className="xl:col-span-5 p-5 lg:px-16 flex flex-col justify-center">
					<div>
						<h5 className="text-xl mb-2 bg-opacity-60 w-fit rounded-lg">
							Ontwikkeld voor de <strong>koffie industrie</strong>
						</h5>
						<h1 className="text-3xl mb-5 font-bold leading-10 rounded-lg">
							Klaar voor de duurzaamste geur oplossing voor uw koffiebrander?
						</h1>
						<p className="block text-sm lg:text-lg font-normal mt-5">
							Voor welk filter systeem u uit onze reeks ook kiest, ze garanderen allemaal een effectieve
							verwerking tegen vervelende geuren en verontreinigingen. Aan de hand van uw type brander
							kunnen we onze filter systemen afstemmen.
						</p>
						<p className="block text-lg font-bold my-5">Benieuwd welk systeem het beste bij u past?</p>
						<button className="px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg ">
							Neem contact op
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
