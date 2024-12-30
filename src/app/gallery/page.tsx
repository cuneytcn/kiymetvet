"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
	Dialog,
	DialogDescription,
	DialogPanel,
	DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const images = [
	{
		src: "https://placehold.co/800x600?text=Klinik+Ic+Mekan",
		alt: "Klinik içi görünüm",
		title: "Modern Kliniğimiz",
		description: "Son teknoloji cihazlarla donatılmış modern kliniğimiz",
	},
	{
		src: "https://placehold.co/800x600?text=Muayene+Odasi",
		alt: "Muayene odası",
		title: "Muayene Odası",
		description: "Konforlu ve steril muayene ortamımız",
	},
	{
		src: "https://placehold.co/800x600?text=Ameliyathane",
		alt: "Ameliyathane",
		title: "Ameliyathane",
		description: "Tam donanımlı ameliyathanemiz",
	},
	{
		src: "https://placehold.co/800x600?text=Laboratuvar",
		alt: "Laboratuvar",
		title: "Laboratuvar",
		description: "Modern test ve analiz laboratuvarımız",
	},
	{
		src: "https://placehold.co/800x600?text=Bekleme+Salonu",
		alt: "Bekleme salonu",
		title: "Bekleme Salonu",
		description: "Ferah ve rahat bekleme alanımız",
	},
	{
		src: "https://placehold.co/800x600?text=Dis+Mekan",
		alt: "Dış mekan",
		title: "Kliniğimizin Dış Görünümü",
		description: "Kolay ulaşılabilir konumumuz",
	},
];

export default function Gallery() {
	const [selectedImage, setSelectedImage] = useState<number | null>(null);

	return (
		<main className="pt-16">
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-12 text-center">Galeri</h1>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{images.map((image, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="relative h-64 bg-gray-200 rounded-lg overflow-hidden cursor-pointer group"
							onClick={() => setSelectedImage(index)}
						>
							<img
								src={image.src}
								alt={image.alt}
								className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
							<div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/70">
								<h3 className="text-lg font-semibold">{image.title}</h3>
							</div>
						</motion.div>
					))}
				</div>

				{/* Lightbox Modal */}
				<Dialog
					open={selectedImage !== null}
					onClose={() => setSelectedImage(null)}
					className="relative z-50"
				>
					<div className="fixed inset-0 bg-black/70" aria-hidden="true" />

					<div className="fixed inset-0 flex items-center justify-center p-4">
						<DialogPanel className="relative bg-white rounded-lg max-w-4xl w-full">
							<button
								onClick={() => setSelectedImage(null)}
								className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
							>
								<XMarkIcon className="w-6 h-6" />
							</button>

							{selectedImage !== null && (
								<div className="p-4">
									<div className="relative h-[60vh] w-full">
										<img
											src={images[selectedImage].src}
											alt={images[selectedImage].alt}
											className="absolute inset-0 w-full h-full object-contain"
										/>
									</div>
									<div className="mt-4">
										<DialogTitle className="text-xl font-semibold">
											{images[selectedImage].title}
										</DialogTitle>
										<DialogDescription className="mt-2 text-gray-600">
											{images[selectedImage].description}
										</DialogDescription>
									</div>
								</div>
							)}

							<div className="flex justify-between p-4">
								<button
									onClick={() =>
										setSelectedImage(
											selectedImage === 0
												? images.length - 1
												: selectedImage! - 1
										)
									}
									className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
								>
									Önceki
								</button>
								<button
									onClick={() =>
										setSelectedImage(
											selectedImage === images.length - 1
												? 0
												: selectedImage! + 1
										)
									}
									className="px-4 py-2 text-sm bg-gray-100 rounded-lg hover:bg-gray-200"
								>
									Sonraki
								</button>
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>
		</main>
	);
}
