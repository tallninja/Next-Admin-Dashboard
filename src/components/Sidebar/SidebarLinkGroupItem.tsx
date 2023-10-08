import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface Props {
	title: string;
	href: string;
}

export default function SidebarLinkGroupItem({ title, href }: Props) {
	const pathname = usePathname();

	return (
		<div>
			<li>
				<Link
					href={href}
					className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ${
						pathname.includes(href) && 'text-white'
					} `}
				>
					{title}
				</Link>
			</li>
		</div>
	);
}
