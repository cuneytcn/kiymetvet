"use client";

import { useState, Fragment } from "react";
import { motion } from "framer-motion";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronUpDownIcon, CheckIcon } from "@heroicons/react/24/solid";

const services = [
	"Genel Muayene",
	"Aşılama",
	"Cerrahi Operasyon",
	"Diş Bakımı",
	"Ultrason",
	"Röntgen",
];

const timeSlots = [
	"09:00",
	"10:00",
	"11:00",
	"12:00",
	"14:00",
	"15:00",
	"16:00",
	"17:00",
	"18:00",
	"19:00",
	"20:00",
	"21:00",
];

export default function AppointmentClient() {
	const [selectedDate, setSelectedDate] = useState("");
	const [selectedTime, setSelectedTime] = useState("");
	const [selectedService, setSelectedService] = useState(services[0]);

	const today = new Date().toISOString().split("T")[0];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({
			date: selectedDate,
			time: selectedTime,
			service: selectedService,
		});
	};

	return (
		<main className="pt-16">
			<div className="container mx-auto px-4 py-16">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-2xl mx-auto"
				>
					<h1 className="text-4xl font-bold mb-8 text-center">Randevu Al</h1>
					<div className="bg-white rounded-lg shadow-lg p-8">
						<form onSubmit={handleSubmit} className="space-y-6">
							{/* Hizmet Seçimi */}
							<div className="space-y-2">
								<label className="block text-sm font-medium text-gray-700">
									Hizmet Seçin
								</label>
								<Listbox value={selectedService} onChange={setSelectedService}>
									<div className="relative mt-1">
										<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
											<span className="block truncate">{selectedService}</span>
											<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
												<ChevronUpDownIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</span>
										</Listbox.Button>
										<Transition
											as={Fragment}
											leave="transition ease-in duration-100"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
												{services.map((service, index) => (
													<Listbox.Option
														key={index}
														className={({ active }) =>
															`relative cursor-default select-none py-2 pl-10 pr-4 ${
																active
																	? "bg-sky-100 text-sky-900"
																	: "text-gray-900"
															}`
														}
														value={service}
													>
														{({ selected }) => (
															<>
																<span
																	className={`block truncate ${
																		selected ? "font-medium" : "font-normal"
																	}`}
																>
																	{service}
																</span>
																{selected ? (
																	<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
																		<CheckIcon
																			className="h-5 w-5"
																			aria-hidden="true"
																		/>
																	</span>
																) : null}
															</>
														)}
													</Listbox.Option>
												))}
											</Listbox.Options>
										</Transition>
									</div>
								</Listbox>
							</div>

							{/* Tarih Seçimi */}
							<div>
								<label
									htmlFor="date"
									className="block text-sm font-medium text-gray-700 mb-2"
								>
									Tarih Seçin
								</label>
								<input
									type="date"
									id="date"
									min={today}
									value={selectedDate}
									onChange={(e) => setSelectedDate(e.target.value)}
									required
									className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
								/>
							</div>

							{/* Saat Seçimi */}
							<div className="space-y-2">
								<label className="block text-sm font-medium text-gray-700">
									Saat Seçin
								</label>
								<Listbox value={selectedTime} onChange={setSelectedTime}>
									<div className="relative mt-1">
										<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500">
											<span className="block truncate">
												{selectedTime || "Saat Seçin"}
											</span>
											<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
												<ChevronUpDownIcon
													className="h-5 w-5 text-gray-400"
													aria-hidden="true"
												/>
											</span>
										</Listbox.Button>
										<Transition
											as={Fragment}
											leave="transition ease-in duration-100"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
												{timeSlots.map((time, index) => (
													<Listbox.Option
														key={index}
														className={({ active }: { active: boolean }) =>
															`relative cursor-default select-none py-2 pl-10 pr-4 ${
																active
																	? "bg-sky-100 text-sky-900"
																	: "text-gray-900"
															}`
														}
														value={time}
													>
														{({ selected }) => (
															<>
																<span
																	className={`block truncate ${
																		selected ? "font-medium" : "font-normal"
																	}`}
																>
																	{time}
																</span>
																{selected ? (
																	<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
																		<CheckIcon
																			className="h-5 w-5"
																			aria-hidden="true"
																		/>
																	</span>
																) : null}
															</>
														)}
													</Listbox.Option>
												))}
											</Listbox.Options>
										</Transition>
									</div>
								</Listbox>
							</div>

							{/* Kişisel Bilgiler */}
							<div className="space-y-4">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Ad Soyad
									</label>
									<input
										type="text"
										id="name"
										required
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
									/>
								</div>
								<div>
									<label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Telefon
									</label>
									<input
										type="tel"
										id="phone"
										required
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
									/>
								</div>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										E-posta
									</label>
									<input
										type="email"
										id="email"
										required
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
									/>
								</div>
								<div>
									<label
										htmlFor="notes"
										className="block text-sm font-medium text-gray-700 mb-2"
									>
										Notlar (Opsiyonel)
									</label>
									<textarea
										id="notes"
										rows={3}
										className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
									></textarea>
								</div>
							</div>

							{/* Gönder Butonu */}
							<button
								type="submit"
								className="w-full bg-sky-500 text-white py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors duration-200"
							>
								Randevu Oluştur
							</button>
						</form>
					</div>
				</motion.div>
			</div>
		</main>
	);
}
