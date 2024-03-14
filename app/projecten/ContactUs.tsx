import Image from "next/image";

function ContactUs() {
	return (
		<div className="lg:grid lg:grid-cols-12">
			<div className="lg:col-span-6 max-h-[400px] lg:max-h-full overflow-hidden hidden lg:block">
				<Image
					src="/images/filtersysteem-customization.png"
					alt="hero"
					width={700}
					height={450}
					className="h-full w-full"
				/>
			</div>
			<div className="lg:col-span-6 px-5 py-10 lg:p-10 xl:p-20 max-w-4xl flex flex-col justify-center">
				<div>
					<h3 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Geinterreseerd?</h3>
					<p className="block font-normal mt-5 mb-10 leading-8 tracking-wide">
						Wil je graag nog meer te weten komen over Indumax, of heeft u een nieuwe uitdaging voor ons? Wij
						staan ook altijd open voor geschikte partners en nieuwe innovaties.
					</p>
					<button className="px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg ">
						Neem contact op
					</button>
				</div>
			</div>
		</div>
	);
}

export default ContactUs;
