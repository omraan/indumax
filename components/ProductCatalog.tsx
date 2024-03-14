import Image from "next/image";
import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

type Usp = {
	icon: JSX.Element;
	text: string;
};

type Product = {
	title: string;
	image: JSX.Element;
	usps: Usp[];
	url: string;
};

function ProductCatalog({ products }: { products: Product[] }) {
	return (
		<div className="flex flex-wrap gap-5 justify-center">
			{products.map((item, i) => (
				<div className="flex-initial w-96 lg:w-56 flex flex-col bg-white p-5 mb-5">
					<div className="">
						<span className="flex items-center justify-center h-full w-full min-h-[175px] lg:max-h-[175px]">
							{item.image}
						</span>
					</div>
					<div className={`p-10 text-center`}>
						<h3 className="text-md font-semibold mb-4">{item.title}</h3>
					</div>
					{item.usps &&
						item.usps.map((usp) => (
							<div className="grid grid-cols-12 mb-2 gap-2 items-center">
								<div className="col-span-3">{usp.icon}</div>
								<span className="col-span-9 text-sm font-thin">{usp.text}</span>
							</div>
						))}

					<div className="h-full"></div>
					<div className="text-center mt-5">
						<a
							href={item.url}
							className="flex relative gap-10 bg-whitd border-primary justify-center items-center px-5 py-2 text-md font-semibold text-primary border  w-full rounded-lg transition hover:bg-primary hover:text-white ease-in"
						>
							<span>Bekijk</span>
							<HiOutlineChevronRight className="absolute right-5" />
						</a>
					</div>
				</div>
			))}
		</div>
	);
}

export default ProductCatalog;
