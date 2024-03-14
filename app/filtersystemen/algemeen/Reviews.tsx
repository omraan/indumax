"use client";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Reviews() {
	const companies = [
		{
			title: "Probat AG",
			description: "'Al jarenlang werken wij met Indumax samen om geur problemen bij onze klanten op te lossen.",
			icon: <Image src="/images/logo/probat-white.png" alt="" width={40} height={40} />,
		},
		{
			title: "Dutch Master Roasters",
			description: "'Al jarenlang werken wij met Indumax samen om geur problemen bij onze klanten op te lossen.",
			icon: <Image src="/images/logo/koffieroasters-white.png" alt="" width={40} height={40} />,
		},
		{
			title: "Koffielust BV",
			description: "'Al jarenlang werken wij met Indumax samen om geur problemen bij onze klanten op te lossen.",
			icon: <Image src="/images/logo/koffielust-white.png" alt="" width={80} height={40} />,
		},
		{
			title: "De koffiethuiswinkel",
			description: "'Al jarenlang werken wij met Indumax samen om geur problemen bij onze klanten op te lossen.",
			icon: <Image src="/images/logo/koffiethuiswinkel-white.png" alt="" width={100} height={40} />,
		},
	];
	const [api, setApi] = useState<CarouselApi>();
	const [current, setCurrent] = useState(0);
	const [count, setCount] = useState(0);

	useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			setCurrent(api.selectedScrollSnap() + 1);
		});
	}, [api]);

	return (
		<div className="bg-[#EEEDE7] w-full">
			<div className="container mx-auto px-4 py-20 text-center text-primary max-w-5xl">
				<div
					className="grid grid-cols-2 lg:grid-cols-4
                        items-center gap-5 mb-16 auto-rows-fr"
				>
					{companies.map((company, i) => (
						<div
							className={`h-full flex flex-col justify-center items-center text-white border-primary/10 border-8 rounded-lg bg-primary p-3 shadow-lg`}
						>
							<div className="mx-auto flex-1"></div>
							{company.icon && <span className="mb-5">{company.icon}</span>}
							<h3 className="text-sm  font-semibold text-center">{company.title}</h3>
						</div>
					))}
				</div>
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					setApi={setApi}
					className="mb-10"
				>
					<CarouselContent>
						{companies.map((company) => (
							<CarouselItem>
								<p className="text-2xl italic mb-3 text-primary font-thin">{company.description}</p>
								<p className="font-bold">{company.title}</p>
							</CarouselItem>
						))}
					</CarouselContent>
					<div className="hidden xl:block">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
				<button className="px-5 py-3 text-md font-semibold text-primary bg-white rounded-lg">
					Bekijk projecten
				</button>
			</div>
		</div>
	);
}

export default Reviews;
