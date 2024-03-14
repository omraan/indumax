import Image from "next/image";

function Customization() {
	return (
		<div className="lg:grid lg:grid-cols-12">
			<div className="lg:col-span-6 max-h-[400px] lg:max-h-full overflow-hidden hidden lg:block">
				<Image
					src="/images/filtersysteem-customization.png"
					alt="hero"
					width={700}
					height={450}
					className="h-full w-full"
				/>
			</div>
			<div className="lg:col-span-6 px-5 py-10 lg:p-10 xl:p-20 max-w-4xl flex flex-col justify-center">
				<div>
					<h3 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Maatwerk</h3>
					<p className="block font-normal mt-5 mb-10 leading-8 tracking-wide">
						Wij snappen als geen ander dat maatwerk een belangrijke succesfactor is voor onze klanten.
						Daarom nodigen wij u graag geheel vrijblijvend uit om contact op te nemen met Indumax als u een
						samenwerking met ons ziet zitten of als u vragen heeft over onze diensten en/of producten.
					</p>
					<button className="px-5 py-3 text-md font-semibold text-white bg-primary rounded-lg ">
						Neem contact op
					</button>
				</div>
			</div>
		</div>
	);
}

export default Customization;
