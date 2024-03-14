import Image from "next/image";

function ContactUs() {
	return (
		<div className="lg:grid lg:grid-cols-12">
			<div className="lg:col-span-6 max-h-[400px] lg:max-h-full overflow-hidden">
				<Image
					src="/images/filtersysteem-eenvoud.png"
					alt="hero"
					width={700}
					height={450}
					className="h-full w-full"
				/>
			</div>
			<div className="lg:col-span-6 px-5 py-10 lg:p-10 xl:p-20">
				<h3 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Meer informatie over koffie</h3>
				<p className="block font-normal mt-5 mb-10">
					Wil je graag nog meer te weten komen over Indumax. Download hier onze brochure:
				</p>
				<button className="px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg ">
					Bekijk de brochure
				</button>
			</div>
		</div>
	);
}

export default ContactUs;