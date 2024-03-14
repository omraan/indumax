import Image from "next/image";
import { PiPlantThin } from "react-icons/pi";

function ResponsibleChoice() {
	return (
		<div className="lg:grid lg:grid-cols-12">
			<div className="lg:col-span-6 px-5 py-10 lg:p-10 xl:p-20 max-w-4xl flex flex-col justify-center">
				<div>
					<h3 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Een schone en sociale keuze</h3>
					<p className="block font-normal mt-5 mb-10 leading-8 tracking-wide">
						Schone lucht die ontdaan is van geur en verontreinigingen draagt bij aan een schone en gezonde
						leefomgeving voor uw bedrijf, omwonenden en het milieu. Dit bevorderd de relatie met de omgeving
						en is maatschappelijk verantwoord.
					</p>
				</div>
			</div>
			<div className="lg:col-span-6 bg-primary flex justify-center items-center">
				<PiPlantThin className="text-white" size={200} />
			</div>
		</div>
	);
}

export default ResponsibleChoice;
