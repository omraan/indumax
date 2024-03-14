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
			icon: <Image src="/images/logo/koffieroasters-white.png" alt="" width={40} height={40} />,
		},
		{
			title: "Koffielust BV",
			description:
				"'Met name de open houding van Onno werkte voor ons erg goed. Ik weet wat ik koop en daarnaast weet ik dat er vanuit Indumax goed met mij meegdacht wordt naar een passende oplossing. Ik kan Indumax ten zeerste aanbevelen aan andere branderijen.",
			icon: <Image src="/images/logo/koffielust-white.png" alt="" width={80} height={40} />,
		},
		{
			title: "De koffiethuiswinkel",
			icon: <Image src="/images/logo/koffiethuiswinkel-white.png" alt="" width={100} height={40} />,
		},
		{
			title: "Koffie Lovers",
			description:
				"Ik raad de filter systemen van Indumax graag aan voor andere koffiebranderijen. De filters zijn effectief en de communicatie met Indumax werkt prettig. ",
			icon: <Image src="/images/logo/logo-koffie-lovers.png" alt="" width={50} height={40} />,
		},
		{
			title: "Pure Flavor",
			description:
				"Ik raad de filter systemen van Indumax graag aan voor andere koffiebranderijen. De filters zijn effectief en de communicatie met Indumax werkt prettig. ",
			icon: (
				<Image
					src="/images/logo/logo-pure-flavor.png"
					alt=""
					width={50}
					height={40}
					className="rounded rounded-[999px] border-[5px] border-white"
				/>
			),
		},
		{
			title: "Gulden Tas",
			icon: (
				<Image
					src="/images/logo/logo-gulden-tas.png"
					alt=""
					width={50}
					height={50}
					className="rounded rounded-[999px] border-[5px] border-white bg-white"
				/>
			),
		},
		{
			title: "De Pelikaan",
			description:
				"Wij hebben voor Indumax gekozen door de goede referenties op geur reducties en duurzaamheid. We zijn erg tevreden over de prestaties en de robuustheid van de Eco-15 filter.",
			icon: (
				<Image
					src="/images/logo/logo-pelikaan.png"
					alt=""
					width={125}
					height={40}
					className="rounded rounded-[999px] border-[5px] border-white bg-white"
				/>
			),
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
			<div className="container mx-auto px-4 py-20 text-center text-primary max-w-7xl">
				<h2 className="text-2xl font-bold mb-4">Duurzaamste geur oplossing voor koffiebranders</h2>
				<p className="max-w-5xl mx-auto mb-10">
					Wij zorgen voor een uiterst effectieve en duurzame verwerking van vervelende geuren die tijdens het
					brandproces ontstaan. <br />
					Daarom vertrouwen onze klanten dagelijks op de filtersystemen van Indumax.
				</p>
				<div
					className="flex flex-wrap justify-center
                        items-center gap-5 mb-16 max-w-5xl mx-auto"
				>
					{companies.map((company, i) => (
						<div className="h-[120px] flex-initial w-56 flex flex-col justify-center items-center text-white border-primary/10 border-8 rounded-lg bg-primary p-3 shadow-lg">
							{company.icon && <span className="mb-5">{company.icon}</span>}
							<div className="h-full"></div>
							<h3 className="text-sm font-semibold text-center">{company.title}</h3>
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
						{companies
							.filter((x) => x.description)
							.map((company) => (
								<CarouselItem className="lg:px-40 ">
									<div className="bg-white rounded-[15px] p-10">
										<p className="text-xl italic mb-3 text-primary font-thin max-w-5xl mx-auto leading-10">
											{company.description}
										</p>
										<p className="font-bold">{company.title}</p>
									</div>
								</CarouselItem>
							))}
					</CarouselContent>
					<div className="hidden xl:block">
						<CarouselPrevious />
						<CarouselNext />
					</div>
				</Carousel>
				<a href="/projecten" className="px-5 py-3 text-md font-semibold text-primary bg-white rounded-lg">
					Bekijk projecten
				</a>
			</div>
		</div>
	);
}

export default Reviews;
