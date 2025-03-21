"use client";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";

const links = {
	general: [
		{ name: "Duurzaamheid", href: "/duurzaamheid" },
		{ name: "Projecten", href: "/projecten" },
		{ name: "Over ons", href: "/over-ons" },
		{ name: "Contact", href: "/contact" },
	],
	products: [
		{ name: "Algemeen", href: "/filtersystemen/algemeen" },
		{ name: "ECO-5", description: "Batchgrootte: 1-5 KG", href: "/filtersystemen/eco-5" },
		{
			name: "ECO-15",
			description: "Batchgrootte: 6-15 KG",
			href: "/filtersystemen/eco-15",
		},
		{ name: "ECO-25", description: "Batchgrootte: 16-25 KG", href: "/filtersystemen/eco-25" },
		{ name: "Special-25", description: "Batchgrootte: 16-25 KG", href: "/filtersystemen/special-25" },
		{
			name: "ECO-50",
			description: "Batchgrootte: 26-50 KG",
			href: "/filtersystemen/eco-50",
		},
	],
	languages: [
		{ name: "Nederlands", href: "https://www.indumax.nl" },
		{ name: "English", href: "https://en.indumax.nl" },
	],
};

function classNames(...classes: any[]) {
	return classes.filter(Boolean).join(" ");
}

function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [language, setLanguage] = useState("Nederlands");
	useEffect(() => {
		if (typeof window !== "undefined") {
			const hostname = window.location.hostname;
			if (hostname === "localhost" || hostname === "www.indumax.nl" || hostname === "indumax.nl") {
				setLanguage("Nederlands");
			} else {
				setLanguage("English");
			}
		}
	}, []);

	return (
		<header className="bg-primary fixed top-0 w-full z-10">
			<nav className="mx-auto flex max-w-7xl items-center justify-between p-6 xl:px-0" aria-label="Global">
				<div className="flex l">
					<a href="/" className="-m-1.5 p-1.5">
						<Image src="/images/logo/logo.png" width={120} height={50} alt="Indumax logo" />
					</a>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>

				<div className="hidden lg:flex lg:flex-1 gap-x-12 lg:justify-end">
					<Popover.Group className="hidden lg:flex">
						<Popover className="relative">
							<Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-white">
								Filter systemen
								<ChevronDownIcon className="h-5 w-5 flex-none text-white/75" aria-hidden="true" />
							</Popover.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg">
									<div className="p-4">
										{links.products.map((item) => (
											<div
												key={item.name}
												className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex-auto">
													<a href={item.href} className="block font-semibold text-gray-900">
														{item.name}
														<span className="absolute inset-0" />
													</a>
													<p className="mt-1 text-gray-600">{item.description}</p>
												</div>
											</div>
										))}
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>
					</Popover.Group>
					{links.general.map((item) => (
						<a href={item.href} className="text-sm leading-6 text-white">
							{item.name}
						</a>
					))}

					<Popover.Group className="hidden lg:flex">
						<Popover className="relative">
							<Popover.Button className="flex items-center gap-x-1 text-sm leading-6 text-white">
								{language}
								<ChevronDownIcon className="h-5 w-5 flex-none text-white/75" aria-hidden="true" />
							</Popover.Button>

							<Transition
								as={Fragment}
								enter="transition ease-out duration-200"
								enterFrom="opacity-0 translate-y-1"
								enterTo="opacity-100 translate-y-0"
								leave="transition ease-in duration-150"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-1"
							>
								<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 rounded-lg">
									<div className="p-4">
										{links.languages.map((item) => (
											<div
												key={item.name}
												className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
											>
												<div className="flex-auto">
													<a href={item.href} className="block font-semibold text-gray-900">
														{item.name}
														<span className="absolute inset-0" />
													</a>
												</div>
											</div>
										))}
									</div>
								</Popover.Panel>
							</Transition>
						</Popover>
					</Popover.Group>
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5"></a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
												Product
												<ChevronDownIcon
													className={classNames(
														open ? "rotate-180" : "",
														"h-5 w-5 flex-none"
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{links.products.map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
								{links.general.map((item) => (
									<a
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										{item.name}
									</a>
								))}
								<Disclosure as="div" className="-mx-3">
									{({ open }) => (
										<>
											<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
												{language}
												<ChevronDownIcon
													className={classNames(
														open ? "rotate-180" : "",
														"h-5 w-5 flex-none"
													)}
													aria-hidden="true"
												/>
											</Disclosure.Button>
											<Disclosure.Panel className="mt-2 space-y-2">
												{links.languages.map((item) => (
													<Disclosure.Button
														key={item.name}
														as="a"
														href={item.href}
														className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													>
														{item.name}
													</Disclosure.Button>
												))}
											</Disclosure.Panel>
										</>
									)}
								</Disclosure>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}

export default Header;
