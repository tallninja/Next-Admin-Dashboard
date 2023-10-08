import { NotificationIcon } from '@/icons';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

export default function DropdownNotification() {
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [notifying, setNotifying] = useState(true);

	const trigger = useRef<any>();
	const dropdown = useRef<any>();

	// close the notification dropdown when click outside the dropdown
	useEffect(() => {
		const clickHandler = ({ target }: MouseEvent) => {
			if (!dropdown.current) return;
			if (
				!dropdownOpen ||
				dropdown.current.contains(target) ||
				trigger.current.contains(target)
			)
				return;
			setDropdownOpen(false);
		};
		document.addEventListener('click', clickHandler);
		return () => document.removeEventListener('click', clickHandler);
	});

	// close dropdown if Esc key is press
	useEffect(() => {
		const keyHandler = ({ key }: KeyboardEvent) => {
			if (!dropdownOpen || key !== 'Escape') return;
			setDropdownOpen(false);
		};
		document.addEventListener('keydown', keyHandler);
		return () => document.removeEventListener('keydown', keyHandler);
	});

	return (
		<li className='relative'>
			<Link
				href='#'
				ref={trigger}
				onClick={() => {
					setNotifying(false);
					setDropdownOpen(!dropdownOpen);
				}}
				className='relative flex items-center justify-center h-8.5 w-8.5 rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white'
			>
				<span
					className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
						notifying === false ? 'hidden' : 'inline'
					}`}
				>
					<span className='absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75'></span>
				</span>
				<NotificationIcon size={[18, 18]} />
			</Link>

			<div
				ref={dropdown}
				onFocus={() => setDropdownOpen(true)}
				onBlur={() => setDropdownOpen(false)}
				className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
					dropdownOpen === true ? 'block' : 'hidden'
				}`}
			>
				<div className='px-4.5 py-3'>
					<h5 className='text-sm font-medium text-bodydark2'>Notification</h5>
				</div>

				<ul className='flex h-auto flex-col overflow-y-auto'>
					<li>
						<Link
							className='flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4'
							href='#'
						>
							<p className='text-sm'>
								<span className='text-black dark:text-white'>
									Edit your information in a swipe
								</span>{' '}
								Sint occaecat cupidatat non proident, sunt in culpa qui officia
								deserunt mollit anim.
							</p>

							<p className='text-xs'>12 May, 2025</p>
						</Link>
					</li>
				</ul>
			</div>
		</li>
	);
}
