import Link from "next/link";

function Footer() {
	const links = {
		general: [
			{ name: "Duurzaamheid", href: "/duurzaamheid" },
			{ name: "Projecten", href: "/projecten" },
			{ name: "Over ons", href: "/over-ons" },
		],
		company: [
			{ name: "Algemene voorwaarden", href: "/algemene-voorwaarden" },
			{ name: "Contact", href: "/contact" },
		],
	};
	return (
		<footer className="bg-primary">
			<div className="flex flex-col lg:flex-row px-5 justify-between py-20 xl:pl-2 max-w-5xl mx-auto text-white">
				<div className="mb-20">
					<h4 className="text-md font-semibold mb-5">Over Indumax</h4>
					{links.general.map((link, i) => (
						<Link href={link.href} className="block mb-1 font-light">
							{link.name}
						</Link>
					))}
				</div>
				<div className="mb-20">
					<h4 className="text-md font-semibold mb-5">Indumax B.V.</h4>

					{links.company.map((link, i) => (
						<Link href={link.href} className="block mb-1 font-light">
							{link.name}
						</Link>
					))}
				</div>
				<div className="mb-20">
					<h4 className="text-md font-semibold mb-5">Over Indumax</h4>
					<p className="font-semibold">Hoofdkantoor:</p>
					<p className="mb-8 font-light">
						Dennenlaan 9
						<br />
						5271 RE Sint-Michielsgestel
					</p>

					<p className="mb-8 font-light">
						+31 (0) 6 82 27 41 51 <br />
						info@indumax.nl
					</p>

					<p>KvK: 70916446</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
