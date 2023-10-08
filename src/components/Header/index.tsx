import { SerachIcon } from '@/icons';
import React, { FormEvent } from 'react';
import DarkModeSwitcher from './DarkModeSwitcher';
import SerachForm from './SerachForm';
import DropdownNotification from './DropdownNotification';
import DropdownMessage from './DropdownMessage';
import DropdownUser from './DropdownUser';
import Link from 'next/link';
import Image from 'next/image';
import HamburgerButton from './HamburgerButton';

interface Props {
	sidebarOpen: boolean;
	setSidebarOpen: (arg: boolean) => void;
}

export default function Header({ sidebarOpen, setSidebarOpen }: Props) {
	return (
		<header className='sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none'>
			<div className='flex flex-grow items-center justify-between shadow-2 px-4 py-4 md:px-6 2xl:px-11'>
				<div className='flex items-center gap-2 sm:gap-4 lg:hidden'>
					<HamburgerButton
						sidebarOpen={sidebarOpen}
						setSidebarOpen={setSidebarOpen}
					/>
					<Link className='block flex-shrink-0 lg:hidden' href='/'>
						<Image
							width={32}
							height={32}
							src={'/images/logo/logo-icon.svg'}
							alt='Logo'
						/>
					</Link>
				</div>
				<div className='hidden sm:block'>
					<SerachForm />
				</div>

				<div className='flex items-center gap-3 2xsm:gap-7'>
					<ul className='flex items-center gap-2 2xsm:gap-4'>
						<DarkModeSwitcher />
						<DropdownNotification />
						<DropdownMessage />
						<DropdownUser />
					</ul>
				</div>
			</div>
		</header>
	);
}
