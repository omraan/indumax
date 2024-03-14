import Image from "next/image";

function Customization() {
	return (
		<div className="lg:grid lg:grid-cols-12">
			<div className="lg:order-2 lg:col-span-6 max-h-[400px] lg:max-h-[500px] overflow-hidden bg-[#435558] py-10 lg:p-20 flex justify-center items-center">
				<Image src="/images/maatwerk-service.png" alt="hero" width={700} height={450} className="w-auto" />
			</div>
			<div className="lg:col-span-6 px-5 py-10 lg:p-10 xl:p-20 max-w-4xl flex flex-col justify-center">
				<div>
					<h3 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Maatwerk</h3>
					<p className="block font-normal mt-5 mb-10 leading-8 tracking-wide">
						Wij snappen als geen ander dat maatwerk een belangrijke succesfactor is voor onze klanten.
						Daarom nodigen wij u graag geheel vrijblijvend uit om contact op te nemen met Indumax als u een
						samenwerking met ons ziet zitten of als u vragen heeft over onze diensten en/of producten.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Customization;
