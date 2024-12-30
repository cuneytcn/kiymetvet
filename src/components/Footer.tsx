"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaWhatsapp,
} from "react-icons/fa";
import { MdPhone, MdMail, MdLocationOn, MdAccessTime } from "react-icons/md";

const socialLinks = [
	{
		icon: <FaFacebookF size={20} />,
		href: "https://facebook.com/kiymetveteriner",
		label: "Facebook",
	},
	{
		icon: <FaTwitter size={20} />,
		href: "https://twitter.com/kiymetveteriner",
		label: "Twitter",
	},
	{
		icon: <FaInstagram size={20} />,
		href: "https://instagram.com/kiymetveteriner",
		label: "Instagram",
	},
	{
		icon: <FaWhatsapp size={20} />,
		href: "https://wa.me/902323515253",
		label: "WhatsApp",
	},
];

const quickLinks = [
	{ name: "Hakkımızda", href: "/about" },
	{ name: "Hizmetlerimiz", href: "/services" },
	{ name: "Galeri", href: "/gallery" },
	{ name: "Blog", href: "/blog" },
	{ name: "İletişim", href: "/contact" },
];

const services = [
	"Aşılama",
	"Cerrahi Operasyonlar",
	"Diş Bakımı",
	"Laboratuvar",
	"Görüntüleme",
	"Acil Servis",
];

export default function Footer() {
	return (
		<footer className="bg-gray-900 text-gray-300">
			{/* Ana Footer İçeriği */}
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{/* Hakkımızda Bölümü */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="flex items-center gap-2 mb-6">
							<div className="text-sky-500">
								<svg
									width="40"
									height="40"
									viewBox="0 0 40 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="text-sky-400"
								>
									<path
										d="M20 5C18.5 5 17.2 6.3 16 7.5C14.8 8.7 13.5 10 12 10C10.5 10 9.2 8.7 8 7.5C6.8 6.3 5.5 5 4 5C2.5 5 1 6.5 1 8C1 9.5 2.5 11 4 11C5.5 11 6.8 12.3 8 13.5C9.2 14.7 10.5 16 12 16C13.5 16 14.8 14.7 16 13.5C17.2 12.3 18.5 11 20 11"
										fill="currentColor"
									/>
									<path
										d="M20 35C21.5 35 22.8 33.7 24 32.5C25.2 31.3 26.5 30 28 30C29.5 30 30.8 31.3 32 32.5C33.2 33.7 34.5 35 36 35C37.5 35 39 33.5 39 32C39 30.5 37.5 29 36 29C34.5 29 33.2 27.7 32 26.5C30.8 25.3 29.5 24 28 24C26.5 24 25.2 25.3 24 26.5C22.8 27.7 21.5 29 20 29"
										fill="currentColor"
									/>
									<path
										d="M20 15C17.5 15 15.5 17 15.5 19.5C15.5 22 17.5 24 20 24C22.5 24 24.5 22 24.5 19.5C24.5 17 22.5 15 20 15Z"
										fill="currentColor"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-white">
								Kıymet Veteriner
							</h3>
						</div>
						<p className="mb-6 text-gray-400">
							İzmir'in modern veteriner kliniği olarak evcil dostlarınıza
							profesyonel ve sevgi dolu hizmet veriyoruz. Geniş çalışma
							saatlerimizle yanınızdayız.
						</p>
						<div className="flex space-x-4">
							{socialLinks.map((social, index) => (
								<a
									key={index}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="bg-gray-800 p-2 rounded-full hover:bg-sky-600 transition-colors duration-300"
									aria-label={social.label}
								>
									{social.icon}
								</a>
							))}
						</div>
					</motion.div>

					{/* Hızlı Bağlantılar */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h3 className="text-xl font-bold text-white mb-4">
							Hızlı Bağlantılar
						</h3>
						<ul className="space-y-2">
							{quickLinks.map((link, index) => (
								<li key={index}>
									<Link
										href={link.href}
										className="text-gray-400 hover:text-sky-500 transition-colors duration-300"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</motion.div>

					{/* Hizmetlerimiz */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h3 className="text-xl font-bold text-white mb-4">Hizmetlerimiz</h3>
						<ul className="space-y-2">
							{services.map((service, index) => (
								<li
									key={index}
									className="text-gray-400 hover:text-sky-500 transition-colors duration-300 cursor-pointer"
								>
									{service}
								</li>
							))}
						</ul>
					</motion.div>

					{/* İletişim Bilgileri */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h3 className="text-xl font-bold text-white mb-4">İletişim</h3>
						<ul className="space-y-4">
							<li className="flex items-center space-x-3">
								<MdPhone className="text-sky-500" size={20} />
								<span>(0232) 351 52 53</span>
							</li>
							<li className="flex items-center space-x-3">
								<MdMail className="text-sky-500" size={20} />
								<span>info@kiymetveteriner.com</span>
							</li>
							<li className="flex items-start space-x-3">
								<MdLocationOn className="text-sky-500 mt-1" size={20} />
								<span>İnönü, Hürriyet Cd. No:238, 35030 Bornova/İzmir</span>
							</li>
							<li className="flex items-start space-x-3">
								<MdAccessTime className="text-sky-500 mt-1" size={20} />
								<div>
									<p>Pazartesi - Cumartesi: 09:00 - 22:00</p>
									<p>Pazar: 12:00 - 17:00</p>
								</div>
							</li>
						</ul>
					</motion.div>
				</div>
			</div>

			{/* Alt Footer */}
			<div className="border-t border-gray-800">
				<div className="container mx-auto px-4 py-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="flex flex-col md:flex-row items-center gap-2 text-sm text-gray-400">
							&copy; {new Date().getFullYear()} Kıymet Veteriner Kliniği. Tüm
							hakları saklıdır.
							<span className="hidden md:inline">|</span>
							<span>
								Created by:{" "}
								<a
									href="https://onpeyc.com"
									target="_blank"
									rel="noopener noreferrer"
									className="text-sky-400 hover:text-sky-300 transition-colors"
								>
									Onpeyc
								</a>
							</span>
						</div>
						<div className="flex space-x-4 mt-4 md:mt-0">
							<Link
								href="/privacy"
								className="text-sm text-gray-400 hover:text-sky-500"
							>
								Gizlilik Politikası
							</Link>
							<Link
								href="/terms"
								className="text-sm text-gray-400 hover:text-sky-500"
							>
								Kullanım Şartları
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
