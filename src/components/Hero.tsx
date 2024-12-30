"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaPhoneAlt, FaCalendarCheck, FaPaw } from "react-icons/fa";

const Hero = () => {
	return (
		<div className="relative min-h-screen flex items-center">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0 z-0">
				<img
					src="/images/hero-bg.png"
					alt="Mutlu Hayvanlar"
					className="absolute inset-0 w-full h-full object-cover object-center"
				/>
				<div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-transparent" />
			</div>

			<div className="container mx-auto px-4 z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className="text-white space-y-8"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="flex items-center gap-3 text-sky-400"
						>
							<FaPaw className="text-3xl animate-bounce" />
							<span className="text-xl font-medium">
								Onlar Bizim Can Dostlarımız
							</span>
						</motion.div>

						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.3 }}
							className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
						>
							Minik Dostlarınızın
							<span className="text-sky-400"> Sağlığı </span>
							İçin Buradayız
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-lg md:text-xl text-gray-100 max-w-xl font-medium"
						>
							Sevgi, şefkat ve profesyonel bakımla can dostlarınızın sağlığını
							koruyoruz. Onların mutluluğu bizim önceliğimiz!
						</motion.p>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.5 }}
							className="flex flex-col sm:flex-row gap-4 pt-4"
						>
							<Link
								href="/appointment"
								className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105"
							>
								<FaCalendarCheck className="text-xl" />
								Hemen Randevu Al
							</Link>
							<Link
								href="tel:+902323515253"
								className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 backdrop-blur-sm transition-all duration-300 hover:scale-105"
							>
								<FaPhoneAlt className="text-xl" />
								Bizi Arayın
							</Link>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.6 }}
							className="flex items-center gap-4 pt-6"
						>
							<div className="flex -space-x-4">
								{[1, 2, 3].map((_, i) => (
									<div
										key={i}
										className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
									>
										<img
											src={`/images/pet-${i + 1}.png`}
											alt={`Mutlu Pet ${i + 1}`}
											className="w-full h-full object-cover"
										/>
									</div>
								))}
							</div>
							<div className="text-sm">
								<div className="font-semibold">1000+ Mutlu Hasta</div>
								<div className="text-gray-300">Son 1 yılda</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>

			{/* Pati İzleri Animasyonu */}
			<div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8">
				{[1, 2, 3, 4].map((_, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.5,
							delay: i * 0.1,
							repeat: Infinity,
							repeatType: "reverse",
							repeatDelay: 2,
						}}
					>
						<FaPaw className="text-white/20 text-2xl transform rotate-45" />
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default Hero;
