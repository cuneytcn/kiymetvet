"use client";

import { motion } from "framer-motion";
import { MdPhone, MdMail, MdLocationOn, MdAccessTime } from "react-icons/md";

export default function ContactClient() {
	return (
		<main className="pt-16">
			<div className="container mx-auto px-4 py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl font-bold mb-4">İletişim</h1>
					<p className="text-xl text-gray-600">
						Sorularınız için bize ulaşabilirsiniz
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12">
					{/* İletişim Bilgileri */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-gray-100"
					>
						<h2 className="text-2xl font-bold mb-6">İletişim Bilgileri</h2>
						<div className="space-y-6">
							<div className="flex items-start gap-4">
								<div className="p-2 bg-sky-50 rounded-lg">
									<MdPhone className="text-sky-500 text-2xl" />
								</div>
								<div>
									<h3 className="font-semibold mb-1">Telefon</h3>
									<p className="text-gray-600">(0232) 351 52 53</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="p-2 bg-sky-50 rounded-lg">
									<MdMail className="text-sky-500 text-2xl" />
								</div>
								<div>
									<h3 className="font-semibold mb-1">E-posta</h3>
									<p className="text-gray-600">info@kiymetveteriner.com</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="p-2 bg-sky-50 rounded-lg">
									<MdLocationOn className="text-sky-500 text-2xl" />
								</div>
								<div>
									<h3 className="font-semibold mb-1">Adres</h3>
									<p className="text-gray-600">
										İnönü, Hürriyet Cd. No:238,
										<br />
										35030 Bornova/İzmir
									</p>
								</div>
							</div>
							<div className="flex items-start gap-4">
								<div className="p-2 bg-sky-50 rounded-lg">
									<MdAccessTime className="text-sky-500 text-2xl" />
								</div>
								<div>
									<h3 className="font-semibold mb-1">Çalışma Saatleri</h3>
									<p className="text-gray-600">
										Pazartesi - Cumartesi: 09:00 - 22:00
										<br />
										Pazar: 12:00 - 17:00
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* İletişim Formu */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-gray-100"
					>
						<h2 className="text-2xl font-bold mb-6">Bize Ulaşın</h2>
						<form className="space-y-6">
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Adınız Soyadınız
								</label>
								<input
									type="text"
									required
									className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									E-posta Adresiniz
								</label>
								<input
									type="email"
									required
									className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
								/>
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700 mb-2">
									Mesajınız
								</label>
								<textarea
									rows={4}
									required
									className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg focus:ring-1 focus:ring-sky-500 focus:border-sky-500 transition-all duration-200"
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-sky-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-sky-600 active:scale-[0.98] transition-all duration-200"
							>
								Gönder
							</button>
						</form>
					</motion.div>
				</div>

				{/* Harita */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="mt-12 bg-white/50 backdrop-blur-sm p-4 rounded-xl border border-gray-100"
				>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.0252139923505!2d27.199662501063017!3d38.48509236657211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b97df550d02fed%3A0xc7bf7da51ca7e53d!2sK%C4%B1ymet%20Veteriner%20Klini%C4%9Fi!5e0!3m2!1str!2str!4v1735568653541!5m2!1str!2str"
						width="100%"
						height="400"
						style={{ border: 0 }}
						allowFullScreen
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						className="rounded-lg"
					></iframe>
				</motion.div>
			</div>
		</main>
	);
}
