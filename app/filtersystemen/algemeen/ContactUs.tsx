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
				<h5 className="text-md data-[]: tracking-widest mb-2 bg-opacity-60 w-fit rounded-lg">
					Heeft u een andere koffie uitdaging, wij helpen u graag.
				</h5>
				<h3 className="text-3xl mb-5 font-bold leading-10 rounded-lg">De kracht van eenvoud</h3>
				<p className="block font-normal mt-5 mb-10">
					De filter systemen van Indumax zijn zo ontworpen dat ze modulair toepasbaar zijn bij iedere
					koffiebrander ongeacht het merk of uitvoering. De systemen verbruiken geen energie en vereisen
					weinig onderhoud.
				</p>
				<button className="px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg ">
					Neem contact op
				</button>
			</div>
		</div>
	);
}

export default ContactUs;
