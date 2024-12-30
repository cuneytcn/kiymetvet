"use client";

import { motion } from "framer-motion";

export default function Terms() {
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
						Kullanım Şartları
					</h1>

					<section className="mb-8">
						<h2>1. Hizmet Şartları</h2>
						<p>
							Bu kullanım şartları, Kıymet Veteriner Kliniği'nin sunduğu
							hizmetlerin kullanımını düzenlemektedir. Hizmetlerimizi kullanarak
							bu şartları kabul etmiş sayılırsınız.
						</p>
					</section>

					<section className="mb-8">
						<h2>2. Randevu Politikası</h2>
						<ul>
							<li>Randevular en az 24 saat öncesinden iptal edilmelidir.</li>
							<li>
								Randevu saatine geç kalınması durumunda, randevu süresi
								kısalabilir veya iptal edilebilir.
							</li>
							<li>
								Acil durumlar nedeniyle randevu saatlerinde değişiklik
								yapılabilir.
							</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2>3. Ödeme Koşulları</h2>
						<ul>
							<li>Tedavi ücretleri hizmet sonunda ödenir.</li>
							<li>
								Kabul edilen ödeme yöntemleri: Nakit, kredi kartı, banka kartı
							</li>
							<li>
								Uzun süreli tedavilerde taksit seçenekleri değerlendirilebilir.
							</li>
						</ul>
					</section>

					<section className="mb-8">
						<h2>4. Sorumluluklar</h2>
						<p>
							Kliniğimiz, sunduğu hizmetlerde en yüksek kalite standardını
							hedefler. Ancak, tedavi sonuçları garanti edilemez ve doğal
							riskler mevcuttur.
						</p>
					</section>

					<section className="mb-8">
						<h2>5. Acil Durum Hizmetleri</h2>
						<p>
							7/24 acil durum hizmeti sunmaktayız. Acil durumlarda normal hizmet
							ücretlerine ek ücret uygulanabilir.
						</p>
					</section>

					<section>
						<h2>6. Değişiklikler</h2>
						<p>
							Bu kullanım şartları gerektiğinde güncellenebilir. Önemli
							değişiklikler hakkında bilgilendirme yapılacaktır.
						</p>
					</section>
				</motion.div>
			</div>
		</main>
	);
}
