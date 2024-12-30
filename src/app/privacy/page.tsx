"use client";

import { motion } from "framer-motion";

export default function Privacy() {
	return (
		<main className="pt-16">
			<div className="container mx-auto px-4 py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="prose prose-lg max-w-4xl mx-auto"
				>
					<h1 className="text-4xl font-bold mb-8 text-center">
						Gizlilik Politikası
					</h1>

					<section className="mb-8">
						<h2>1. Kişisel Verilerin Korunması</h2>
						<p>
							Kıymet Veteriner Kliniği olarak, müşterilerimizin gizliliğini
							korumayı taahhüt ediyoruz. Bu gizlilik politikası, kişisel
							verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu
							açıklamaktadır.
						</p>
					</section>

					<section className="mb-8">
						<h2>2. Toplanan Bilgiler</h2>
						<p>Aşağıdaki bilgileri toplayabiliriz:</p>
						<ul>
							<li>Ad ve iletişim bilgileri</li>
							<li>Evcil hayvan bilgileri</li>
							<li>Sağlık geçmişi ve tedavi kayıtları</li>
							<li>Randevu bilgileri</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2>3. Bilgilerin Kullanımı</h2>
						<p>Topladığımız bilgiler şu amaçlarla kullanılır:</p>
						<ul>
							<li>Veterinerlik hizmetlerinin sağlanması</li>
							<li>Randevu yönetimi</li>
							<li>İletişim ve bilgilendirme</li>
							<li>Yasal yükümlülüklerin yerine getirilmesi</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2>4. Bilgi Güvenliği</h2>
						<p>
							Kişisel verilerinizi korumak için uygun teknik ve organizasyonel
							önlemler alıyoruz. Verileriniz güvenli sistemlerde saklanmakta ve
							yetkisiz erişime karşı korunmaktadır.
						</p>
					</section>

					<section className="mb-8">
						<h2>5. Bilgi Paylaşımı</h2>
						<p>
							Kişisel verileriniz, yasal zorunluluklar dışında üçüncü taraflarla
							paylaşılmaz. Hizmet sağlayıcılarımızla paylaşılan bilgiler,
							gizlilik sözleşmeleri ile korunmaktadır.
						</p>
					</section>

					<section>
						<h2>6. İletişim</h2>
						<p>
							Gizlilik politikamız hakkında sorularınız için bizimle iletişime
							geçebilirsiniz:
						</p>
						<p>
							Email: info@kiymetveteriner.com
							<br />
							Telefon: (0232) 351 52 53
						</p>
					</section>
				</motion.div>
			</div>
		</main>
	);
}
