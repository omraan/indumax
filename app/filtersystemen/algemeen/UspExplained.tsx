import { FaCheck } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

function UspExplained() {
	const rows = [
		{
			title: "Brandlucht (geschikt voor)",
			elektrostatisch: false,
			naverbrander: true,
			indumax: true,
		},
		{
			title: "Koellucht (geschikt voor)",
			elektrostatisch: false,
			naverbrander: false,
			indumax: true,
		},
		{
			title: "Duurzaam",
			elektrostatisch: true,
			naverbrander: false,
			indumax: true,
		},
		{
			title: "Energie verbruik",
			elektrostatisch: false,
			naverbrander: false,
			indumax: true,
		},
		{
			title: "Onderhoud",
			elektrostatisch: false,
			naverbrander: false,
			indumax: true,
		},
		{
			title: "Financieel aantrekkelijk",
			elektrostatisch: true,
			naverbrander: false,
			indumax: true,
		},
	];

	return (
		<div className="max-w-5xl mx-auto text-center mb-20">
			<div className="w-full overflow-x-scroll lg:overflow-hidden px-5">
				<table className="w-full shadow table-fixed mb-5">
					<thead className="bg-[#2A535F] text-white h-12 font-thin">
						<tr className="h-12 font-thin">
							<th className="w-[300px]"></th>
							<th className="font-semibold text-sm tracking-widest w-[200px]">Elektrostatisch filter</th>
							<th className="font-semibold text-sm tracking-widest w-[200px]">Naverbrander</th>
							<th className="font-semibold text-sm tracking-widest w-[200px]">Indumax filter</th>
						</tr>
					</thead>
					<tbody>
						{rows.map((row, i) => (
							<tr className={`h-12 ${i % 2 === 0 ? "bg-[#AABABF]" : "bg-[#AABABF]/50"}`}>
								<td className="text-left pl-5 tracking-widest text-sm font-semibold text-[#2A535F]">
									{row.title}
								</td>
								<td className="text-center">
									{!row.elektrostatisch ? (
										<IoCloseSharp className="mx-auto text-xl text-[#2A535F]" />
									) : (
										<FaCheck className="mx-auto text-md text-[#2A535F]" />
									)}
								</td>
								<td className="text-center">
									{!row.naverbrander ? (
										<IoCloseSharp className="mx-auto text-xl text-[#2A535F]" />
									) : (
										<FaCheck className="mx-auto text-md text-[#2A535F]" />
									)}
								</td>
								<td className="text-center">
									{!row.indumax ? (
										<IoCloseSharp className="mx-auto text-xl text-[#2A535F]" />
									) : (
										<FaCheck className="mx-auto text-md text-[#2A535F]" />
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<p>
					Integenstelling tot naverbranders gebruiken onze machines geen duur gas of electra en zijn daarom
					vele malen goedkoper en nog eens duurzamer.
				</p>
			</div>
		</div>
	);
}

export default UspExplained;
