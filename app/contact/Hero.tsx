import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";

function Hero() {
	return (
		<div className="flex flex-col">
			<div className="w-full xl:grid xl:grid-cols-12 ">
				<div className="xl:col-span-6 max-h-[400px] xl:max-h-full xl:h-full overflow-hidden">
					<Image
						src="/images/contact.png"
						alt="hero"
						width={1920}
						height={1080}
						className="grayscale brightness-75"
					/>
				</div>
				<div className="xl:col-span-6 p-5 lg:px-16 flex flex-col justify-center py-20">
					<div>
						<h1 className="text-3xl mb-5 font-bold leading-10 rounded-lg">Neem contact met ons op!</h1>
						<p className="block text-sm lg:text-lg font-normal mt-5">
							We zouden graag van je horen! Zo kunt u ons bereiken.
						</p>
						<div>
							<div className="flex items-center mt-5">
								<FiMail className="text-primary text-2xl" />
								<p className="ml-5">info@indumax.nl</p>
							</div>
							<div className="flex items-center mt-5">
								<FiPhone className="text-primary text-2xl" />
								<p className="ml-5">+31 6 82 27 41 51</p>
							</div>
							<div className="flex items-center mt-5">
								<SlLocationPin className="text-primary text-2xl" />
								<p className="ml-5">Dennenlaan 9, 5271 RE Sint-Michielsgestel</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
