import { default as ContactClient } from "./ContactClient";

export const metadata = {
	title: "İletişim | Kıymet Veteriner Kliniği",
	description:
		"İzmir Bayraklı'da bulunan kliniğimize 7/24 ulaşabilirsiniz. Acil durumlar için hemen arayın: (0232) 351 52 53",
	openGraph: {
		title: "İletişim | Kıymet Veteriner Kliniği",
		description:
			"İzmir Bayraklı'da bulunan kliniğimize 7/24 ulaşabilirsiniz. Acil durumlar için hemen arayın: (0232) 351 52 53",
	},
};

export default function Contact() {
	return <ContactClient />;
}
