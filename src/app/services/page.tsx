import Link from "next/link";

const services = [
	{
		title: "Aşılama",
		description:
			"Düzenli aşılama programları ile dostlarınızı hastalıklardan koruyoruz.",
		icon: "💉",
	},
	{
		title: "Cerrahi Operasyonlar",
		description:
			"Modern ameliyathanemizde her türlü cerrahi müdahaleyi gerçekleştiriyoruz.",
		icon: "🏥",
	},
	{
		title: "Diş Bakımı",
		description:
			"Ağız ve diş sağlığı için kapsamlı muayene ve tedavi hizmetleri.",
		icon: "🦷",
	},
	{
		title: "Laboratuvar",
		description: "Gelişmiş laboratuvarımızda tüm tahlil ve testleri yapıyoruz.",
		icon: "🔬",
	},
	{
		title: "Görüntüleme",
		description: "Ultrason ve röntgen ile detaylı muayene imkanı.",
		icon: "📷",
	},
	{
		title: "Acil Servis",
		description: "7/24 acil durum müdahalesi için hazırız.",
		icon: "🚑",
	},
];

export default function Services() {
	return (
		<main className="pt-16">
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-12 text-center">Hizmetlerimiz</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<div
							key={index}
							className="p-6 rounded-lg border border-gray-200 hover:border-sky-500 transition-colors duration-300"
						>
							<div className="text-4xl mb-4">{service.icon}</div>
							<h3 className="text-xl font-semibold mb-2">{service.title}</h3>
							<p className="text-gray-600">{service.description}</p>
						</div>
					))}
				</div>
				<div className="text-center mt-12">
					<Link
						href="/appointment"
						className="bg-sky-500 text-white px-8 py-3 rounded-lg hover:bg-sky-600 inline-block transition-colors duration-200"
					>
						Randevu Al
					</Link>
				</div>
			</div>
		</main>
	);
}

export const metadata = {
	title: "Hizmetlerimiz",
	description:
		"Aşılama, cerrahi operasyonlar, diş bakımı, laboratuvar hizmetleri ve 7/24 acil veteriner hizmetleri sunuyoruz.",
};
