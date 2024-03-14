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
				<a
					href="/brochure-indumax-2023.pdf"
					target="_blank"
					className="inline-block mb-10 px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg "
				>
					Bekijk de brochure
				</a>
				<p className="mb-3">Bekijk hier ons patent:</p>
				<a
					href="https://mijnoctrooi.rvo.nl/fo-eregister-view/search/details/2021004_NP/0/0/1/10/0/0/0/null_nl_null/KGFhbnZyYWdlcmhvdWRlcjooaW5kdW1heCkpIEFORCBwYXRlbnRSZWNvcmRTZXE6MQ=="
					target="_blank"
					className="inline-block px-5 py-3 text-sm font-semibold text-white bg-primary rounded-lg "
				>
					Samenstelling voor het produceren van een lucht filterend granulaat
				</a>
			</div>
		</div>
	);
}

export default ContactUs;
