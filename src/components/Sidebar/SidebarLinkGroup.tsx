'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { title } from 'process';
import React, { ReactNode, useState } from 'react';
import { DropdownIcon } from '../../icons';

interface SidebarLinkGroupProps {
	children: ReactNode;
	title: string;
	icon: ReactNode;
	active: boolean;
}

export default function SidebarLinkGroup({
	children,
	title,
	icon,
	active,
}: SidebarLinkGroupProps) {
	const [open, setOpen] = useState<boolean>(active);
	const pathname = usePathname();

	return (
		<li>
			<>
				<Link
					href='#'
					className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
						title.toLowerCase() === 'dashboard'
							? pathname === '/' && 'bg-graydark dark:bg-meta-4'
							: pathname.includes(title.toLowerCase().replace(' ', '-')) &&
							  'bg-graydark dark:bg-meta-4'
					}`}
					onClick={(e) => {
						e.preventDefault();
						setOpen(!open);
					}}
				>
					{icon}
					{title}
					<DropdownIcon
						className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current ${
							open && 'rotate-180'
						}`}
						size={[20, 20]}
					/>
				</Link>
				<div
					className={`translate transform overflow-hidden ${!open && 'hidden'}`}
				>
					<ul className='mt-4 mb-5.5 flex flex-col gap-2.5 pl-6'>{children}</ul>
				</div>
			</>
		</li>
	);
}
