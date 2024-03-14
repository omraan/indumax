import Image from "next/image";

function MissionVision() {
	return (
		<div className={`py-20 px-5 relative`}>
			<Image
				src="/images/duurzaamheid-hero-2.jpg"
				alt=""
				fill
				className="-z-10 brightness-50"
				objectFit="cover"
			/>
			<div className="grid grid-cols-1 lg:grid-cols-1 gap-10 max-w-3xl mx-auto">
				<div className="flex flex-col gap-5 text-center bg-black/20 backdrop-blur  text-white rounded-lg max-w-5xl mx-auto p-8">
					<h5 className="font-bold bg-white py-2 px-6 w-fit mx-auto rounded-lg text-[#29525F]">Onze visie</h5>

					<p className="">
						Op een duurzame wijze bijdragen aan een schone en gezonde omgeving voor mens en klimaat.
					</p>
				</div>
				<div className="flex flex-col gap-5 text-center bg-black/20 backdrop-blur  text-white rounded-lg max-w-5xl mx-auto p-8">
					<h5 className="font-bold bg-white py-2 px-6 w-fit mx-auto rounded-lg text-[#29525F]">
						Onze missie
					</h5>

					<p className="">
						Voor ieder luchtprobleem in de koffie industrie ontwikkelen wij duurzame oplossingen om de geur
						en uitstoot te reduceren voor mens en klimaat.
					</p>
				</div>
			</div>
		</div>
	);
}

export default MissionVision;
