"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const teamMembers = [
	{
		name: "Dr. Irem Ildiri",
		role: "Baş Veteriner Hekim",
		image: "https://placehold.co/400x400?text=Dr.+Ahmet+Yilmaz",
		description:
			"Ege Üniversitesi mezunu, 15 yıllık tecrübesiyle küçük hayvan cerrahisi uzmanı",
	},
	{
		name: "Dr. Irem Ildiri",
		role: "Veteriner Hekim",
		image: "https://placehold.co/400x400?text=Dr.+Ayse+Demir",
		description:
			"Dokuz Eylül Üniversitesi mezunu, kedi ve köpek hastalıkları konusunda uzman",
	},
	{
		name: "Dr. Irem Ildiri",
		role: "Veteriner Hekim",
		image: "https://placehold.co/400x400?text=Dr.+Mehmet+Kaya",
		description:
			"İzmir Veteriner Fakültesi mezunu, egzotik hayvanlar konusunda uzman",
	},
];

const achievements = [
	{ number: "20+", text: "Yıllık Tecrübe" },
	{ number: "50,000+", text: "Mutlu Hasta" },
	{ number: "24/7", text: "Hizmet" },
	{ number: "15+", text: "Uzman Personel" },
];

export default function About() {
	return (
		<main className="pt-16">
			<div className="container mx-auto px-4 py-16">
				{/* Hero Section */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl font-bold mb-8">Hakkımızda</h1>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">
						2004 yılından beri İzmir'de veteriner hekimlik hizmeti vermekteyiz.
						Modern tıbbi cihazlarımız ve uzman kadromuzla evcil dostlarınızın
						sağlığı için çalışıyoruz.
					</p>
				</motion.div>

				{/* Stats Section */}
				<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
					{achievements.map((achievement, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="text-center"
						>
							<h3 className="text-4xl font-bold text-sky-600 mb-2">
								{achievement.number}
							</h3>
							<p className="text-gray-600">{achievement.text}</p>
						</motion.div>
					))}
				</div>

				{/* Features Section */}
				<div className="grid md:grid-cols-2 gap-12 items-center mb-16">
					<div>
						<h2 className="text-2xl font-semibold mb-4 text-sky-600">
							Neden Biz?
						</h2>
						<ul className="space-y-4 text-gray-600">
							<li className="flex items-center">
								<span className="text-sky-500 mr-2">✓</span>
								İzmir'in en modern veteriner kliniği
							</li>
							<li className="flex items-center">
								<span className="text-sky-500 mr-2">✓</span>
								Deneyimli ve uzman kadro
							</li>
							<li className="flex items-center">
								<span className="text-sky-500 mr-2">✓</span>
								7/24 acil veteriner hizmeti
							</li>
							<li className="flex items-center">
								<span className="text-sky-500 mr-2">✓</span>
								Son teknoloji tıbbi ekipman
							</li>
							<li className="flex items-center">
								<span className="text-sky-500 mr-2">✓</span>
								Tam donanımlı ameliyathane
							</li>
						</ul>
					</div>
					<div className="relative h-[400px] rounded-lg overflow-hidden">
						<img
							src="/images/pet-clinic.png"
							alt="Klinik"
							className="absolute inset-0 w-full h-full object-cover"
						/>
					</div>
				</div>

				{/* Team Section */}
				<section className="mb-16">
					<h2 className="text-3xl font-bold text-center mb-12">Ekibimiz</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{teamMembers.map((member, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.2 }}
								className="text-center"
							>
								<div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
									<img
										src={member.image}
										alt={member.name}
										className="absolute inset-0 w-full h-full object-cover"
									/>
								</div>
								<h3 className="text-xl font-semibold mb-2">{member.name}</h3>
								<p className="text-sky-600 mb-2">{member.role}</p>
								<p className="text-gray-600">{member.description}</p>
							</motion.div>
						))}
					</div>
				</section>

				<div className="text-center mt-12">
					<Link
						href="/appointment"
						className="bg-sky-500 text-white px-8 py-3 rounded-lg hover:bg-sky-600 inline-block transition-colors duration-200"
					>
						Hemen Randevu Al
					</Link>
				</div>
			</div>
		</main>
	);
}
