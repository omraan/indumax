import React from "react";

type Usp = {
	icon: JSX.Element;
	title: string;
	description: string;
};
type Options = {
	width?: number;
	height?: number;
};

function CardUsp({ usp, options }: { usp: Usp; options?: Options }) {
	return (
		<div
			className={`flex-initial ${
				options?.width ? `w-${options.width}` : "w-96"
			} transition ease-in-out hover:-translate-y-1`}
		>
			<div className="flex flex-col items-center bg-gradient-to-b from-white to-[#EEEDE7]/50 border border-[#EEEDE7] rounded rounded-lg px-5 lg:px-10 py-10 shadow-lg h-full">
				{usp.icon && <span className="text-7xl mb-5">{usp.icon}</span>}
				<h3 className="text-xl text-primary font-semibold mb-5 h-16">{usp.title}</h3>
				<p className="text-primary text-sm leading-7">{usp.description}</p>
				<div className="h-full"></div>
			</div>
		</div>
	);
}

export default CardUsp;
