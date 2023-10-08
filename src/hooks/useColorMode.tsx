import { useEffect } from 'react';
import { useLocalStorage } from './userLocalStorage';

export function useColorMode() {
	const [colorMode, setColorMode] = useLocalStorage('color-theme', 'light');
	const className = 'dark';
	const bodyClassList = window.document.body.classList;

	useEffect(() => {
		colorMode === className
			? bodyClassList.add(className)
			: bodyClassList.remove(className);
	}, [colorMode]);

	return [colorMode, setColorMode];
}
