import Image from "next/image";

export const productList = [
	{
		title: "ECO-5",
		image: <Image src="/images/eco-5.png" alt="" width={125} height={125} />,
		usps: [
			{
				icon: <Image src="/images/icon/009-filter.svg" alt="" width={32} height={32} />,
				text: "1 filter cassette",
			},
			{
				icon: <Image src="/images/icon/022-oven.svg" alt="" width={32} height={32} />,
				text: "Geschikt voor 1 - 5 KG koffiebranders",
			},
		],
		url: "/filtersystemen/eco-25",
	},
	{
		title: "ECO-15",
		image: <Image src="/images/eco-15.png" alt="" width={125} height={125} />,
		usps: [
			{
				icon: <Image src="/images/icon/009-filter.svg" alt="" width={32} height={32} />,
				text: "2 filter cassettes",
			},
			{
				icon: <Image src="/images/icon/022-oven.svg" alt="" width={32} height={32} />,
				text: "Geschikt voor 6-15 KG koffiebranders",
			},
		],
		url: "/filtersystemen/eco-15",
	},
	{
		title: "ECO-25",
		image: <Image src="/images/eco-25.jpg" alt="" width={125} height={100} />,
		usps: [
			{
				icon: <Image src="/images/icon/009-filter.svg" alt="" width={32} height={32} />,
				text: "4 filter cassettes",
			},
			{
				icon: <Image src="/images/icon/022-oven.svg" alt="" width={32} height={32} />,
				text: "Geschikt voor 16 - 25 KG koffiebranders",
			},
		],
		url: "/filtersystemen/eco-25",
	},
	{
		title: "ECO-50",
		image: <Image src="/images/eco-50.png" alt="" width={125} height={125} />,
		usps: [
			{
				icon: <Image src="/images/icon/009-filter.svg" alt="" width={32} height={32} />,
				text: "8 filter cassettes",
			},
			{
				icon: <Image src="/images/icon/022-oven.svg" alt="" width={32} height={32} />,
				text: "Geschikt voor 26-50 KG Koffiebranders",
			},
		],
		url: "/filtersystemen/eco-50",
	},
	{
		title: "Special-25",
		image: <Image src="/images/special-25.png" alt="" width={125} height={125} />,
		usps: [
			{
				icon: <Image src="/images/icon/009-filter.svg" alt="" width={32} height={32} />,
				text: "4 filter cassettes",
			},
			{
				icon: <Image src="/images/icon/022-oven.svg" alt="" width={32} height={32} />,
				text: "Geschikt voor 16 - 25 KG koffiebranders",
			},
		],
		url: "/filtersystemen/special-25",
	},
];
