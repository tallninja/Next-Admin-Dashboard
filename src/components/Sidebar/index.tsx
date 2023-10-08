'use client';

import Image from 'next/image';
import Link from 'next/link';
import SidebarLinkGroup from './SidebarLinkGroup';
import {
	DashboardIcon,
	CalendarIcon,
	ProfileIcon,
	FormIcon,
	TableIcon,
	SettingsIcon,
	ChartIcon,
	AuthenticationIcon,
} from '@/icons';
import SidebarLink from './SidebarLink';
import SidebarLinkGroupItem from './SidebarLinkGroupItem';
import ElementsIcon from '@/icons/ElementsIcon';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
	const pathname = usePathname();

	return (
		<aside className='absolute left-0 top-0 z-999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0'>
			<div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5'>
				<Link href='/'>
					<Image
						width={176}
						height={32}
						src='/images/logo/logo.svg'
						alt='Logo'
					/>
				</Link>
			</div>

			<div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
				<nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
					{/* MENU */}
					<div>
						<h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark2 uppercase'>
							MENU
						</h3>
						<ul className='mb-6 flex flex-col gap-1.5'>
							<SidebarLinkGroup
								title='Dashboard'
								active={pathname === '/'}
								icon={<DashboardIcon size={[18, 18]} />}
							>
								<SidebarLinkGroupItem title='eCommerce' href='/' />
							</SidebarLinkGroup>
							<SidebarLink
								title='Calendar'
								href='/calendar'
								icon={<CalendarIcon size={[18, 19]} />}
							/>
							<SidebarLink
								title='Profile'
								href='/profile'
								icon={<ProfileIcon size={[18, 19]} />}
							/>
							<SidebarLinkGroup
								title='Forms'
								active={pathname.includes('forms')}
								icon={<FormIcon size={[18, 18]} />}
							>
								<SidebarLinkGroupItem
									title='Form Elements'
									href='/forms/elements'
								/>
								<SidebarLinkGroupItem
									title='Form Layout'
									href='/forms/layout'
								/>
							</SidebarLinkGroup>
							<SidebarLink
								title='Tables'
								href='/tables'
								icon={<TableIcon size={[18, 18]} />}
							/>
							<SidebarLink
								title='Settings'
								href='/settings'
								icon={<SettingsIcon size={[18, 19]} />}
							/>
						</ul>
					</div>

					{/* OTHERS */}
					<div>
						<h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark2 uppercase'>
							OTHERS
						</h3>
						<ul className='mb-6 flex flex-col gap-1.5'>
							<SidebarLink
								title='Charts'
								href='/charts'
								icon={<ChartIcon size={[18, 19]} />}
							/>
							<SidebarLinkGroup
								title='UI Elements'
								active={pathname.includes('elements')}
								icon={<ElementsIcon size={[18, 19]} />}
							>
								<SidebarLinkGroupItem
									title='Alerts'
									href='/ui-elements/alerts'
								/>
								<SidebarLinkGroupItem
									title='Buttons'
									href='/ui-elements/buttons'
								/>
							</SidebarLinkGroup>
							<SidebarLinkGroup
								title='Authentication'
								active={pathname.includes('authentication')}
								icon={<AuthenticationIcon size={[18, 19]} />}
							>
								<SidebarLinkGroupItem
									title='Sign Up'
									href='/authentication/signup'
								/>
								<SidebarLinkGroupItem
									title='Sign In'
									href='/authentication/signin'
								/>
							</SidebarLinkGroup>
						</ul>
					</div>
				</nav>
			</div>
		</aside>
	);
}
