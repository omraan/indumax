import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Indumax",
	description: "Wij ontwikkelen duurzame filterinstallaties tegen geur van koffiebranders",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={open_sans.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
