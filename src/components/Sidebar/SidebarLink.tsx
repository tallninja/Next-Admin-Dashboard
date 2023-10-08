import Link from 'next/link';
import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface SidebarLinkProps {
	title: string;
	href: string;
	icon: ReactNode;
}

export default function SidebarLink({ title, href, icon }: SidebarLinkProps) {
	const pathname = usePathname();

	return (
		<div>
			<li>
				<Link
					href={href}
					className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
						pathname.includes(title.toLowerCase().replace(' ', '-')) &&
						'bg-graydark dark:bg-meta-4'
					}`}
				>
					{icon}
					{title}
				</Link>
			</li>
		</div>
	);
}
