import { Onest } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

const onest = Onest({ subsets: ["latin"] });

export const metadata = {
	title: {
		default: "Kıymet Veteriner Kliniği - İstanbul",
		template: "%s | Kıymet Veteriner",
	},
	description:
		"İzmir'de 20 yıllık tecrübemizle evcil dostlarınıza 7/24 veteriner hekimlik hizmeti sunuyoruz. Modern tıbbi cihazlar ve uzman kadromuzla yanınızdayız.",
	keywords: [
		"veteriner",
		"izmir veteriner",
		"veteriner klinik",
		"7/24 veteriner",
		"kedi veteriner",
		"köpek veteriner",
		"acil veteriner",
	],
	authors: [{ name: "Kıymet Veteriner Kliniği" }],
	creator: "Kıymet Veteriner Kliniği",
	metadataBase: new URL("https://kiymetveteriner.com"),
	openGraph: {
		type: "website",
		locale: "tr_TR",
		url: "https://kiymetveteriner.com",
		siteName: "Kıymet Veteriner Kliniği",
		title: "Kıymet Veteriner Kliniği - İstanbul",
		description:
			"İstanbul'da 20 yıllık tecrübemizle evcil dostlarınıza 7/24 veteriner hekimlik hizmeti sunuyoruz.",
		images: [
			{
				url: "https://kiymetveteriner.com/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Kıymet Veteriner Kliniği",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="tr">
			<body className={onest.className}>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
