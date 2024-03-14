import React from "react";

function ProductSpecifications() {
	const items = [
		{ name: "Diepte", value: "850 MM" },
		{ name: "Breedte", value: "950 MM" },
		{ name: "Hoogte frame", value: "1.254 MM" },
		{ name: "Hoogte filterkamer", value: "455 MM" },
		{ name: "Inlet cross", value: "80 MM" },
		{ name: "Outlet cross", value: "100 MM" },
		{ name: "Druk (clean medium)", value: "120 N/M2" },
		{ name: "Maximale druk (replace medium)", value: "320 PA" },
		{ name: "Hittebestendig tot", value: "500 Celcius" },
		{ name: "Gewicht", value: "60 KG" },
	];

	return (
		<div className="bg-[#29525F]/40 py-20 overflow-hidden">
			<div className="max-w-4xl mx-auto px-5">
				<table className="w-full">
					<tbody className="w-full">
						{items.map((item) => (
							<tr className="w-full h-10">
								<td className="font-semibold tracking-wider text-[#2A535F] w-[50%]">{item.name}</td>
								<td className="text-[#2A535F] tracking-wider">{item.value}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className="max-w-5xl mx-auto relative">
				<div className="absolute bottom-[-123px] right-20 text-[120px] font-bold tracking-wider text-[#2A535F]/50">
					ECO-5
				</div>
			</div>
		</div>
	);
}

export default ProductSpecifications;
