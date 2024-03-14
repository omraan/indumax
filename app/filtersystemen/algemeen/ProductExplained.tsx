import { Equal, Minus, Plus } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProductExplained() {
	return (
		<div className="bg-primary py-20 px-10 text-white">
			<div className="max-w-5xl mx-auto">
				<h2 className="text-2xl font-bold text-center mb-5">
					Ontdek hoe onze filtersystemen duurzaam meegroeien met uw koffiebranderij.
				</h2>
				<p className="text-center mb-5 lg:px-10 xl:px-20 leading-8">
					Wanneer een grotere koffiebrander nodig is door groei van uw business, dan hoeft u niet meteen een
					nieuwe filter te kopen. Door het circulaire design zijn alle filtersystemen stapelbaar, zo wordt
					eenvoudig uw bestaande filter geïntegreerd en de totale capaciteit verhoogt.
				</p>
				<p className="text-center">
					Wel zo prettig voor uw <strong>portemonnee</strong> en het <strong>milieu</strong>.
				</p>
				<div className="text-center w-full">
					<div className="grid grid-cols-1 lg:grid-cols-5 items-center py-20 ">
						<div className="relative">
							<Image
								src="/images/blueprint-single-system.png"
								alt=""
								width={100}
								height={200}
								className="mx-auto mb-52 lg:mb-20 h-40"
							/>
							<div className="bg-white/10 rounded-[10px] py-4 mt-5 absolute w-full top-40">
								<h3 className="font-bold text-md mb-3">Huidige filter systeem</h3>
								<p className="text-sm">Capaciteit: 5-15 KG</p>
							</div>
						</div>

						<div className="flex justify-center">
							<Plus className="-mt-10 mb-12 lg:mb-0" />
						</div>
						<div className="relative">
							<Image
								src="/images/blueprint-single-system.png"
								alt=""
								width={100}
								height={200}
								className="mx-auto mb-52 lg:mb-20 h-40"
							/>
							<div className="bg-white/10 rounded-[10px] py-4 mt-5 absolute w-full top-40">
								<h3 className="font-bold text-md">Upgrade</h3>
							</div>
						</div>

						<div className="flex justify-center">
							<Equal className="-mt-10 mb-20 lg:mb-0" />
						</div>
						<div className="relative">
							<Image
								src="/images/blueprint-combined-system.png"
								alt=""
								width={100}
								height={200}
								className="mx-auto mb-24 lg:mb-20 h-40"
							/>
							<div className="bg-white/10 rounded-[10px] py-4 mt-5 absolute w-full top-40">
								<h3 className="font-bold text-md mb-3">Nieuw systeem</h3>
								<p className="text-sm">Capaciteit: 25-50 KG</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
				<a
					href="/filtersystemen/algemeen"
					className="px-5 py-3 text-md font-semibold text-primary bg-white rounded-lg"
				>
					Lees meer over duurzaamheid
				</a>
			</div>
		</div>
	);
}

export default ProductExplained;
