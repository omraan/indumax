import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa6";

function ProductSummary() {
	const items = [
		{
			title: "4 casettes",
			icon: <FaCheck />,
		},
		{
			title: "16 - 25 KG",
			icon: <FaCheck />,
		},
		{
			title: "Duurzaam",
			icon: <FaCheck />,
		},
		{
			title: "Reinigt lucht",
			icon: <FaCheck />,
		},
		{
			title: "Geurloos",
			icon: <FaCheck />,
		},
		{
			title: "Vangt oliën op",
			icon: <FaCheck />,
		},
	];

	return (
		<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 py-20 px-5">
			<div className="lg:col-span-6 flex justify-center items-center">
				<Image src="/images/special-25.png" alt="" width={250} height={250} />
			</div>
			<div className="lg:col-span-6 lg:px-10">
				<div className="flex flex-col gap-5">
					{items.map((item) => (
						<div className="flex flex-row gap-5 items-center">
							<div className="bg-primary w-12 h-12 flex justify-center items-center text-white text-xl">
								{item.icon}
							</div>
							<p className="tracking-widest">{item.title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default ProductSummary;
