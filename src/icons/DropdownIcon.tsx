import React from 'react';

interface DropdownIconProps {
	className?: string;
	size: [width: number, height: number];
	minSize?: [minWidth: number, minHeight: number];
	fill?: string;
}

export function DropdownIcon({
	className,
	size,
	minSize,
	fill,
}: DropdownIconProps) {
	return (
		<div>
			<svg
				className={className || 'fill-current'}
				width={size[0]}
				height={size[1]}
				viewBox={`${(minSize && minSize[0]) || 0} ${
					(minSize && minSize[1]) || 0
				} ${size[0]} ${size[1]}`}
				fill={fill || 'none'}
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z'
					fill=''
				/>
			</svg>
		</div>
	);
}
