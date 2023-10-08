import { App } from '@/components/App';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'NextJS Dashboard',
	description: 'Ernest Wambua NextJS dashboard',
};

export default function Home() {
	return <App />;
}
