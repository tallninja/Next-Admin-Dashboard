'use client';

import Sidebar from '@/components/Sidebar';
import './globals.css';
import { Inter } from 'next/font/google';
import { useEffect, useState } from 'react';
import Loader from '@/components/Loader';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 500);
	});

	return (
		<html lang='en'>
			<body suppressHydrationWarning={true}>
				<div className='dark:bg-boxdark-2 dark:text-bodydark'>
					{loading ? (
						<Loader />
					) : (
						<div className='flex h-screen overflow-hidden'>
							<Sidebar
								sidebarOpen={sidebarOpen}
								setSidebarOpen={setSidebarOpen}
							/>
							<main>
								<div className='mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10'>
									{children}
								</div>
							</main>
						</div>
					)}
				</div>
			</body>
		</html>
	);
}
