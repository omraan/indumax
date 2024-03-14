import Image from "next/image";
import React from "react";

type textProps = {
	title: string;
	text?: string;
	sub?: {
		title?: string;
		text?: string;
		list?: {
			item?: string;
		}[];
	}[];
}[];

const text: textProps = [
	{
		title: "Definities",
		text: "In deze Algemene voorwaarden worden de navolgende definities gebruikt (waar enkelvoud wordt teveneervoud bedoeld):",
		sub: [
			{
				title: "Aanbod",
				text: "Door Indumax aangeboden Producten en/of Diensten, middels een aanbieding en/of offerte of een ander aanbod, kwalificeerbaar als de eenzijdige rechtshandeling van aanbod in de zin van artikel 6:217 Burgerlijk Wetboek.",
			},
			{
				title: "Aanvaarding",
				text: "De acceptatie van de Klant van het Aanbod van Indumax, kwalificeerbaar als de eenzijdige rechtshandeling van aanvaarding in de zin van artikel 6:217 Burgerlijk Wetboek, ten gevolge waarvan er een Overeenkomst in de zin van artikel 6:217 Burgerlijk Wetboek tot stand komt.",
			},
			{
				title: "Algemene voorwaarden",
				text: "De meest recente versie van de onderhavige Algemene voorwaarden van Indumax.",
			},
			{
				title: "Dag",
				text: "kalenderdag.",
			},
			{
				title: "Data",
				text: "gegevens over ammoniak, methaan, CO2, luchtvochtigheid en overige gerelateerde klimaatfuncties die door de Producten gegenereerd worden ten behoeve van de Klant.",
			},
			{
				title: "Derde(n)",
				text: "niet bij de Overeenkomst betrokken partij(en).",
			},
			{
				title: "Dienst(en)",
				text: "Alle diensten die door Indumax worden aangeboden, waaronder, maar niet uitsluitend, al hetgeen Indumax in het kader van de Overeenkomst verricht en/of maakt en/of uitvoert, alles in de ruimste zin van het woord, onder andere het leveren van de Producten en het adviseren van de Klant.",
			},
			{
				title: "Indumax",
				text: "Indumax B.V., statutair gevestigd te Sint-Michielgestel en met bezoekadres aan de Rooistaartstraat 1 (5271 VA) te Sint-Michielsgestel (KvK 86978276).",
			},
			{
				title: "Klant",
				text: "De rechtspersoon of natuurlijke persoon, die de opdracht tot het leveren van Producten en/of Diensten aan Indumax verstrekt.",
			},
			{
				title: "Metadata",
				text: "gegevens die iets zeggen over de Data.",
			},
			{
				title: "Overeenkomst",
				text: "Een overeenkomst die tussen Indumax en de Klant wordt gesloten in het kader van een door Indumax ontworpen (meet)systeem voor verkoop van Producten en/of Diensten.",
			},
			{
				title: "Partijen",
				text: "Indumax en de Klant.",
			},
			{
				title: "Product",
				text: "Datgene dat door Indumax wordt aangeboden, waaronder, maar niet uitsluitend sensors, meetsystemen, software inclusief producten en/of diensten – al dan niet digitaal – van Derden.",
			},
			{
				title: "Schriftelijk",
				text: "Per post of per e-mail.",
			},
		],
	},
	{
		title: "Identiteit van Indumax",
		sub: [
			{
				list: [
					{ item: "Naam: Indumax B.V." },
					{ item: "Adres: Dennenlaan 9" },
					{ item: "Postcode: 5271 RE Sint-Michielsgestel" },
					{ item: "Telefoonnummer: +31 (0) 82 27 41 51" },
					{ item: "E-mailadres: onno.mallant@indumax.nl" },
					{ item: "KvK-nummer: 70916446" },
					{ item: "BTW-nummer: [**]" },
				],
			},
		],
	},
	{
		title: "Toepasselijkheid",
		sub: [
			{
				text: "Deze Algemene voorwaarden zijn van toepassing op elk Aanbod en/of elke opdrachtbevestiging van Indumax, alle onderhandelingen tussen Indumax en de Klant, alle Producten, alle Diensten en op elke gesloten dan wel nog te sluiten Overeenkomst(en) met de Klant, alsmede op de uitvoering daarvan, met uitsluiting van andere voorwaarden en condities, tenzij Indumax uitdrukkelijk Schriftelijk heeft verklaard dat zodanige andere voorwaarden van toepassing zullen zijn. De toepasselijkheid van zodanige andere voorwaarden betreft dan uitsluitend die desbetreffende Overeenkomst.",
			},
			{
				text: "Van deze Algemene voorwaarden afwijkende bedingen binden Indumax slechts na Schriftelijke akkoordbevinding van Indumax en alleen voor de Overeenkomst waarop de akkoordbevinding betrekking heeIndumax. De overige bepalingen van de Algemene voorwaarden blijven onverkort van kracht.",
			},
			{
				text: "Verwijzing van de Klant naar de toepasselijkheid van haar eigen voorwaarden wordt door Indumax uitdrukkelijk afgewezen, tenzij zulks – voor elk geval afzonderlijk – uitdrukkelijk Schriftelijk is overeengekomen.",
			},
			{
				text: "Indien Indumax met de Klant meer dan eenmaal Overeenkomsten sluit, gelden ter zake alle volgende Overeenkomsten steeds de onderhavige Algemene voorwaarden, ongeacht of deze al dan niet (opnieuw) expliciet toepasselijk zijn verklaard en/of Indumax dienaangaande (opnieuw) aan haar informatieplicht heeft voldaan.",
			},
			{
				text: "Deze Algemene voorwaarden gelden tevens ten behoeve van door Indumax ingeschakelde Derden.",
			},
			{
				text: "De Klant verklaart uiterlijk ten tijde van de totstandkoming van de Overeenkomst een exemplaar van deze Algemene voorwaarden van Indumax te hebben ontvangen.",
			},
			{
				text: "De tekst van de Algemene voorwaarden zal langs elektronische weg aan de Klant, ter beschikking worden gesteld op zodanige wijze dat deze door de Klant, op een eenvoudige manier kan worden opgeslagen op een duurzame gegevensdrager. Indien dit redelijkerwijs niet mogelijk is, zal Indumax, voordat de Overeenkomst wordt gesloten, aangeven waar van de Algemene voorwaarden langs elektronische weg kan worden kennisgenomen, dan wel aangeven op welke wijze de Algemene voorwaarden bij Indumax zijn in te zien, waarbij zij op verzoek van de Klant zo spoedig mogelijk elektronisch of op andere wijze kosteloos worden toegezonden.",
			},
			{
				text: "Indumax behoudt zich het recht voor om de tekst van deze Algemene voorwaarden te allen tijde te herzien en zal de Klant van wijzigingen op de hoogte houden. Na bekendmaking zullen de nieuwe Algemene voorwaarden deel uitmaken van de contractuele relatie met Indumax.",
			},
			{
				text: "Bij strijdigheid tussen de tekst van de Algemene voorwaarden en de Overeenkomst, prevaleren de bepalingen van de Overeenkomst.",
			},
			{
				text: "Indien Indumax op enig moment haar rechten uit de Overeenkomst en/of de Algemene voorwaarden niet (onverwijld) uitoefent, laat dit onverlet haar recht en mogelijkheid om dit in de toekomst om haar moverende redenen (alsnog) te doen.",
			},
			{
				text: "Indien een van de bepalingen uit de Overeenkomst, dan wel deze Algemene voorwaarden nietig of vernietigbaar blijkt te zijn, zullen de Overeenkomst en Algemene voorwaarden voor het overige onverkort blijven gelden. Partijen zullen dan in overleg treden teneinde een nieuwe bepaling ter vervanging overeen te komen, welke bepaling zoveel als mogelijk in overeenstemming dient te zijn met het doel en de strekking van de nietige of de vernietigde bepaling",
			},
		],
	},
	{
		title: "Aanbod",
		sub: [
			{
				text: "Alle Aanboden van Indumax, en tevens de daarbij door Indumax verstrekte prijzen en overige gegevens, in welke vorm dan ook, zijn voor Indumax geheel vrijblijvend en binden Indumax niet. Elke door Indumax uitgegane Aanbod is geldig voor één maand na dagtekening van het Aanbod en komt na deze periode, indien niet geaccepteerd door de Klant, automatisch te vervallen. Indien door Indumax een nieuw Aanbod wordt gedaan, komt het vorige Aanbod te vervallen.",
			},
			{
				text: "Elk van Indumax uitgegane Aanbod is gebaseerd op uitvoering van de Overeenkomst door Indumax (en/of Derden) onder normale omstandigheden en gedurende normale werkuren (van maandag tot en met vrijdag tussen 9.00 en 17.00 uur). Indien overeengekomen met de Klant, kan Indumax ook buiten de normale werkuren de Overeenkomst uitvoeren",
			},
			{
				text: "De aanvaarding van het Aanbod door de Klant is onherroepelijk. Indien een vrijblijvend Aanbod door de Klant wordt aanvaard, heeft Indumax het recht het Aanbod binnen 3 (drie) Dagen na ontvangst van de Aanvaarding te herroepen.",
			},
			{
				text: "Afbeeldingen, tekeningen, prijzen en verdere door Indumax verstrekte informatie zijn aan wijzigingen onderhevig zonder voorafgaand bericht en binden Indumax niet.",
			},
			{
				text: "Indumax behoudt zich het recht voor om veranderingen aan te brengen in de Producten en/of Diensten die zijn afgebeeld op haar website, en om die daarop afgebeelde Producten en/of Diensten uit het assortiment te verwijderen.",
			},
			{
				text: "Indien Indumax een model of een demo toont, gebeurt dit slechts bij wijze van aanduiding en kunnen daaraan geen rechten worden ontleend. De te leveren Producten en/of Diensten kunnen van het model of de demo afwijken, in die zin dat de te leveren Producten en/of Diensten nieuwe versies en/of updates kunnen betreffen.",
			},
		],
	},
	{
		title: "Totstandkoming en uitvoering Overeenkomst",
		sub: [
			{
				text: "Een Overeenkomst tussen Indumax en de Klant komt tot stand na Aanbod van Indumax en Aanvaarding van dat Aanbod door de Klant, waarna Indumax de bestelling Schriftelijk zal bevestigen. Ook wordt de Overeenkomst geacht tot stand te zijn gekomen, voor zover van toepassing, indien Indumax uitvoering aan de bestelling geeft door het leveren van de Producten en/of Diensten aan de Klant.",
			},
			{
				text: "(Mondelinge) afspraken gemaakt tussen Partijen, dan wel toezeggingen gedaan door (ondergeschikten van) Indumax en/of tussenpersonen en/of Derden door Indumax ingeschakeld, worden pas van kracht na Schriftelijke bevestiging door Indumax aan de Klant.",
			},
			{
				text: "In het kader van de uitvoering van de Overeenkomst is Indumax bevoegd tussenpersonen of Derden in te schakelen.",
			},
			{
				text: "De Klant geeft Indumax nu reeds voor alsdan toestemming de Overeenkomst in gedeelten uit te voeren en ter zake hiervan telkens per deelaflevering Klant afzonderlijk te factureren. Iedere deelaflevering geldt als afzonderlijke aflevering in de zin van deze Algemene voorwaarden.",
			},
			{
				text: "De Klant garandeert alle door Indumax benodigde gegevens correct en volledig aan Indumax aan te leveren. Indumax is niet aansprakelijk voor enige tekortkoming en/of schade die voortvloeit uit, of in verband met, incorrecte of onvolledige gegevens verstrekt door de Klant aan Indumax.",
			},
			{
				text: "Specificaties van aan te sluiten componenten van Derden dienen voor de totstandkoming van de Overeenkomst door de Klant aangeleverd te worden. De Klant staat in voor de juistheid van de aangeleverde specificaties. Indien de aangeleverde informatie onjuist en/of onvolledig is, komt dit volledig voor rekening en risico van de Klant. De Klant vrijwaart Indumax voor elke aanspraak van Derden met betrekking tot het gebruik van, door of namens de Klant verstrekte specificaties.",
			},
			{
				text: "De Klant moet ervoor zorgen dat alle vergunningen, ontheffingen en andere beschikkingen of toestemmingen die noodzakelijk zijn om het werk op de geëigende wijze uit te voeren, tijdig zijn verkregen. De Klant is verplicht op eerste verzoek van Indumax een afschrift van de hiervoor genoemde bescheiden aan haar toe te zenden. Zo lang Indumax nog niet de verzochte afschriften heeft ontvangen van de Klant, mag Indumax haar werkzaamheden uit hoofde van de Overeenkomst opschorten.",
			},
		],
	},
	{
		title: "Duur van de Overeenkomst",
		sub: [
			{
				text: "De Overeenkomst wordt aangegaan voor een periode zoals nader aangegeven in de Overeenkomst.",
			},
			{
				text: "Indien de Overeenkomst wordt aangegaan voor bepaalde tijd eindigt de Overeenkomst na de overeengekomen duur of, indien de Overeenkomst wordt aangegaan voor bepaalde werkzaamheden en/of een project, eindigt de Overeenkomst na uitvoering daarvan, tenzij tussen Partijen Schriftelijk anders wordt overeengekomen",
			},
		],
	},
	{
		title: "Wijziging van de Overeenkomst",
		sub: [
			{
				text: "Indien tijdens de uitvoering van de Overeenkomst blijkt dat het voor een behoorlijke uitvoering noodzakelijk is om de te leveren Producten en/of Diensten te wijzigen of aan te vullen, zullen Partijen tijdig en in onderling overleg de Overeenkomst (inclusief eventuele overeengekomen prijsopgaven) aanpassen.",
			},
			{
				text: "Indien Partijen overeenkomen dat de Overeenkomst wordt gewijzigd of aangevuld, kan het tijdstip van voltooiing van de uitvoering daardoor worden beïnvloed. Indumax zal de Klant zo spoedig mogelijk hiervan op de hoogste stellen.",
			},
		],
	},
	{
		title: "Annulering",
		sub: [
			{
				text: "De Klant kan een Overeenkomst enkel annuleren met Schriftelijke toestemming van Indumax. Indumax kan, bij wijze van uitzondering, een annulering van de bestelling accepteren. Indien de Klant een bestelling desondanks geheel of gedeeltelijk annuleert, is de Klant gehouden aan Indumax alle met het oog op de uitvoering van de Overeenkomst redelijkerwijs reeds gemaakte kosten (kosten van voorbereiding, administratie e.d.), de werkzaamheden van Indumax en de winstderving door Indumax, te vermeerderen met BTW, aan Indumax te vergoeden, alles onverminderd het recht van Indumax op volledige vergoeding wegens winstderving, alsmede de overige uit de annulering voortvloeiende schade.",
			},
			{
				text: "Zodra Producten en/of Diensten door Indumax ter beschikking zijn gesteld aan de Klant, kan de Klant de Overeenkomst met betrekking tot die Producten en/of Diensten niet langer annuleren.",
			},
			{
				text: "Annulering door de Klant dient Schriftelijk te geschieden.",
			},
			{
				text: "Indumax mag om haar moverende redenen een (reeds bevestigde) bestelling annuleren. Indumax mag in ieder geval een bestelling annuleren indien, maar niet uitsluitend.",
				list: [
					{
						item: "- er sprake is van een foutieve prijs (kennelijke vergissing);",
					},
					{
						item: "- Indumax de overtuiging heeft de kwaliteit van de uit te voeren bestelling niet te kunnen waarborgen; en",
					},
					{
						item: "- Indumax de overtuiging heeft dat de bestelling niet aan de verwachting van de Klant zal voldoen.",
					},
				],
			},
			{
				text: "Indumax zal Schriftelijk kenbaar maken indien zij de bestelling wil annuleren. Indien de Klant in de situaties genoemd onder (b) en (c) toch uitvoering wenst van de bestelling, dan vervalt het recht van reclame, vervanging en restitutie van de Klant.",
			},
		],
	},
	{
		title: "Adviezen",
		sub: [
			{
				text: "De op de website van Indumax vermelde informatie en advisering gaat uit van normaal gebruik en/of verwerking van die informatie en/of advisering en/of de Producten en/of Diensten en onder normale omstandigheden, afhankelijk van de omstandigheden van het geval.",
			},
			{
				text: "De door Indumax verstrekte informatie en adviezen zijn van algemene en indicatieve aard en binden Indumax niet.",
			},
			{
				text: "Indumax is niet aansprakelijk voor enige tekortkoming en/of schade die voortvloeit uit, of in verband met, informatie en/of advisering op de website van Indumax.",
			},
		],
	},
	{
		title: "Prijzen",
		sub: [
			{
				text: "De door Indumax opgegeven prijzen zijn in Euro (€), exclusief BTW, (omzet)belastingen, heffingen, invoerrechten en verzendkosten.",
			},
			{
				text: "Voor zover geen vaste prijs wordt overeengekomen, zal de prijs worden vastgesteld op grond van werkelijk bestede uren. De prijs wordt berekend volgens de gebruikelijke uurtarieven van Indumax, tenzij een daarvan afwijkend (uur)tarief is overeengekomen in de Overeenkomst.",
			},
			{
				text: "Indumax is gerechtigd de prijs of het tarief te verhogen wanneer tijdens de uitvoering van de Overeenkomst blijkt dat de oorspronkelijk overeengekomen dan wel verwachte hoeveelheid werk aangevuld en/of gewijzigd dient te worden overeenkomstig artikel 7, in welk geval Indumax de Klant zal inlichten over de financiële gevolgen van de wijzigingen en/of aanvullingen.",
			},
			{
				text: "Het staat Indumax vrij bovenop de genoemde prijzen een meerprijs aan de Klant in rekening te brengen ten aanzien van de volgende kostenposten.",
				list: [
					{
						item: "de kosten van werkzaamheden ten gevolge van onjuist gebruik van de Producten en/of Diensten, alsook de kosten van het herstellen van defecten ten gevolge van bedieningsfouten en/of onjuiste omgevingscondities, waaronder, maar niet uitsluitend, vocht, stof of onjuiste bedrading; en/of.",
					},
					{
						item: "de kosten met betrekking tot de ondersteuning op netwerken en werkzaamheden in verband met toepassingssoftware, software updates en/of upgrades, dan wel conform instructie van de Klant, waarbij deze kosten op basis van nacalculatie aan de Klant in rekening zullen worden gebracht.",
					},
				],
			},
			{
				text: "Indumax heeft te allen tijde het recht om te bepalen dat bepaalde Producten en/of Diensten slechts vanaf een minimum hoeveelheid zullen worden geleverd.",
			},
			{
				text: "De Klant kan geen rechten ontlenen aan bonussen, kortingen of aanbiedingen die in het verleden door Indumax zijn gegeven.",
			},
		],
	},
	{
		title: "Betaling",
		sub: [
			{
				text: "De betaling van de facturen dient te geschieden binnen 14 (veertien) Dagen na factuurdatum, tenzij Schriftelijk anders is overeengekomen.",
			},
			{
				text: "Indien wenselijk kan Indumax de betaling laten verlopen via een automatische incasso.",
			},
			{
				text: "Voor de toegang tot en gebruik van de Data stuurt Indumax maandelijks aan het eind van de maand een factuur naar de Klant.",
			},
			{
				text: "Voor de levering en/of installatie van de Producten en/of Diensten zal betaling in de volgende termijnen plaatsvinden.",
				list: [
					{
						item: "14 (veertien) Dagen na aanvang van de Overeenkomst de eerste termijn factuur (30% van overeengekomen prijs) te zijn voldaan.",
					},
					{
						item: "14 (veertien) Dagen na levering van de Producten en/of Diensten de tweede termijn factuur (30% van de overeengekomen prijs) te zijn voldaan.",
					},
					{
						item: "34 (vierendertig) Dagen na levering van de Producten en/of diensten de laatste en derde termijn factuur (van 40% van de overeengekomen prijs) te zijn voldaan.",
					},
				],
			},
			{
				text: "Bezwaren tegen de hoogte van de facturen schorten de betalingsverplichting niet op. Indumax mag altijd vooruitbetaling van de factuur eisen.",
			},
			{
				text: "Alle betalingen van de Klant, hoe ook verricht, komen in de eerste plaats in mindering op de kosten, vervolgens in mindering op de verschenen rente en tenslotte in mindering van opeisbare facturen, in volgorde van de datum van facturen. Dit geldt ook als de Klant bij betaling vermeldt dat de betaling betrekking heeft op een factuur van latere datum.",
			},
			{
				text: "Alle betalingen dienen zonder enige aftrek, opschorting of verrekening te geschieden op de door Indumax aan te wijzen bankrekening.",
			},
			{
				text: "Indumax is te allen tijde gerechtigd alvorens te leveren, of met de levering voort te gaan, naar haar oordeel voldoende vooruitbetaling of zekerheid voor het nakomen van de betalingsverplichtingen van de Klant te verlangen, waarbij Indumax gerechtigd is verdere leveringen op te schorten indien de Klant aan dit verlangen niet tegemoet komt, ook in geval een vaste levertijd is overeengekomen, een en ander onverminderd het recht van Indumax vergoeding van schade te vorderen wegens te late c.q. niet-uitvoering van de Overeenkomst.",
			},
			{
				text: "Indien de Klant niet binnen de overeengekomen fatale termijn betaalt, is deze automatisch in verzuim en dient deze aan Indumax een rentevergoeding te voldoen gelijk aan de wettelijke handelsrente als bepaald in artikel 6:119a BW.",
			},
			{
				text: "De kosten van buitengerechtelijke invordering dient de Klant die in verzuim is geheel aan Indumax te vergoeden. De vergoeding van buitengerechtelijke incassokosten die de Klant moet voldoen, wordt vastgesteld conform de staffel als vastgelegd in artikel 2 van het Besluit vergoeding voor buitengerechtelijke incassokosten. Op basis van dit Besluit bedraagt de minimum vergoeding van incassokosten € 40,-. De buitengerechtelijke incassokosten voor een onderneming, niet zijnde een natuurlijk persoon of een eenmanszaak, bedragen 15% van het bedrag van de hoofdsom van de vordering met een minimale vergoeding van € 150,-.",
			},
			{
				text: "Indien de Klant in verzuim geraakt of in geval van liquidatie, (aanvraag van) faillissement, toelating van de Klant tot de wettelijke schuldsanering uit hoofde van de Wet Schuldsanering Natuurlijke Personen, ondercuratelestelling van de Klant, beslag of (voorlopige) surseance van betaling van de Klant of WHOA-regeling, zijn vanaf dat moment alle bij Indumax op de Klant openstaande vorderingen onmiddellijk opeisbaar.",
			},
			{
				text: "De Klant dient, voor zover van toepassing, een correct BTW-nummer aan Indumax door te geven. In geval een foutief BTW-nummer door de Klant wordt doorgegeven zal Klant aansprakelijk zijn voor mogelijke schade die Indumax hierdoor lijdt. Indumax zal zich het recht voorbehouden om de toepasselijke BTW door te belasten aan de Klant met betrekking tot de geleverde Producten en/of Diensten.",
			},
		],
	},
	{
		title: "Levering en installatie",
		sub: [
			{
				text: "Een door Indumax opgegeven levertijd of uitvoeringsperiode is indicatief. Levering geschiedt, tenzij Schriftelijk anders afgesproken, tijdens kantooruren (van maandag tot en met vrijdag tussen 9.00 en 17.00 uur).",
			},
			{
				text: "Tenzij Schriftelijk anders overeengekomen, vindt levering standaard plaats Ex Works (Incoterms meest recente versie). Onder fabriek wordt verstaan: het bezoekadres van Indumax.",
			},
			{
				text: "Indien de Klant zelf het vervoer van de Producten regelt, zal dit voor rekening en risico van de Klant plaatsvinden.",
			},
			{
				text: "Indumax is gerechtigd om leveringen van Producten in deelleveringen te leveren. Indien Indumax gebruik maakt van deelleveringen, kan Indumax per deellevering factureren.",
			},
			{
				text: "Indumax zal de Klant voor de levering van de Producten op de hoogte stellen van de verwachte levertijd zodra de Producten klaar zijn voor transport.",
			},
			{
				text: "De levertijd gaat in op de laatste van de volgende tijdstippen.",
				list: [
					{
						item: "de Dag van totstandkoming van de Overeenkomst;",
					},
					{
						item: "de Dag van ontvangst door Indumax van de voor de uitvoering van de Overeenkomst noodzakelijke informatie; of",
					},
					{
						item: "de Dag van ontvangst door Indumax van hetgeen volgens de Overeenkomst door de Klant eventueel bij vooruitbetaling dient te worden voldaan.",
					},
				],
			},
			{
				text: "Indien de termijn waarbinnen zal worden geleverd is uitgedrukt in dagen, wordt onder dag verstaan een werkdag, niet zijnde een rust- (zaterdag of zondag) of nationale feestdag.",
			},
			{
				text: "Indien een levering onverhoopt niet binnen de opgegeven termijn mocht kunnen geschieden dan zal Indumax de Klant hiervan, voor zover redelijkerwijs mogelijk, op de hoogte stellen en de Klant informeren over de nieuwe levertijd. In dat geval kan Indumax niet in verzuim en/of aansprakelijk worden gesteld. Overschrijding van de overeengekomen leveringstermijn geeft de Klant nimmer recht op (gedeeltelijke) niet-nakoming van enige jegens Indumax aangegane verplichting, waaronder nadrukkelijk begrepen betalingsverplichtingen, noch aanspraak op enige schadevergoeding, tenzij sprake is van opzet of grove schuld aan de zijde van Indumax, fouten van diens niet-leidinggevende personeelsleden hieronder nadrukkelijk niet begrepen.",
			},
			{
				text: "Het moment waarop de Producten en/of Diensten beschikbaar worden gesteld aan de Klant wordt gezien als het moment van levering en het moment waarop het risico van de Producten overgaat van Indumax op de Klant. Indien de Producten niet kunnen worden geleverd op de afgesproken leverdatum, omdat de Klant de Producten weigert of nalaat de levering in ontvangst te nemen, wordt dit wel gezien als het moment van levering en het moment waarop het risico ten aanzien van de Producten overgaat van Indumax op de Klant. In dit geval zal Indumax gerechtigd zijn de Producten op risico en voor rekening van de Klant op te slaan. Indumax zal de Producten niet ter beschikking stellen tot de Klant de additionele kosten van transport en opslag heeft voldaan. Indien de Klant de Producten niet binnen één maand vanaf de oorspronkelijk afgesproken levering alsnog afneemt, zal Indumax, na sommatie, gerechtigd zijn de Producten aan andere klanten te leveren of zich anderszins te ontdoen van de Producten, onverminderd Indumax haar recht om de kosten in verband met het opslaan van de Producten en de niet-afname door de Klant, alsmede eventuele schade, op de Klant te verhalen.",
			},
			{
				text: "Indien de productie van Indumax door enige oorzaak beperkt is, heeft Indumax het recht om de beschikbare Producten geheel naar eigen goeddunken te verdelen over haar klantenbestand en dit kan ertoe leiden, afhankelijk van de gegeven situatie, dat er aan de Klant minder Producten geleverd worden dan is overeengekomen in de Overeenkomst, dan wel dat slechts een gedeelte van (een) Product(en) worden geleverd, zonder dat voor Indumax enige verantwoordelijkheid of aansprakelijkheid jegens de Klant ontstaat voor eventuele daaruit voortvloeiende schade.",
			},
			{
				text: "Indien Indumax en de Klant overeenkomen dat Indumax de Producten bij de Klant installeert, dient de Klant zorg te dragen voor een geschikte locatie voor het opstellen van de Producten en/of Diensten, rekening houdend met een veilige en adequate toegangsroute ten behoeve van de installatie van de Producten en/of Diensten. De Klant dient tevens zorg te dragen voor de noodzakelijke en geschikte elektrische, netwerk en andere aansluitingen teneinde de Producten en/of Diensten te kunnen doen functioneren, waarbij de Klant de van overheidswege vastgestelde veiligheidseisen en de voorschriften van de lokale nutsbedrijven in acht moet nemen.",
			},
		],
	},
	{
		title: "Gebruiksrecht",
		sub: [
			{
				text: "Indumax stelt, voor zover van toepassing, aan de Klant op basis van de gesloten Overeenkomst de overeengekomen Producten en/of Diensten middels een account via de desktop en/of app voor gebruik ter beschikking. Alle rechten op de digitale Producten en/of Diensten, waaronder begrepen, maar niet beperkt tot applicaties en andere softwarediensten, komen toe aan Indumax en haar licentiegevers. De rechten op deze Producten en/of Diensten zullen nooit toekomen aan de Klant, behalve voor zover dat in deze Algemene voorwaarden of de Overeenkomst wordt bepaald.",
			},
			{
				text: "Met betrekking tot deze digitale Producten en/of Diensten die door Indumax enkel ter beschikking worden gesteld aan de Klant verleent Indumax (of haar licentiegever(s)) de Klant uitsluitend, zoals bepaald in en onder de voorwaarden van de Overeenkomst, een niet-exclusief, niet-overdraagbaar, niet-verpandbaar en niet-(sub)licentieerbaar en tijdelijk gebruiksrecht in de vorm van een licentie. De licentie wordt afgegeven enkel met betrekking tot het gebruik van de in de Overeenkomst genoemde digitale Producten en/of Diensten en tegen betaling van de in de Overeenkomst opgenomen vergoeding. Alle licentievoorwaarden worden beschreven door Partijen in de Overeenkomst.",
			},
			{
				text: "De Klant verkrijgt het recht de Data in te zien en te gebruiken. De Data kan ingezien worden door de Klant in de desktop en/of de app. Indumax mag de Data niet verstrekken aan Derden, tenzij Indumax daarvoor toestemming heeft verkregen van de Klant. Metadata mag door Indumax altijd verhandeld worden.",
			},
			{
				text: "Van de terbeschikkinggestelde Producten en/of Diensten kan gebruik worden gemaakt door de Klant voor de duur zoals overeengekomen in de Overeenkomst, vanaf het moment dat de Producten en/of Diensten zijn geleverd.",
			},
			{
				text: "Om toegang te krijgen tot en gebruik te maken van de Producten en/of Diensten, dient de Klant te beschikken over een account met inlogcode. Dit account met inlogcode dient de Klant zelf aan te maken op de website van Indumax dan wel de app. Een account mag enkel worden gebruikt door degene die het account heeft aangemaakt. De Klant is uitsluitend verantwoordelijk voor (het geheimhouden van) de inloggegevens en alle handelingen die via het account van de Klant worden verricht. Indumax mag ervan uitgaan dat de Klant daadwerkelijk degene is die zich aanmeldt op het account van de Klant. Indumax is niet aansprakelijk voor misbruik of verlies van de inloggegevens.",
			},
			{
				text: "Indumax kan verlangen dat de Klant de Producten en/of Diensten niet eerder in gebruik neemt dan nadat de Klant bij Indumax, diens toeleverancier of de producent van de Producten en/of Diensten één of meer codes, benodigd voor het gebruik, heeft verkregen.",
			},
			{
				text: "Indumax is steeds gerechtigd technische maatregelen te nemen ter bescherming van de Producten en/of Diensten tegen onrechtmatig gebruik en/of tegen gebruik op een andere wijze of voor andere doeleinden dan tussen Partijen is overeengekomen. De Klant zal nimmer technische voorzieningen die bedoeld zijn om de Producten en/of Diensten te beschermen, (laten) verwijderen of (laten) omzeilen. Indien de Klant onrechtmatig gebruik maakt van de Producten is Indumax gerechtigd de hosting op te schorten tot de Klant het onrechtmatige gebruik heeft gestopt.",
			},
			{
				text: "Het is de Klant nimmer toegestaan, dus ook niet in geval van faillissement van de Klant, de Producten en/of Diensten te verkopen, te verhuren, te vervreemden of daarop beperkte rechten te verlenen of op welke wijze, voor welk doel of onder welke titel dan ook ter beschikking van een derde te stellen. Evenmin zal de Klant een derde – al dan niet op afstand (online) – toegang geven tot de Producten en/of Diensten of de Producten en/of Diensten bij een derde ter hosting onderbrengen, ook niet indien de desbetreffende derde de Producten en/of Diensten uitsluitend ten behoeve van de Klant gebruikt.",
			},
			{
				text: "De Klant zal geen werkzaamheden, wijzigingen of uitbreiding en aanpassing van de digitale Producten en/of Diensten door Derden laten plaatsvinden zonder voorafgaande Schriftelijke toestemming van Indumax.",
			},
			{
				text: "De Klant zal erop toezien dat de Producten en/of Diensten uitsluitend conform de instructies, (bedienings)voorschriften, manuals e.d. worden gebruikt en de Producten en/of Diensten slechts door ter zake kundig personeel zullen worden bediend.",
			},
			{
				text: "De Klant is gehouden de Producten en/of Diensten overeenkomstig de aard en de bestemming als een goed huisvader te gebruiken en te beheren en eveneens -op eerste verzoek van FT-afdoende te verzekeren en de polis van deze verzekering ter inzage af te geven.",
			},
			{
				text: "De Klant zal desgevraagd onverwijld zijn medewerking verlenen aan een door of ten behoeve van Indumax uit te voeren onderzoek betreffende de naleving van de Algemene voorwaarden. De Klant zal op eerste verzoek van Indumax toegang tot zijn gebouwen en systemen verlenen. Indumax zal alle vertrouwelijke bedrijfsinformatie die hij in het kader van een onderzoek van of bij de Klant verkrijgt, voor zover die informatie niet het gebruik van de Producten en/of Diensten zelf betreIndumax, vertrouwelijk behandelen.",
			},
			{
				text: "Indien Indumax Producten en/of Diensten van derde partijen beschikbaar stelt aan de Klant, zullen de (licentie)voorwaarden van de desbetreffende derde partij in relatie tot de voornoemde Producten en/of Diensten van toepassing zijn op de relatie van Indumax en de Klant in plaats van bepalingen van deze Algemene voorwaarden die afwijken van die voorwaarden, mits de Klant de toepasselijkheid van die (licentie)voorwaarden van de derde partij Schriftelijk kenbaar heeft gemaakt bij de Klant en die voorwaarden ter beschikking worden gesteld aan de Klant voor of bij het sluiten van de Overeenkomst.",
			},
			{
				text: "Indien en voor zover de voornoemde (licentie)voorwaarden van een derde partij voor welke reden dan ook worden verondersteld niet van toepassing te zijn op de relatie tussen Indumax en de Klant, of niet van toepassing worden verklaard, zijn de bepalingen van deze Algemene voorwaarden volledig van toepassing.",
			},
			{
				text: "Indumax geeft geen garantie dat de Producten en/of Diensten van derde partijen waarnaar hiervoor werd verwezen geen (intellectuele eigendom) rechten van andere derde partijen schendt.",
			},
		],
	},
	{
		title: "Onderhoud",
		sub: [
			{
				text: "Een jaarlijks onderhoudsbezoek is inbegrepen in de Overeenkomst, waarbij Indumax de door haar geleverde Producten en/of Diensten zal inspecteren.",
			},
			{
				text: "De Klant zal de Producten en/of Diensten gedurende de Overeenkomst niet zelf onderhouden of door een Derde laten onderhouden.",
			},
			{
				text: "De Klant zal door haar geconstateerde gebreken en/of storingen in de Producten en/of Diensten terstond Schriftelijk gedetailleerd kenbaar maken aan Indumax.",
			},
			{
				text: "Indumax zal zich naar beste kunnen inspannen om, bij wijze van correctief onderhoud, de gebreken in de Producten en/of Diensten die voor haar rekening komen binnen een redelijke termijn te herstellen.",
			},
			{
				text: "Indumax is tevens gerechtigd tot het uitvoeren van preventief onderhoud aan de Producten en/of Diensten.",
			},
			{
				text: "De Klant zal Indumax desgevraagd in de gelegenheid stellen correctief en/of preventief onderhoud uit te voeren. Partijen zullen tevoren in goed overleg de werkdagen en tijdstippen waarop onderhoud plaats vindt met elkaar bespreken. De Klant verbindt zich diens medewerking en toegang te verlenen tot de benodigde ruimtes. Gedurende de periode van onderhoud heeft de Klant geen recht op vervangende Producten en/of Diensten.",
			},
			{
				text: "Indien het onderhoud ziet op softwarecomponenten van de Producten en dit onderhoud op afstand plaats kan vinden, zal Indumax Klant vooraf in kennis stellen van het onderhoud, en een schatting geven van de tijdsduur van het onderhoud en een eventueel daarmee samenhangede onderbreking van de Diensten en beschikbaarheid van de Producten. Een voorafgaande kennisgeving kan achterwege blijven indien de aard van het onderhoud dat rechtvaardigt.",
			},
			{
				text: "Uitgesloten van de verplichting tot herstel van gebreken zijn",
				list: [
					{
						item: "het herstel van gebreken die de Klant bij het aangaan van de Overeenkomst heeft aanvaard;",
					},
					{
						item: "het herstel van gebreken en/of verhelpen van storingen als gevolg van oorzaken die van buitenaf komen;",
					},
					{
						item: "het herstel van gebreken en/of verhelpen van storingen die aan de Klant, haar personeel en/of door de Klant ingeschakelde Derden kunnen worden toegerekend;",
					},
					{
						item: "het herstel van gebreken en/of verhelpen van storingen die het gevolg zijn van ongeautoriseerd aan de Producten en/of Diensten aangebrachte wijzigingen of toevoegingen;",
					},
					{
						item: "het herstel van gebreken die zodanig zijn dat zij aan het beoogde gebruik van de Producten en/of Diensten niet in de weg staan.",
					},
				],
			},
			{
				text: "Indumax is steeds gerechtigd ervoor te kiezen herstel van gebreken en/of het verhelpen van storingen achterwege te laten en de Producten en/of Diensten door andere, soortgelijke, maar niet noodzakelijkerwijs identieke Producten en/of Diensten te vervangen.",
			},
			{
				text: "Indumax is niet gehouden tot herstel of reconstructie van verloren gegane gegevens. De Klant kan evenmin enige vergoeding vorderen voor verloren gegane gegevens..",
			},
			{
				text: "Bij preventief en correctief onderhoud en/of herstel door Indumax is de Klant de daaraan verbonden kosten (zoals maar niet beperkt tot uren monteur, voorrijkosten, materiaalkosten) volgens de gebruikelijke tarieven van Indumax verschuldigd. Indumax zal deze kosten apart factureren aan de Klant.",
			},
		],
	},
	{
		title: "Eigendomsvoorbehoud",
		sub: [
			{
				text: "Alle door Indumax geleverde Producten, hetzij verwerkt, hetzij onverwerkt, blijven eigendom van Indumax, totdat de Klant alle verplichtingen uit de tussen Partijen gesloten Overeenkomst is nagekomen.",
			},
			{
				text: "De Klant is niet bevoegd de onder het eigendomsvoorbehoud vallende Producten te verkopen, te verpanden of op enige andere wijze over te dragen of te bezwaren, tenzij dit gebeurt in de normale bedrijfsuitoefening van de Klant met voorafgaande uitdrukkelijke Schriftelijke toestemming van Indumax. Dit artikel heeft goederenrechtelijke werking in de zin van artikel 3:83 BW.",
			},
			{
				text: "Indien Derden beslag leggen op de onder eigendomsvoorbehoud geleverde Producten dan wel rechten daarop willen vestigen of doen gelden, is de Klant verplicht Indumax zo snel mogelijk daarvan op de hoogte te stellen.",
			},
			{
				text: "Voor het geval dat Indumax haar in dit artikel aangeduide eigendomsrechten wil uitoefenen, geeft de Klant reeds nu onvoorwaardelijke en niet herroepbare toestemming aan Indumax of door deze aan te wijzen Derden om al die plaatsen te betreden waar de eigendommen van Indumax zich bevinden en die zaken mede terug te nemen.",
			},
		],
	},
	{
		title: "Klachten",
		sub: [
			{
				text: "De Klant is verplicht de geleverde Producten en/of Diensten te controleren zodra zij deze heeft ontvangen. De Klant moet onder andere nagaan of de Producten en/of Diensten voldoen aan de kwaliteit en kwantiteit van hetgeen is overeengekomen tussen Partijen.",
			},
			{
				text: "Klachten over uiterlijk zichtbare tekortkomingen dienen Schriftelijk te worden medegedeeld door de Klant aan Indumax binnen 3 (drie) Dagen na levering van de Producten en/of Diensten, onder opgave van een beschrijving van het gebrek. Later ingediende klachten worden niet geaccepteerd.",
			},
			{
				text: "Klachten over niet-uiterlijk zichtbare tekortkomingen dienen Schriftelijk te worden medegedeeld door de Klant aan Indumax binnen 3 (drie) Dagen na ontdekking maar uiterlijk binnen (2) twee maanden na levering onder opgave van een beschrijving van het gebrek, welke periode wordt gezien als vervaltermijn. Later ingediende klachten worden niet geaccepteerd.",
			},
			{
				text: "Klachten over facturen die verzonden zijn door Indumax dienen binnen 5 (vijf) Dagen na factuurdatum aan Indumax te zijn medegedeeld onder opgave van een beschrijving van het gebrek, welke periode gezien wordt als vervaltermijn. Later ingediende klachten worden niet geaccepteerd.",
			},
			{
				text: "Klachten met betrekking tot door de Klant verkeerd bestelde aantallen, volumes en/of productsoorten worden door Indumax niet geaccepteerd.",
			},
			{
				text: "De Klant moet aan Indumax de mogelijkheid geven om de gegrondheid van de klacht te onderzoeken. Hierbij is Indumax of een door Indumax aangewezen Derde gerechtigd tot toegang tot de defecte Producten en/of Diensten. Tevens zullen relevante gegevens worden geregistreerd met betrekking tot de gebruiksgeschiedenis van de betreffende Producten en/of Diensten, welke gegevens beschikbaar zijn voor inspectie door Indumax of een door Indumax aangewezen derde. Zo dient er onder andere geregistreerd te worden wanneer Producten en/of Diensten door de Klant worden bewerkt en hoe de Producten en/of Diensten worden bewerkt.",
			},
			{
				text: "Klachten worden niet in behandeling genomen, indien:",
				list: [
					{
						item: "- het aankoopbewijs van de Producten en/of Diensten niet beschikbaar is voor inspectie door Indumax of het serienummer van de Producten niet duidelijk leesbaar is;",
					},
					{
						item: "- sprake is van geringe afwijkingen in kwaliteit, kwantiteit, materiaal, afmeting, kleur en andere afwijkingen die in de branche toelaatbaar worden geacht;",
					},
					{
						item: "- sprake is van een afwijking van de Producten en/of Diensten van een afbeelding in een catalogus, brochures en ander promotiemateriaal van Indumax of op de website;",
					},
					{
						item: "- een defect voortvloeit uit tekening, schets, ontwerp, specificatie, materiaal of informatie verstrekt of ter beschikking gesteld door de Klant;",
					},
					{
						item: "- de Producten en/of Diensten door Derden is gerepareerd of bewerkt zonder Schriftelijke toestemming van Indumax en/of niet volgens de instructies van Indumax en/of wanneer er ongeautoriseerde wijzigingen zijn aangebracht aan de Producten en/of Diensten;",
					},
					{
						item: "- de geleverde Producten en/of Diensten aan abnormale omstandigheden, in de ruimste zin des woords, is blootgesteld, of anderszins onzorgvuldig, dan wel in strijd met de aanwijzingen van Indumax is behandeld;",
					},
					{
						item: "- de Producten en/of Diensten niet conform de door Indumax afgegeven documentatie, instructies, handleidingen, manuals e.d. zijn gebruikt;",
					},
					{
						item: "- de Producten en/of Diensten niet conform door Indumax afgegeven installatievoorschriften zijn geïnstalleerd; of",
					},
					{
						item: "- de bedrading van de Producten en/of Diensten niet correct is of de Producten en/of Diensten niet heeft gefunctioneerd binnen de gegeven elektrische waarden, bedrijfsgrenzen en omgevingsomstandigheden die zijn verstrekt in specificaties, toepassingsrichtlijnen, IEC-normen of enig ander document dat met de Producten en/of Diensten is meegeleverd; of",
					},
					{
						item: "- de Producten en/of Diensten niet zijn gebruikt conform de geldende normen, voorschriften, veiligheids-, bedrijfstak- en/of elektriciteits-normen voor de relevante regio.",
					},
				],
			},
			{
				text: "Klachten van klanten van de Klant worden niet in behandeling genomen en zullen worden doorverwezen naar de Klant. Enkel de Klant kan gebreken bij Indumax kenbaar maken en aanspraak maken op de door Indumax gegeven garanties.",
			},
			{
				text: "Bij onterechte klachten staat het Indumax vrij de kosten van onderzoek in rekening te brengen bij de Klant.",
			},
			{
				text: "Een beroep op dit artikel schort de betalingsverplichting van de Klant niet op.",
			},
		],
	},
	{
		title: "Garanties",
		sub: [
			{
				text: "Indumax staat in voor de deugdelijkheid van de door haar geleverde Producten en/of Diensten in overeenstemming met hetgeen de Klant krachtens de Overeenkomst en de door de Klant aan Indumax verstrekte informatie redelijkerwijze mag verwachten. Indumax biedt voor haar Producten 12 (twaalf) maanden fabrieksgarantie.",
			},
			{
				text: "Garanties zien niet op de volgende schadeposten.",
				list: [
					{
						item: "- arbeidsloon, (de-)montage en/of (de-)installatie (behoudens de installatie door Indumax is verzorgd);",
					},
					{
						item: "- schade ontstaan door normale slijtage;",
					},
					{
						item: "- schade ontstaan door of als gevolg van nalatigheid, misbruik of incorrecte opslag, eigen installatie, reparatie, aanpassing of retourafhandeling van de Producten of delen daarvan; of",
					},
					{
						item: "- schade als gevolg van milieu- of stresstesten.",
					},
				],
			},
			{
				text: "Indumax geeft geen garanties op verkochte producten van Derden.",
			},
			{
				text: "Ter zake van door Indumax uitgevoerde inspecties, advisering en soortgelijke verrichtingen wordt geen garantie gegeven.",
			},
			{
				text: "Indumax staat er niet voor in dat applicaties of andere softwarediensten foutloos zijn en zonder onderbrekingen functioneren. Indumax zal zich inspannen om fouten in de software of de onderliggende programmatuur binnen een redelijke termijn te herstellen, indien en voor zover het onderliggende programmatuur betreft die door Indumax zelf is ontwikkeld, en de desbetreffende fouten door de Klant overeenkomstig de relevante bepalingen van  artikel 16 bij Indumax zijn gemeld. Indumax kan in voorkomend geval het herstel van de fouten uitstellen totdat een nieuwe versie van de onderliggende programmatuur in gebruik wordt genomen. Indumax staat er niet voor in dat fouten in de applicaties of andere softwarediensten die niet door Indumax zelf zijn ontwikkeld, zullen worden verholpen. Indumax is gerechtigd tijdelijke oplossingen, dan wel programma-omwegen of probleem vermijdende beperkingen, in de Producten en/of Diensten aan te brengen. Indien (een onderdeel van) de applicaties of andere softwarediensten in opdracht van de Klant is ontwikkeld en Indumax bereid is herstelactiviteiten te verrichten, kan Indumax volgens haar gebruikelijke tarieven de kosten van herstel aan de Klant in rekening brengen. Indumax is niet gehouden tot herstel van andere onvolkomenheden dan bedoeld in dit artikellid.",
			},
			{
				text: "Producten en/of Diensten, die door Indumax als gebrekkig worden aangemerkt, zullen naar keuze van de Indumax ofwel hersteld worden, indien mogelijk, ofwel vervangen worden door eenzelfde of een soortgelijk Product en/of Dienst, ofwel zal de verkoopprijs zonder bijkomende kosten worden vergoed aan de Klant, met uitsluiting van enige andere (aanvullende) aansprakelijkheid voor schadevergoeding.",
			},
			{
				text: "Indien de Klant Producten en/of Diensten aan Indumax wil retourneren mag dit alleen na Schriftelijke goedkeuring van Indumax, waarbij de retournering plaatsvindt voor rekening en risico van de Klant, tenzij Schriftelijk anders is overeengekomen.",
			},
			{
				text: "Mocht de Klant Producten en/of Diensten terugzenden zonder toestemming van Indumax, kan Indumax de Producten en/of Diensten niet in ontvangst nemen en zal de retourzending bij aankomst worden geweigerd. De daaruit voortvloeiende kosten zullen door Indumax niet worden vergoed.",
			},
			{
				text: "De niet aan de specificaties beantwoordende of gebrekkige Producten en/of Diensten worden eigendom van Indumax zodra deze zijn vervangen of geretourneerd.",
			},
			{
				text: "Geen enkele vertegenwoordiger, distributeur of dealer is bevoegd om namens Indumax de bepalingen van de garanties op welk punt dan ook te vervangen, wijzigen of verruimen.",
			},
			{
				text: "Met inachtneming van toepasselijke dwingendrechtelijke bepalingen gelden de expliciete garanties zoals uiteengezet in dit artikel 17 uitsluitend rechtstreeks voor de Klant en niet voor zijn klanten, agenten of vertegenwoordigers.",
			},
		],
	},
	{
		title: "Aansprakelijkheid",
		sub: [
			{
				text: "In geval van een toerekenbare tekortkoming in de nakoming aan haar zijde is de aansprakelijkheid van Indumax voor schade beperkt tot de dekking die de (aansprakelijkheids)-verzekering biedt dan wel tot het bedrag van de factuurwaarde van één kalenderjaar van de betreffende Producten en/of Diensten waarmee de schade samenhangt. De schadebeperkingen gelden niet in het geval van grove schuld of opzet van de directie of leidinggevende van Indumax.",
			},
			{
				text: "Onder schade wordt uitsluitend directe schade verstaan, bestaande uit:",
				list: [
					{
						item: "- de redelijke kosten ter vaststelling van de oorzaak en de omvang van de schade, voor zover de vaststelling betrekking heeft op schade in de zin van deze Algemene voorwaarden en er daadwerkelijk sprake is van schade en van aansprakelijkheid van FT;",
					},
					{
						item: "- de eventuele redelijke kosten gemaakt om de gebrekkige prestatie van Indumax aan de Overeenkomst te laten beantwoorden, tenzij dit gebrek niet aan Indumax kan worden toegerekend; en",
					},
					{
						item: "- redelijke kosten gemaakt ter voorkoming of beperking van de schade, voor zover de Klant aantoont deze schade te hebben geleden, en dat deze kosten ook daadwerkelijk hebben bijgedragen aan het beperken van de schade.",
					},
				],
			},
			{
				text: "Indumax is niet aansprakelijk voor indirecte schade, daaronder begrepen, maar niet beperkt tot enige gevolgschade van de Klant zoals derving van inkomsten, vertragingsschade, gederfde winst, gemiste besparingen, verminderde goodwill, verlies van reputatie, schade als gevolg van aanspraken van afnemers van de Klant.",
			},
			{
				text: "Voorwaarde voor het ontstaan van enig recht op schadevergoeding is steeds dat de Klant de schade zo spoedig mogelijk na het ontstaan daarvan Schriftelijk bij Indumax meldt conform de in deze Algemene voorwaarden opgenomen termijnen.",
			},
			{
				text: "Indumax besteedt de nodige zorg aan de optimale werking en beveiliging van haar Producten en/of Diensten en de via haar Producten en/of Diensten verkregen gegevens, maar kan het resultaat van die zorg niet garanderen. Indumax aanvaardt dan ook dienaangaande geen enkele aansprakelijkheid voor enige aantasting, vernietiging, verlies, diefstal of corruptie van gegevens (waaronder ook verstaan persoonsgegevens) of voor schade die het gevolg is van een beveiligingslek, inbreuk of van de (on)beschikbaarheid van de Producten en/of Diensten. Evenmin is Indumax aansprakelijk voor schade als gevolg van onbevoegd of onrechtmatig gebruik van haar Producten en/of Diensten.",
			},
			{
				text: "De door Indumax aangeleverde informatie en/of materialen zijn van algemene en indicatieve aard en binden Indumax niet. Indumax aanvaardt geen aansprakelijkheid voor (gevolgen van) onjuistheden in de door de Klant of zijn medewerkers aangeleverde informatie. De Klant vrijwaart Indumax tegen alle aanspraken die voortvloeien uit de door Indumax aangeleverde informatie en/of materialen, evenals aanspraken die voortvloeien uit het nalatig, onrechtmatig en/of illegaal gebruik en beheer van de Producten en/of Diensten. Dit geldt ook indien de Klant aan Indumax de opdracht heeft gegeven tot het nalatig, onrechtmatig en/of illegaal handelen en hier door Indumax onwetend uitvoering aan is gegeven. De Klant vrijwaart Indumax van financiële schade ten gevolge van boetes van nalatig, onrechtmatig en/of illegaal handelen en beheer van de Producten en/of Diensten.",
			},
			{
				text: "De Klant draagt de verantwoordelijkheid om aan Indumax tijdig de relevante, juiste en volledige informatie ter beschikking te stellen die Indumax nodig heeft voor de uitvoering van de Overeenkomst. Indumax mag uitgaan van de volledigheid en juistheid van de verstrekte informatie. Indumax is niet verantwoordelijk en/of aansprakelijk voor eventuele schade en/of kosten die het gevolg zijn van gebreken in en/of het ontbreken van informatie die door de Klant ter beschikking is of had moeten worden gesteld, of van in de praktijk afwijkende omstandigheden dan waar Indumax, bij het aanvaarden van de Overeenkomst, vanuit mocht gaan.",
			},
			{
				text: "De Klant vrijwaart Indumax tegen aanspraken van Derden dat door de Klant aangeleverde materialen of informatie inbreuk maken op rechten van Derden.",
			},
			{
				text: "De Klant vrijwaart Indumax tegen alle mogelijke aanspraken van Derden, waaronder eindgebruikers, ter zake van enige (beweerdelijke) schade, uit welke hoofde dan ook, ontstaan door of in verband met de Overeenkomst en/of geleverde Producten en/of Diensten.",
			},
			{
				text: "Het gebruik van het gebruikersaccount is voor eigen rekening en risico van de Klant. Indumax aanvaardt derhalve geen enkele aansprakelijkheid voor het opslaan of uitwisselen van gegevens door middel van het gebruikersaccount.",
			},
		],
	},
	{
		title: "Opschorting en beëindiging Overeenkomst",
		sub: [
			{
				text: "Indumax is gerechtigd de Overeenkomst geheel of gedeeltelijk met onmiddellijke ingang zonder rechterlijke tussenkomst, Schriftelijk te ontbinden of op te schorten zonder tot schadevergoeding gehouden te zijn, en onverminderd het recht van Indumax om, in plaats van ontbinding of opschorting, nakoming te vorderen en onverminderd haar recht op schadevergoeding, indien.",
				list: [
					{
						item: "- de Klant tekortschiet in de nakoming van de op haar rustende verplichtingen en dit verzuim niet binnen 10 (tien) Dagen na verzenddatum van de ingebrekestelling is opgeheven;",
					},
					{
						item: "- de Klant onrechtmatig gebruik maakt van zijn gebruiksrecht onder de verleende licentie, zoals omschreven in artikel 13 en/of de Overeenkomst;",
					},
					{
						item: "- de Klant onrechtmatig gebruik maakt van de Producten en/of Diensten van Indumax, zoals bijvoorbeeld omschreven in artikel 23.4;",
					},
					{
						item: "- na het sluiten van de Overeenkomst aan Indumax omstandigheden ter kennis komen die goede grond geven te vrezen dat de Klant de verplichtingen uit de Overeenkomst niet kan nakomen;",
					},
					{
						item: "- de Klant (voorlopige) surseance van betaling aanvraagt dan wel dat aan hem surseance van betaling wordt verleend;",
					},
					{
						item: "- het faillissement van de Klant is aangevraagd dan wel de Klant in staat van faillissement is verklaard;",
					},
					{
						item: "- op een aanmerkelijk deel van het vermogen van de Klant beslag wordt gelegd of er sprake is van liquidatie van de Klant;",
					},
					{
						item: "- een regeling wordt getroffen met schuldeisers overeenkomstig de WHOA; of",
					},
					{
						item: "- de zeggenschap over de Klant of die over de aandeelhouder(s) van de Klant op enige wijze wijzigt.",
					},
				],
			},
			{
				text: "De Klant dient Indumax van bovenstaande omstandigheden onmiddellijk op de hoogte te stellen.",
			},
			{
				text: "Indien Indumax op grond van dit artikel de Overeenkomst ontbindt dan wel opschort, dan is elke (toekomstige) vordering van Indumax op de Klant direct opeisbaar.",
			},
			{
				text: "Uitgangspunt is dat de Klant de Overeenkomst niet voor het verstrijken van de initiële looptijd kan opzeggen. Wenst de Klant toch tot opzegging over te gaan, dan dient de Klant dit Schriftelijk aan te geven bij Indumax. Het staat Indumax vrij geen medewerking te verlenen aan een tussentijdse beëindiging van de Klant. Indien Indumax besluit wel medewerking te verlenen aan een tussentijdse beëindiging van de Klant, zijn alle (toekomstige) vorderingen van Indumax op de Klant direct opeisbaar en is de Klant verplicht om aan Indumax te voldoen alle (toekomstige) vorderingen op basis van de resterende looptijd van de Overeenkomst, vermeerderd met administratiekosten en eventuele ophaalkosten.",
			},
			{
				text: "Uitgangspunt is dat de Klant de Overeenkomst niet voor het verstrijken van de initiële looptijd kan opzeggen. Wenst de Klant toch tot opzegging over te gaan, dan dient de Klant dit Schriftelijk aan te geven bij Indumax. Het staat Indumax vrij geen medewerking te verlenen aan een tussentijdse beëindiging van de Klant. Indien Indumax besluit wel medewerking te verlenen aan een tussentijdse beëindiging van de Klant, zijn alle (toekomstige) vorderingen van Indumax op de Klant direct opeisbaar en is de Klant verplicht om aan Indumax te voldoen alle (toekomstige) vorderingen op basis van de resterende looptijd van de Overeenkomst, vermeerderd met administratiekosten en eventuele ophaalkosten.",
			},
			{
				text: "Op de dag van beëindiging van de Overeenkomst zal het account van de Klant verwijderd worden en zal Indumax de Data ontoegankelijk maken voor de Klant. Na beëindiging van de Overeenkomst is Indumax nog steeds gerechtigd de verkregen Metadata te verhandelen.",
			},
		],
	},
	{
		title: "Overmacht",
		sub: [
			{
				text: "n geval van tekortkoming door Indumax in de nakoming van de Overeenkomst welke tekortkoming is veroorzaakt door overmacht, zal Indumax nakoming van de Overeenkomst kosteloos mogen opschorten en derhalve niet gebonden zijn aan enige verplichting uit hoofde van een Overeenkomst. Indien Indumax niet in staat is om haar verplichtingen uit de Overeenkomst na te komen door een tijdelijke (meer dan 3 (drie) maanden) of blijvende situatie van overmacht, is Indumax gerechtigd om de Overeenkomst kosteloos te beëindigen zonder rechterlijke tussenkomst. De Klant heeft in geen enkel geval recht op vergoeding van enige schade, kosten en/of rente.",
			},
			{
				text: "In het geval van overmacht zal Indumax de Klant zo spoedig mogelijk van een dergelijke situatie op de hoogte stellen.",
			},
			{
				text: "Als niet toerekenbare tekortkoming aan de zijde van Indumax wordt, naast hetgeen daaromtrent in de wet en jurisprudentie wordt begrepen, verstaan alle van buitenkomende oorzaken, voorzien of niet-voorzien, waaronder in ieder geval, maar niet uitsluitend begrepen.",
				list: [
					{
						item: "- schade ten gevolge van natuurrampen en/of stormschade;",
					},
					{
						item: "- oorlog, oorlogsgevaar en/of elke andere vorm van gewapend conflict inclusief terrorisme of dreiging daarvan in Nederland en/of andere landen waardoor levering van Producten en/of Diensten wordt belemmerd;",
					},
					{
						item: "- werkstakingen, bedrijfsbezetting, gedwongen bedrijfssluiting, oproer en elke andere vorm van storing en/of belemmering door Derden veroorzaakt;",
					},
					{
						item: "- ziekte van een of meer bezwaarlijk te vervangen werknemers;",
					},
					{
						item: "- wetgevende of administratieve maatregelen van overheidswege waardoor leveringen worden belemmerd, hieronder begrepen in- en uitvoerverboden/ belemmeringen/ (gedeeltelijke) lockdowns;",
					},
					{
						item: "- gebrek en/of storingen in middelen van vervoer, productieapparatuur, enige machinerieën of energievoorzieningen;",
					},
					{
						item: "- beperkingen of stopzettingen van leveringen door de openbare nutsbedrijven;",
					},
					{
						item: "- brand, waterschade, storingen of ongevallen in het bedrijf van Indumax of van door Indumax ingeschakelde Derden;",
					},
					{
						item: "- niet of niet tijdige levering aan Indumax door toeleveranciers of andere Derden;",
					},
					{
						item: "- stagnatie in aanvoer van goederen, grondstoffen en/of energie;",
					},
					{
						item: "- epidemie en/of pandemie;",
					},
					{
						item: "- in beslagnemingen van voorraden en/of inventaris bij Indumax of bij door Indumax ingeschakelde Derden;",
					},
					{
						item: "- liquiditeitsproblemen bij Indumax en/of bij door Indumax ingeschakelde Derden;",
					},
					{
						item: "- uitval of onderbreking van elektrisch, netwerk- en/of telefoonsystemen, ransomware- en andere (online)aanvallen, computervirussen; en",
					},
					{
						item: "- alle overige oorzaken, buiten haar schuld of risicosfeer ontstaan.",
					},
				],
			},
			{
				text: "Indien Indumax in het geval van overmacht al gedeeltelijk aan haar verplichtingen heeft voldaan, dan wel deze gedeeltelijk zal nakomen, dient de Klant de voor dit deel verschuldigde prijs te voldoen aan Indumax.",
			},
		],
	},
	{
		title: "Derden en overdracht",
		sub: [
			{
				text: "De Klant krijgt de Producten en/of Diensten nimmer in eigendom en is derhalve niet gerechtigd deze of daaraan gerelateerde rechten op enige wijze over te dragen aan Derden.",
			},
			{
				text: "De Klant is niet gerechtigd om de Overeenkomst of een of meer van zijn rechten en verplichtingen uit hoofde van de Overeenkomst over te dragen.",
			},
			{
				text: "Een beperking, dan wel uitsluiting, van de overdraagbaarheid zoals genoemd in dit artikel heeft naast verbintenisrechtelijke werking ook goederenrechtelijke werking zoals bedoeld in artikel 3:83 Burgerlijk Wetboek.",
			},
			{
				text: "Het is Indumax toegestaan naar eigen inzicht de Overeenkomst, dan wel haar rechten en verplichtingen uit hoofde van de Overeenkomst, en/of de volledige eigendom van de Producten en/of Diensten over te dragen aan een derde partij. Door het accepteren van de gelding van de Algemene voorwaarden wordt de Klant geacht medewerking te verlenen aan een eventuele overdracht door Indumax.",
			},
		],
	},
	{
		title: "Niet-overname personeel",
		text: "De Klant zal gedurende de looptijd van de Overeenkomst alsmede één jaar na beëindiging daarvan, op generlei wijze, behoudens nadat goed zakelijk overleg ter zake heeft plaatsgehad met Indumax, medewerkers van Indumax of van ondernemingen waarop Indumax ter uitvoering van de Overeenkomst beroep heeft gedaan en die betrokken zijn (geweest) bij de uitvoering van de Overeenkomst direct of indirect voor zich laten werken, ronselen, aannemen en/of op enige wijze losweken van Indumax.",
	},
	{
		title: "Intellectueel eigendom",
		sub: [
			{
				text: "Alle rechten van intellectueel eigendom met inbegrip van, maar niet beperkt tot auteursrechten, merkenrechten, octrooien, databankrechten, morele rechten of ander vergelijkbare rechten of vormen van bescherming op de Producten en/of Diensten, Data, Metadata, software, gebruikersinterfaces, programmatuur, analyses, ontwerpen, werkwijzen, rapporten, modellen, afbeeldingen, tekeningen, foto’s, prototypes, drukwerk, bestanden, websites, websitecontent en dergelijke, inclusief maatwerk en op verzoek van de Klant gemaakte aanpassingen, berusten uitsluitend bij Indumax en haar licentiegevers. Er wordt geen enkel intellectueel eigendomsrecht verleent op de Producten en/of Diensten aan de Klant.",
			},
			{
				text: "Indumax is gerechtigd om Producten en/of Diensten die in opdracht van de Klant zijn ontwikkeld te gebruiken ten behoeve van haar portfolio, publiciteit en promotie.",
			},
			{
				text: "De Klant mag de handels- en dienstmerken van Indumax en haar licentiegevers alleen gebruiken voor zover dit nodig is om de Producten en/of Diensten te gebruiken. Dit gebruik verleent de Klant geen eigendom of andere gebruiksrechten, tenzij anders is bepaald in de Overeenkomst. De Klant mag aanduidingen van Indumax als rechthebbende niet verwijderen of onleesbaar maken.",
			},
			{
				text: "De Klant of een medewerker van de Klant zal de Producten en/of Diensten of enig deel daarvan niet overdragen aan of verspreiden naar anderen. Verveelvoudiging of openbaarmaking van de Producten en/of Diensten is verboden, tenzij dit noodzakelijk is voor het normale gebruik van de Producten en/of Diensten. Enige verspreiding, verveelvoudiging of openbaarmaking door de Klant of een medewerker van de Klant wordt gezien als materiële tekortkoming die niet kan worden hersteld. Dit geldt zowel tijdens als na de uitvoering van de Overeenkomst en is uitdrukkelijk en uitsluitend voorbehouden aan Indumax.",
			},
			{
				text: "De Klant krijgt geen toegang tot of kopie van de broncode van software en mag de broncode van software niet (laten) wijzigingen, aanpassen, vertalen, aan reverse engineering onderwerpen, decompileren of dissembleren en evenmin proberen op andere wijze te (laten) achterhalen wat de broncode van de software is. De Klant mag het installatieprogramma van zowel software als hardware niet aanpassen of wijzigen of een nieuw installatieprogramma maken. Gebruik van plug-ins of uitbreidingen die niet door Indumax zijn gedistribueerd en waarmee de Klant de software of hardware kan wijzigen, is verboden.",
			},
			{
				text: "Indumax vrijwaart de Klant tegen aanspraken van Derden die erop gebaseerd zijn dat de door Indumax zelf ontwikkelde Producten en/of Diensten inbreuk maken op een recht van intellectueel eigendom van die derde, onder de voorwaarde dat de Klant Indumax onverwijld Schriftelijk inlicht over het bestaan en de inhoud van de aanspraak en de afhandeling van de zaak geheel overlaat aan Indumax. De Klant zal daartoe alle en elke medewerking aan Indumax verlenen. Deze vrijwaring vervalt indien de verweten inbreuk verband houdt met:",
				list: [
					{
						item: "- door de Klant ter gebruik, bewerking, verwerking of onderhoud aan Indumax ter beschikking gestelde werken of materialen; of",
					},
					{
						item: "- wijzigingen die de Klant zonder Schriftelijke toestemming van Indumax in de Producten en/of Diensten heeft aangebracht of heeft laten aanbrengen.",
					},
				],
			},
			{
				text: "Indien in rechte onherroepelijk vaststaat dat de door Indumax zelf ontwikkelde Producten en/of Diensten inbreuk maken op enig aan een derde toebehorend recht van intellectuele eigendom, of indien naar het oordeel van Indumax een gerede kans bestaat dat een zodanige inbreuk zich voordoet, zal Indumax zo snel mogelijk – naar eigen keuze – zorgdragen dat de Klant de geleverde, of functioneel gelijkwaardige andere Producten en/of Diensten kan blijven gebruiken, bijvoorbeeld door aanpassing van de inbreukmakende onderdelen of door verwerking van een gebruiksrecht ten behoeve van de Klant bij de derde, of de Producten en/of Diensten terug te kopen voor de oorspronkelijke door de Klant betaalde prijs verminderd met de redelijke afschrijving, of enige Overeenkomst te beëindigen voor zover deze betrekking heeft op de betreffende Producten en/of Diensten.",
			},
		],
	},
	{
		title: "Geheimhouding",
		text: "Partijen erkennen het vertrouwelijke karakter van de Overeenkomst alsook van alle informatie en gegevens (waaronder ook verstaan persoonsgegevens), die zij in het kader van de Overeenkomst verkrijgen van de andere Partij en zullen deze geheim houden in zoverre die gegevens uitdrukkelijk als vertrouwelijk gekwalificeerd worden of redelijkerwijs als vertrouwelijk beschouwd kunnen worden. Deze informatie en gegevens mogen niet geheel of gedeeltelijk openbaar worden gemaakt zonder de Schriftelijke toestemming van de andere Partij.",
	},
	{
		title: "Gegevensbescherming",
		sub: [
			{
				text: "Indumax gaat zorgvuldig om met persoonsgegevens en handelt overeenkomstig de bepalingen van de AVG (Algemene Verordening Gegevens-bescherming). Voor meer informatie betreffende het gebruik van persoons-gegevens door Indumax, zie het Privacy statement op de website van Indumax.",
			},
			{
				text: "Indumax garandeert dat zij aan de Klant alle voor de Overeenkomst relevante informatie verstrekt, waaronder, maar niet uitsluitend, alle informatie over het doel waarvoor de Producten en/of Diensten zullen worden gebruikt, over de wijze van beoogd gebruik en verder alle informatie en overige (persoons)gegevens, waarvan de Klant redelijkerwijs kan begrijpen dat deze noodzakelijk zijn voor de uitvoering van de Overeenkomst.",
			},
			{
				text: "De Klant staat in voor de juistheid, actualiteit, volledigheid en betrouwbaarheid van de door of namens haar aan Indumax verstrekte (persoons)gegevens en informatie.",
			},
			{
				text: "Indien voor de uitvoering van de Overeenkomst noodzakelijke (persoons)gegevens niet, niet tijdig of niet overeenkomstig de afspraken aan Indumax ter beschikking zijn gesteld, zal Indumax niet aansprakelijk kunnen worden gehouden voor enige schade geleden door de Klant en heeft Indumax het recht om de daardoor bij haar ontstane kosten in rekening te brengen bij de Klant en de uitvoering van de Overeenkomst op te schorten.",
			},
			{
				text: "Voor zover en in het kader van de uitvoering van de Overeenkomst persoonsgegevens worden verwerkt door Indumax ten behoeve en in opdracht van de Klant, kwalificeert de Klant als verwerkingsverantwoordelijke en Indumax als verwerker. In dit kader sluiten Indumax en de Klant bij de Overeenkomst een door Indumax opgestelde verwerkersovereenkomst.",
			},
		],
	},
	{
		title: "Boetes",
		sub: [
			{
				text: "Indien de Klant handelt in strijd met artikel 13, 22, 23 en/of 24, dient de Klant Indumax een direct opeisbare boete te betalen ad € 10.000,- voor iedere inbreukmakende handeling, te vermeerderen met € 1.000,- voor iedere Dag dat de overtreding voortduurt zonder dat verzuim of ingebrekestelling is vereist en onverminderd het recht van Indumax om aanvullende en volledige schadevergoeding te vorderen van de Klant.",
			},
			{
				text: "De Klant erkent het belang van Indumax om de verplichtingen in de artikelen genoemd in voorgaand artikellid op te nemen en bevestigt dat de bedragen in voorgaand artikellid redelijk zijn.",
			},
		],
	},
	{
		title: "Overige bepalingen",
		sub: [
			{
				text: "De verplichtingen van de Klant uit hoofde van een Overeenkomst zijn ook van toepassing op de groepsmaatschappijen en toekomstige groepsmaatschappijen van de Klant, zoals bedoeld in artikel 2:24b BW. Elke actie (of nalaten) door een groepsmaatschappij van de Klant wordt geacht een actie (of nalaten) van de Klant te zijn.",
			},
			{
				text: "Indien een Overeenkomst wordt beëindigd blijven de artikelen uit deze AV die naar hun aard zijn om na beëindiging voort te duren tussen Partijen onverminderd van kracht.",
			},
		],
	},
	{
		title: "Toepasselijk recht en bevoegde rechter",
		sub: [
			{
				text: "Op deze Algemene voorwaarden, Aanboden, opdrachten, Producten, Diensten en Overeenkomsten met Indumax, dan wel alle overeenkomsten die daaruit voortvloeien en/of daarmee verband houden, is uitsluitend Nederlands recht van toepassing.",
			},
			{
				text: "Het Weens Koopverdrag is niet van toepassing op deze AV, enig Aanbod, opdracht of Overeenkomst tussen Partijen, dan wel enige overeenkomst die daaruit voortvloeit en/of daarmee verband houdt.",
			},
			{
				text: "Alle mogelijke geschillen die voortvloeien uit, of verband houden met, deze Algemene voorwaarden, Aanboden, opdrachten, Producten, Diensten en/of Overeenkomsten zullen bij uitsluiting worden voorgelegd aan de bevoegde rechter van de Rechtbank Oost-Brabant, locatie ’s-Hertogenbosch.",
			},
		],
	},
];

function Main() {
	return (
		<div>
			<div className="container text-gray-700 mb-20">
				<h2 className="text-3xl font-bold mb-10">
					Algemene verkoopvoorwaarden producten en diensten Indumax B.V.
				</h2>
				{text.map((x, i) => (
					<div key={i}>
						<h5 className="text-2xl font-bold mb-3">{`${i + 1} ${x.title}`}</h5>
						<p className="text-md mb-10">{x.text && x.text}</p>

						{x.sub &&
							x.sub.map((sub, i2) => (
								<div key={i2}>
									<h5 className="text-lg font-bold">
										{i + 1}.{i2 + 1} {sub.title}
									</h5>
									<p className="text-md mb-10">{sub.text}</p>
									{sub.list && (
										<ul className="mb-10 pl-10">
											{sub.list.map((item, i3) => (
												<li key={i3}>{item.item}</li>
											))}
										</ul>
									)}
								</div>
							))}
					</div>
				))}
			</div>
		</div>
	);
}

export default Main;
