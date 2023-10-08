import { SerachIcon } from '@/icons';
import React from 'react';

export default function SerachForm() {
	return (
		<div>
			<form onSubmit={(e) => e.preventDefault()}>
				<div className='relative'>
					<button className='absolute left-0 top-1/2 -translate-y-1/2'>
						<SerachIcon
							size={[20, 20]}
							className='fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary'
						/>
					</button>
					<input
						type='text'
						placeholder='Type to search...'
						className='w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125'
					/>
				</div>
			</form>
		</div>
	);
}
