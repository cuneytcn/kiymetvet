import Link from "next/link";

// Bu fonksiyon dinamik route'lar için gerekli
export async function generateStaticParams() {
	// Gerçek uygulamada bu veriler API'den gelecek
	const posts = [
		{ slug: "kopeklerde-asilama-takvimi" },
		{ slug: "kedilerde-beslenme" },
	];

	return posts.map((post) => ({
		slug: post.slug,
	}));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
	// Gerçek uygulamada bu veriler API'den gelecek
	const post = {
		title: "Köpeklerde Aşılama Takvimi",
		date: "15 Mart 2024",
		author: "Dr. Ahmet Yılmaz",
		content: `
			<p>Köpek dostlarımızın sağlıklı bir yaşam sürmesi için düzenli aşılama çok önemlidir. Bu yazımızda köpeklerde uygulanması gereken aşılar ve zamanlaması hakkında detaylı bilgi vereceğiz.</p>

			<h2>Yavru Köpeklerde Aşı Takvimi</h2>
			<p>Yavru köpeklerin bağışıklık sisteminin gelişmesi için belirli bir aşı programını takip etmek gerekir. İşte aylara göre yapılması gereken aşılar:</p>

			<ul>
				<li>2. Ay: Karma Aşı (DHPP)</li>
				<li>3. Ay: Karma Aşı Tekrarı</li>
				<li>4. Ay: Kuduz Aşısı</li>
				<li>6. Ay: Karma Aşı Tekrarı</li>
			</ul>

			<h2>Yetişkin Köpeklerde Aşı Tekrarları</h2>
			<p>Yetişkin köpeklerde aşıların belirli aralıklarla tekrarlanması gerekir:</p>

			<ul>
				<li>Karma Aşı: Yılda bir kez</li>
				<li>Kuduz Aşısı: Yılda bir kez</li>
				<li>Kennel Cough: 6 ayda bir</li>
			</ul>
		`,
		image: "https://via.placeholder.com/1200x600?text=Blog+Detay",
		tags: ["Köpek Sağlığı", "Aşılama", "Veteriner Hekimlik"],
	};

	return (
		<main className="pt-16">
			<article className="container mx-auto px-4 py-16">
				<div className="max-w-4xl mx-auto">
					<Link
						href="/blog"
						className="text-sky-600 hover:text-sky-700 mb-8 inline-block"
					>
						← Blog'a Dön
					</Link>

					<h1 className="text-4xl font-bold mb-4">{post.title}</h1>
					<div className="flex items-center text-gray-600 mb-8">
						<span>{post.date}</span>
						<span className="mx-2">•</span>
						<span>{post.author}</span>
					</div>

					<div className="relative h-[400px] mb-8 rounded-lg overflow-hidden">
						<img
							src={post.image}
							alt={post.title}
							className="absolute inset-0 w-full h-full object-cover"
						/>
					</div>

					<div
						className="prose prose-lg max-w-none"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>

					<div className="mt-8 pt-8 border-t">
						<h3 className="text-lg font-semibold mb-4">Etiketler:</h3>
						<div className="flex flex-wrap gap-2">
							{post.tags.map((tag, index) => (
								<span
									key={index}
									className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
								>
									{tag}
								</span>
							))}
						</div>
					</div>
				</div>
			</article>
		</main>
	);
}
