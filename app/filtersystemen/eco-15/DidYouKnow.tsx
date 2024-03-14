import React from "react";
import { PiPlant } from "react-icons/pi";

function DidYouKnow() {
	return (
		<div className="py-20 px-5">
			<div className="flex flex-col gap-5 text-center border bg-[#29525F] text-white rounded-lg max-w-5xl mx-auto p-8 shadow-lg">
				<div className="flex items-center justify-center">
					<PiPlant className="" size={40} />
				</div>
				<h5 className="font-bold bg-white py-2 px-6 w-fit mx-auto rounded-lg text-[#29525F]">Wist je dat?!</h5>
				<h4 className=" text-2xl font-semibold">
					Onze filtersystemen geen energie, gas of elektriciteit verbruiken?
				</h4>
				<p className="">
					De filtersystemen functioneren namelijk passief op basis van het uitgaande luchtkanaal van
					koffiebranders.
				</p>
				<p>Wel zo prettig voor uw portemonee en het milieu.</p>
			</div>
		</div>
	);
}

export default DidYouKnow;
