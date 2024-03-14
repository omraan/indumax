import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
function Customization() {
	return (
		<div className="grid grid-cols-1 lg:grid-cols-12 w-full mt-20 mb-10">
			<div className="bg-[#435558] lg:col-span-7 lg:p-16 mb-10">
				<Image
					src="/images/maatwerk-service.png"
					width={600}
					height={600}
					alt="Customization"
					className="mx-auto"
				/>
			</div>
			<div className="col-span-5 p-5 lg:p-20 xl:pt-40 ">
				<h4 className="text-lg font-semibold text-trueGray-600 mb-3">
					Heeft u een andere koffie uitdaging, wij helpen u graag
				</h4>
				<h2 className="text-4xl font-bold mb-5 text-primary">Maatwerk & service</h2>
				<p className="mb-10 leading-8 text-primary">
					Valt uw koffiebranderij buiten de specificaties van onze standaardoplossingen? Neem daarom
					vrijblijvend met ons contact op om samen de mogelijkheden voor uw koffiebranderij te bespreken.
				</p>
				<a
					href="/contact"
					className="px-5 py-3 text-md font-semibold text-white bg-[#435558] rounded-lg mb-16 inline-block"
				>
					Neem contact op
				</a>
				<a href="/sca-certificate.pdf" target="_blank">
					<div className="flex justify-between items- border rounded-[10px] border-primary/25 py-3 px-3">
						<Image src="/images/logo/logo-sca.jpg" width={100} height={100} alt="" />
						<span className="text-primary text-sm font-semibold flex gap-5 items-center">
							Bekijk ons lidmaatschap van SCA <ArrowRight />
						</span>
					</div>
				</a>
			</div>
		</div>
	);
}

export default Customization;
