"use client";

import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaPaw, FaHospital, FaUserMd, FaAmbulance } from "react-icons/fa";

const features = [
	{
		icon: <FaPaw size={32} />,
		title: "Dostlarınıza Özel Bakım",
		description:
			"Her evcil hayvanın kendine özgü ihtiyaçlarını anlıyor ve ona göre bakım sağlıyoruz.",
	},
	{
		icon: <FaHospital size={32} />,
		title: "Modern Tesis",
		description:
			"En son teknoloji tıbbi cihazlar ve steril ortamlarla hizmet veriyoruz.",
	},
	{
		icon: <FaUserMd size={32} />,
		title: "Uzman Kadro",
		description:
			"Deneyimli veteriner hekimlerimiz ve yardımcı personelimizle 7/24 hizmetinizdeyiz.",
	},
	{
		icon: <FaAmbulance size={32} />,
		title: "Acil Servis",
		description: "7/24 acil durum hizmetimizle dostlarınızın yanındayız.",
	},
];

const services = [
	{
		title: "Aşılama ve Koruyucu Hekimlik",
		description:
			"Düzenli aşılama ve kontroller ile dostlarınızın sağlığını koruyoruz.",
		image: "/images/pet-inoculate.jpg",
	},
	{
		title: "Cerrahi Operasyonlar",
		description:
			"Modern ameliyathane ve uzman ekibimizle cerrahi müdahaleler gerçekleştiriyoruz.",
		image: "/images/pet-surgical.jpg",
	},
	{
		title: "Diş Tedavisi",
		description:
			"Diş ve diş eti hastalıklarının tedavisi için özel diş ünitesi.",
		image: "/images/pet-teeth.jpg",
	},
];

const testimonials = [
	{
		name: "Ayşe Y.",
		image: "/images/pet-owner-k.jpg",
		text: "Kedim Pamuk'un tedavisi için gösterdikleri özen ve ilgi muhteşemdi.",
	},
	{
		name: "Mehmet K.",
		image: "/images/pet-owner-m.jpg",
		text: "Köpeğim Max'in ameliyatı çok başarılı geçti. Tüm ekibe teşekkürler!",
	},
	{
		name: "Zeynep A.",
		image: "/images/pet-owner-k-2.jpg",
		text: "Profesyonel ve güler yüzlü hizmet. Kesinlikle tavsiye ediyorum.",
	},
];

const stats = [
	{
		number: "15+",
		text: "Yıllık Deneyim",
		image: "https://placehold.co/400x300?text=Deneyim",
	},
	{
		number: "10,000+",
		text: "Mutlu Hasta",
		image: "https://placehold.co/400x300?text=Mutlu+Hasta",
	},
	{
		number: "24/7",
		text: "Acil Hizmet",
		image: "https://placehold.co/400x300?text=Acil+Hizmet",
	},
];

export default function Home() {
	return (
		<main>
			<Hero />

			{/* Özellikler Bölümü */}
			<section className="py-20 bg-white">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Neden Bizi Tercih Etmelisiniz?
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Evcil dostlarınızın sağlığı ve mutluluğu için en iyi hizmeti
							sunuyoruz.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{features.map((feature, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="text-sky-500 mb-4">{feature.icon}</div>
								<h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
								<p className="text-gray-600">{feature.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Hizmetler Bölümü */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Sunduğumuz Hizmetler
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Modern tıbbi cihazlarımız ve uzman kadromuzla evcil dostlarınız
							için en iyi bakımı sağlıyoruz.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{services.map((service, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="relative h-64 overflow-hidden">
									<img
										src={service.image}
										alt={service.title}
										className="object-cover max-w-full h-auto"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-3">
										{service.title}
									</h3>
									<p className="text-gray-600 mb-4">{service.description}</p>
									<Link
										href="/services"
										className="text-sky-500 hover:text-sky-600 font-medium inline-flex items-center gap-1"
									>
										Detaylı Bilgi
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M9 5l7 7-7 7"
											/>
										</svg>
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* İstatistikler Bölümü */}
			<section className="py-20 bg-gray-50">
				<div className="container mx-auto px-4">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Rakamlarla Biz
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Yılların deneyimi ve binlerce mutlu dostumuzla hizmetinizdeyiz
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{[
							{
								number: "15+",
								text: "Yıllık Deneyim",
								icon: "🏆",
							},
							{
								number: "10,000+",
								text: "Mutlu Hasta",
								icon: "🐾",
							},
							{
								number: "5",
								text: "Uzman Veteriner",
								icon: "👨‍⚕️",
							},
							{
								number: "24/7",
								text: "Acil Hizmet",
								icon: "🚑",
							},
						].map((stat, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white p-8 rounded-2xl shadow-lg text-center"
							>
								<div className="text-4xl mb-4">{stat.icon}</div>
								<div className="text-3xl font-bold text-sky-500 mb-2">
									{stat.number}
								</div>
								<div className="text-gray-600">{stat.text}</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Bölümü */}
			<section className="py-20 bg-gradient-to-r from-sky-500 to-sky-600 text-white">
				<div className="container mx-auto text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="max-w-2xl mx-auto"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							Evcil Dostunuz İçin Randevu Alın
						</h2>
						<p className="text-xl text-sky-100 mb-8">
							Uzman kadromuzla tanışmak ve kaliteli hizmet almak için hemen
							randevu oluşturun.
						</p>
						<Link
							href="/appointment"
							className="bg-white text-sky-600 px-8 py-4 rounded-lg font-semibold hover:bg-sky-50 transition-colors duration-200 inline-flex items-center gap-2"
						>
							<FaPaw />
							Randevu Al
						</Link>
					</motion.div>
				</div>
			</section>

			{/* Müşteri Yorumları */}
			<section className="py-20 bg-white">
				<div className="container mx-auto">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="text-center mb-16"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Mutlu Müşterilerimiz
						</h2>
						<p className="text-gray-600 max-w-2xl mx-auto">
							Evcil dostlarımızın sahiplerinden aldığımız değerli görüşler.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{testimonials.map((testimonial, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
							>
								<div className="flex items-center gap-4 mb-6">
									<div className="relative w-16 h-16 rounded-full overflow-hidden">
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="object-cover"
										/>
									</div>
									<div>
										<h4 className="font-semibold">{testimonial.name}</h4>
									</div>
								</div>
								<p className="text-gray-600 italic">{testimonial.text}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
