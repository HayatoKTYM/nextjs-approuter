import { Metadata } from 'next';
import Link from 'next/link';

// metaタグの修正
export const metadata: Metadata = {
	title: "Next.js",
};

export default function Page() {
	return (
		<>
			<h1>Hello, Next.js 13.4.19!</h1>
			<Link href="/dashboard">Dashboardへ</Link>
		</>
	);
}
