import Image from "next/image";

import depelikaan from "@/public/images/depelikaan.jpg";
import dutchmasterroasters from "@/public/images/dutchmasterroasters.jpeg";
import koffielust from "@/public/images/filtersysteem-customization.png";
import guldentas from "@/public/images/guldentas.png";
import pureflavor from "@/public/images/hero.png";
import koffielovers from "@/public/images/koffielovers.png";
import dekoffiethuiswinkel from "@/public/images/koffiethuiswinkel.png";
import probat from "@/public/images/probat.png";
function Projects() {
	const subject = [
		{
			title: "Filter systeem in de penitentiaire inrichting voor Koffiebranderij Koffielust",
			description:
				"Deze unieke koffiebranderij brandt zijn koffie midden in de penitentiaire inrichting van Veenhuizen. Hierbij krijgen gedetineerden met een afstand tot de arbeidsmarkt de kans om te helpen met het branden van koffiebonen. Met name in de penitentiaire inrichting is kwaliteit, effectiviteit en veiligheid belangrijk. Voor deze unieke koffiebranderij hebben wij de ECO-25 filterinstallatie mogen leveren die zijn aangesloten op twee Giessen koffiebranders. Met een automatisch verstelbare klep wordt valse lucht voorkomen.",
			quote: {
				author: "Aldus Mark ter Maat, eigenaar Koffiebranderij Koffielust B.V.",
				text: "Met name de open houding van Onno werkte voor ons erg goed. Ik weet wat ik koop en daarnaast weet ik dat er vanuit Indumax goed met mij meegdacht wordt naar een passende oplossing. Ik kan Indumax ten zeerste aanbevelen aan andere branderijen.",
			},
			image: koffielust,
			imageClasses: "bg-right",
			button: {
				text: "Goedgekeurd door de omgevingsdienst",
				link: "#",
			},
		},
		{
			title: "Probat AG",
			description:
				"<p>Al jarenlang zijn wij OEM Partner van PROBAT. Wij leveren alle duurzame filter installaties voor de shop roaster series van PROBAT. Er zijn vele use cases verspreid over de gehele wereld.<br/><br/>Deze prettige relaties zorgt ervoor dat we onze machines aan de hoogste kwaliteitseisen dienen te voorzien. In 2023 hebben we onze laatste laboratorium test uitgevoerd in samenwerking met PROBAT om de hoogste kwaliteit te leveren. Tijdens dit onderzoek hebben we onze nieuwste innovaties getest om een zo hoog mogelijk filter rendement te kunnen leveren. Wij zijn trots dat we al jaren leverancier van PROBAT mogen zijn.<br/><br/>Nieuwsgierig?</p>",
			image: probat,
			imageClasses: "bg-center",
			button: {
				text: "Bekijk onze brochure",
				link: "#",
			},
		},
		{
			title: "Geurfilter goedgekeurd voor DeKoffieThuisWinkel.nl",
			description:
				"<p>De omgeving van de koffiethuiswinkel had enige tijd last van geur tijdens het branden van koffie.<br/><br/>Hierop werd Indumax benaderd en vervolgens hebben wij dit prettig kunnen oplossen voor de branderij van dekoffiethuiswinkel. Als oplossing is er een Eco-5 filter systeem gekoppeld aan de PROBAT brander. De buurtbewoners en omliggende bedrijven ervaren hierdoor geen overlast meer. De omgevingsdienst heeft een inspectie uitgevoerd waarbij verschillende testen en een validatie is uitgevoerd. Met succes, want er is goedkeuring gegeven op de opstelling door de omgevingsdienst.</p>",
			image: dekoffiethuiswinkel,
			button: {
				text: "Goedgekeurd door de gemeente",
				link: "#",
			},
		},
		{
			title: "Dutch Master Roasters B.V.",
			description:
				"<p>Dutch Master Roasters produceert koffiebranders voor koffiebranderijen. Indumax werd benaderd om filters te ontwikkelen om geur en uitstoot te reduceren.<br/><br/>Voor dit kwalitatieve merk hebben wij de premium filters ontwikkeld voor alle typen koffiebranders.</p>",
			image: dutchmasterroasters,
			imageClasses: "bg-bottom",
			button: {
				text: "Bekijk validatierapport",
				link: "#",
			},
		},
		{
			title: "Koffielovers gebruikt filter systeem Indumax",
			description:
				"Al een geruime tijd zocht koffiebranderij koffielovers naar geschikte oplossing tegen geur. Vele verschillende bedrijven hebben tevergeefs geprobeerd om een oplossing te geven. Via via kwam koffielovers bij ons uit en wij hebben dit natuurlijk zo snel mogelijk kunnen regelen aangezien de omgeving dienst ging keuren. Doormiddel van een ECO-25 filter hebben we dit kunnen voltooien.",
			quote: {
				author: "Rik Oostdam, Eigenaar Koffiebranderij Koffie Lovers",
				text: "Ik raad de filter systemen van Indumax graag aan voor andere koffiebranderijen. De filters zijn effectief en de communicatie met Indumax werkt prettig. Mocht u twijfelen, dan bent u altijd welkom om onze brandopstelling en filter systeem te bekijken.",
			},
			image: koffielovers,
			imageClasses: "bg-center",
			button: {
				text: "Goedgekeurd door de omgevingsdienst",
				link: "#",
			},
		},
		{
			title: "Pure Flavor koffiebranderij",
			description:
				"Koffiebranderij Pure Flavor is gevestigd op een bedrijventerrein in ‘s-Hertogenbosch. Een woonwijk ligt naast dit terrein. Om geuroverlast te voorkomen heeft eigenaar Wouter ons benaderd. Pure Flavor maakt gebruik van de nieuwste Kuban 50KG brander. Om geur en uitstoot te reduceren hebben wij een Eco-50 filter systeem geleverd. De Eco-50 filter is aangesloten op zowel de brand als koel lucht om een optimale reiniging te realiseren. Geuroverlast voor een omgeving komt veelal door beide lucht stromen en wordt regelmatig onderschat. Het systeem is daarbij uitgebreid met voorfiltratie cassettes om etherische oliën aftevangen. Dit zorgt ervoor dat het filtermedium een langere levensduur heeft. Daarbij zijn etherische oliën slecht voor het klimaat omdat ze niet goed afbreken in het milieu. Wouter bedankt voor het vertrouwen!",
			quote: {
				author: "Wouter Scholten eigenaar Koffiebranderij Pure Flavor",
				text: "Ik ben blij met de samenwerking tussen Indumax en onze branderij. Het was voor ons spannend om de eerste Eco-50 te bestellen, maar door het continue meedenken en de korte communicatie lijnen met Onno ging het allemaal goed. De filterinstallatie zorgt ervoor dat wij zorgeloos kunnen focussen op het koffiebranden. Ik zal Indumax zeker aanraden, en mocht u de filter installatie willen bekijken bent u altijd welkom bij onze branderij.",
			},
			image: pureflavor,
			imageClasses: "bg-right",
			button: {
				text: "Goedgekeurd door de omgevingsdienst",
				link: "#",
			},
		},
		{
			title: "Koffiebranderij Gulden Tas",
			description:
				"Al ruim 20 jaar maakt koffiebranderij Gulden Tas gebruik van het filtersysteem dat wij vroeger hebben ontwikkeld. Gulden Tas is een ambachtelijke familiebedrijf dat net zoals Indumax van vader tot zoon wordt overgedragen. Gulden Tas is echt een begrip in België voor hun koffie en kennis. Vele jaren geleden heeft onze grootvader Ruud Mallant hier zijn eerste machines geleverd. Nog steeds werkt deze installatie naar behoren en wordt jaarlijks het onderhoud uitgevoerd. Wij zijn trots om met Gulden Tas deze lange en prettige samenwerking te hebben.",
			image: guldentas,
			imageClasses: "bg-center",
		},
		{
			title: "Koffiebranderij De Pelikaan",
			description:
				"Voor koffiebranderij De Pelikaan hebben wij een Eco-15 luchtfilter geleverd. Deze filter zorgt voor het reduceren van geur bij koffiebranders tot 15 kg. De geschiedenis van De Pelikaan gaat meer dan 200 jaar terug. Wij zijn blij dat we koffiebranderij De Pelikaan en de buurt kunnen ontzorgen met een geur oplossing.",
			quote: {
				author: "Johan Wassink, eigenaar koffiebranderij De Pelikaan",
				text: "Wij hebben voor Indumax gekozen door de goede referenties op geur reducties en duurzaamheid. We zijn erg tevreden over de prestaties en de robuustheid van de Eco-15 filter.",
			},
			image: depelikaan,
			imageClasses: "bg-center",
		},
	];
	return (
		<div className="bg-[#435558]/30 py-20">
			<div className="max-w-5xl mx-auto">
				<div className="flex flex-col gap-10 p-5 lg:p-0">
					{subject.map((item, i) => (
						<div className="grid grid-cols-1 lg:grid-cols-12">
							<div
								className={`col-span-1 lg:col-span-4 max-h-[300px] lg:max-h-none relative h-[250px] lg:h-full bg-cover bg-no-repeat ${item?.imageClasses}`}
								style={{ backgroundImage: `url(${item.image.src})` }}
							></div>
							<div className={`col-span-1 lg:col-span-8 bg-white p-10`}>
								<h5 className="tracking-widest font-semibold text-lg mb-2">{item.title}</h5>
								<div className="mb-5">
									<div
										dangerouslySetInnerHTML={{ __html: item.description }}
										className="text-sm font-thin"
									></div>

									{item.quote && (
										<div className="mt-10 ">
											<div className="text-sm">
												<p className="mb-5 font-thin italic">"{item.quote.text}"</p>
												<p className="font-semibold">{item.quote.author}</p>
											</div>
										</div>
									)}
								</div>

								{item.button && (
									<a
										href={item.button.link}
										className="inline-block px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg "
									>
										{item.button.text}
									</a>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Projects;
