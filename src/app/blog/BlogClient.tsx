"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const POSTS_PER_PAGE = 6;

const posts = [
	{
		title: "Köpeklerde Aşılama Takvimi",
		slug: "kopeklerde-asilama-takvimi",
		excerpt:
			"Köpek dostlarımızın sağlıklı bir yaşam sürmesi için uygulanması gereken aşılar ve zamanlamaları hakkında detaylı bilgi.",
		image: "https://placehold.co/800x600?text=Kopeklerde+Asilama",
		date: "15 Mart 2024",
		author: {
			name: "Dr. İrem İldiri",
			image: "https://placehold.co/100x100?text=Dr.+Irem",
			title: "Veteriner Hekim",
		},
		category: "Sağlık",
	},
	{
		title: "Kedilerde Beslenme ve Diyet",
		slug: "kedilerde-beslenme-ve-diyet",
		excerpt:
			"Kedilerin yaşına ve sağlık durumuna göre uygun beslenme programı nasıl oluşturulur? İşte dikkat edilmesi gerekenler.",
		image: "https://placehold.co/800x600?text=Kedi+Beslenmesi",
		date: "10 Mart 2024",
		author: {
			name: "Dr. Ahmet Yılmaz",
			image: "https://placehold.co/100x100?text=Dr.+Ahmet",
			title: "Veteriner Hekim",
		},
		category: "Beslenme",
	},
	{
		title: "Evcil Hayvanlarda Diş Bakımı",
		slug: "evcil-hayvanlarda-dis-bakimi",
		excerpt:
			"Evcil hayvanlarınızın diş sağlığını korumak için yapmanız gerekenler ve profesyonel diş bakımının önemi.",
		image: "https://placehold.co/800x600?text=Dis+Bakimi",
		date: "5 Mart 2024",
		author: {
			name: "Dr. Ayşe Demir",
			image: "https://placehold.co/100x100?text=Dr.+Ayse",
			title: "Veteriner Hekim",
		},
		category: "Bakım",
	},
	{
		title: "Yavru Köpek Eğitimi",
		slug: "yavru-kopek-egitimi",
		excerpt:
			"Yavru köpeğinizin temel eğitimi için ipuçları ve dikkat edilmesi gereken önemli noktalar.",
		image: "https://placehold.co/800x600?text=Yavru+Kopek+Egitimi",
		date: "1 Mart 2024",
		author: {
			name: "Dr. Mehmet Kaya",
			image: "https://placehold.co/100x100?text=Dr.+Mehmet",
			title: "Veteriner Hekim",
		},
		category: "Eğitim",
	},
	{
		title: "Kedi ve Köpeklerde Parazit Kontrolü",
		slug: "kedi-ve-kopeklerde-parazit-kontrolu",
		excerpt:
			"İç ve dış parazitlerden korunma yöntemleri ve düzenli kontrollerin önemi hakkında bilmeniz gerekenler.",
		image: "https://placehold.co/800x600?text=Parazit+Kontrolu",
		date: "25 Şubat 2024",
		author: {
			name: "Dr. İrem İldiri",
			image: "https://placehold.co/100x100?text=Dr.+Irem",
			title: "Veteriner Hekim",
		},
		category: "Sağlık",
	},
	{
		title: "Evcil Hayvanlarda Yaşlılık Bakımı",
		slug: "evcil-hayvanlarda-yaslilik-bakimi",
		excerpt:
			"Yaşlanan evcil hayvanlarınızın özel ihtiyaçları ve onlara nasıl daha iyi bakabileceğiniz hakkında öneriler.",
		image: "https://placehold.co/800x600?text=Yaslilik+Bakimi",
		date: "20 Şubat 2024",
		author: {
			name: "Dr. Ahmet Yılmaz",
			image: "https://placehold.co/100x100?text=Dr.+Ahmet",
			title: "Veteriner Hekim",
		},
		category: "Bakım",
	},
];

export default function BlogClient() {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

	const currentPosts = posts.slice(
		(currentPage - 1) * POSTS_PER_PAGE,
		currentPage * POSTS_PER_PAGE
	);

	return (
		<main className="pt-16">
			<div className="container mx-auto px-4 py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-12"
				>
					<h1 className="text-4xl font-bold mb-4">Blog</h1>
					<p className="text-xl text-gray-600">
						Evcil hayvan sağlığı hakkında faydalı bilgiler
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{currentPosts.map((post, index) => (
						<motion.article
							key={post.slug}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1 }}
							className="border border-gray-200 rounded-lg overflow-hidden hover:border-sky-500 transition-colors duration-300"
						>
							<Link href={`/blog/${post.slug}`}>
								<div className="relative h-48 bg-gray-200">
									<img
										src={post.image}
										alt={post.title}
										className="absolute inset-0 w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h2 className="text-xl font-semibold mb-2 hover:text-sky-600 transition-colors">
										{post.title}
									</h2>
									<p className="text-gray-600 mb-4">{post.excerpt}</p>
									<div className="flex justify-between items-center text-sm text-gray-500">
										<span>{post.author.name}</span>
										<time>{post.date}</time>
									</div>
								</div>
							</Link>
						</motion.article>
					))}
				</div>

				{/* Pagination */}
				{totalPages > 1 && (
					<div className="mt-12 flex justify-center gap-2">
						<button
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}
							className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Önceki
						</button>
						{[...Array(totalPages)].map((_, i) => (
							<button
								key={i}
								onClick={() => setCurrentPage(i + 1)}
								className={`w-10 h-10 rounded-lg ${
									currentPage === i + 1
										? "bg-sky-500 text-white"
										: "bg-gray-100 hover:bg-gray-200"
								}`}
							>
								{i + 1}
							</button>
						))}
						<button
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
							disabled={currentPage === totalPages}
							className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							Sonraki
						</button>
					</div>
				)}
			</div>
		</main>
	);
}
