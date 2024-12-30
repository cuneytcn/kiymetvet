"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "./Logo";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	// Sayfa değiştiğinde menüyü kapat
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	return (
		<nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-20">
					<Logo />

					<div className="hidden md:flex items-center space-x-8">
						<NavLinks />
						<Link
							href="/appointment"
							className="bg-sky-500 text-white px-5 py-2.5 rounded-lg hover:bg-sky-600 transition-colors duration-200 font-medium"
						>
							Randevu Al
						</Link>
					</div>

					<div className="md:hidden flex items-center">
						<button
							onClick={() => setIsOpen(true)}
							className="inline-flex items-center justify-center p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
							aria-expanded={isOpen}
						>
							<span className="sr-only">Ana menüyü aç</span>
							<svg
								className="h-6 w-6"
								stroke="currentColor"
								fill="none"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Dialog */}
			<AnimatePresence>
				{isOpen && (
					<Dialog
						as={motion.div}
						static
						className="relative z-50 md:hidden"
						open={isOpen}
						onClose={() => setIsOpen(false)}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						{/* Backdrop */}
						<motion.div
							className="fixed inset-0 bg-black/30"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							aria-hidden="true"
						/>

						{/* Full-screen container */}
						<div className="fixed inset-0 z-50 flex items-start justify-center overflow-hidden">
							<DialogPanel
								as={motion.div}
								className="w-full bg-white overflow-hidden"
								initial={{ opacity: 0, height: 0, scale: 0.95 }}
								animate={{
									opacity: 1,
									height: "auto",
									scale: 1,
									transition: {
										height: {
											type: "spring",
											duration: 0.5,
											bounce: 0.3,
										},
										opacity: {
											duration: 0.2,
										},
									},
								}}
								exit={{
									opacity: 0,
									height: 0,
									scale: 0.95,
									transition: {
										height: {
											duration: 0.3,
										},
										opacity: {
											duration: 0.2,
										},
									},
								}}
							>
								<motion.div
									initial={{ opacity: 0, y: -20 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -20 }}
									transition={{ delay: 0.1 }}
								>
									<div className="flex items-center justify-between px-4 h-16">
										<div className="text-2xl font-bold text-sky-600">
											Kıymet Veteriner
										</div>
										<button
											onClick={() => setIsOpen(false)}
											className="p-2 text-gray-500"
										>
											<XMarkIcon className="h-6 w-6" />
										</button>
									</div>

									<div className="px-2 pt-2 pb-3">
										<div className="space-y-1">
											<NavLinks mobile setIsOpen={setIsOpen} />
										</div>
										<div className="mt-4 px-3">
											<Link
												href="/appointment"
												onClick={() => setIsOpen(false)}
												className="block w-full text-center bg-sky-500 text-white py-3 px-4 rounded-lg hover:bg-sky-600 transition-colors duration-200"
											>
												Randevu Al
											</Link>
										</div>
									</div>
								</motion.div>
							</DialogPanel>
						</div>
					</Dialog>
				)}
			</AnimatePresence>
		</nav>
	);
};

const NavLinks = ({
	mobile,
	setIsOpen,
}: {
	mobile?: boolean;
	setIsOpen?: (value: boolean) => void;
}) => {
	const pathname = usePathname();
	const links = [
		{ href: "/", label: "Anasayfa" },
		{ href: "/about", label: "Hakkımızda" },
		{ href: "/services", label: "Hizmetlerimiz" },
		{ href: "/gallery", label: "Galeri" },
		{ href: "/blog", label: "Blog" },
		{ href: "/contact", label: "İletişim" },
	];

	return (
		<>
			{links.map((link) => (
				<Link
					key={link.href}
					href={link.href}
					className={`${
						mobile
							? "block px-3 py-2.5 text-base font-medium rounded-lg transition-colors duration-200 " +
							  (pathname === link.href
									? "bg-sky-50 text-sky-600"
									: "text-gray-700 hover:bg-gray-50")
							: "relative text-gray-700 hover:text-sky-600 transition-colors duration-200 " +
							  (pathname === link.href
									? "text-sky-600 after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-0.5 after:bg-sky-500"
									: "")
					}`}
					onClick={() => mobile && setIsOpen?.(false)}
				>
					{link.label}
				</Link>
			))}
		</>
	);
};

export default Navbar;
