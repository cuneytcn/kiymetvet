"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Logo() {
	return (
		<Link href="/" className="flex items-center gap-2">
			<motion.div
				initial={{ scale: 0.8, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{ duration: 0.3 }}
				className="relative"
			>
				<svg
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="text-sky-500"
				>
					{/* Pati İzi */}
					<path
						d="M20 5C18.5 5 17.2 6.3 16 7.5C14.8 8.7 13.5 10 12 10C10.5 10 9.2 8.7 8 7.5C6.8 6.3 5.5 5 4 5C2.5 5 1 6.5 1 8C1 9.5 2.5 11 4 11C5.5 11 6.8 12.3 8 13.5C9.2 14.7 10.5 16 12 16C13.5 16 14.8 14.7 16 13.5C17.2 12.3 18.5 11 20 11"
						fill="currentColor"
					/>
					<path
						d="M20 35C21.5 35 22.8 33.7 24 32.5C25.2 31.3 26.5 30 28 30C29.5 30 30.8 31.3 32 32.5C33.2 33.7 34.5 35 36 35C37.5 35 39 33.5 39 32C39 30.5 37.5 29 36 29C34.5 29 33.2 27.7 32 26.5C30.8 25.3 29.5 24 28 24C26.5 24 25.2 25.3 24 26.5C22.8 27.7 21.5 29 20 29"
						fill="currentColor"
					/>
					{/* Kalp */}
					<path
						d="M20 15C17.5 15 15.5 17 15.5 19.5C15.5 22 17.5 24 20 24C22.5 24 24.5 22 24.5 19.5C24.5 17 22.5 15 20 15Z"
						fill="currentColor"
					/>
				</svg>
			</motion.div>
			<motion.div
				initial={{ x: -20, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 0.3, delay: 0.1 }}
				className="text-xl font-bold text-gray-800"
			>
				Kıymet Veteriner
			</motion.div>
		</Link>
	);
}
