import { useEffect, useState } from 'react';

export function useLocalStorage<T>(
	key: string,
	value: T
): [T, (arg: T | ((arg: T) => T)) => void] {
	const [storedValue, setStoredValue] = useState(() => {
		try {
			if (typeof window !== 'undefined') {
				const item = window.localStorage.getItem(key);
				return item ? JSON.parse(item) : value;
			}
		} catch (error) {
			console.log(error);
			return value;
		}
	});

	useEffect(() => {
		try {
			const valueToStore =
				typeof storedValue === 'function'
					? storedValue(storedValue)
					: storedValue;
			if (typeof window !== 'undefined')
				window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.log(error);
		}
	}, [key, storedValue]);

	return [storedValue, setStoredValue];
}
