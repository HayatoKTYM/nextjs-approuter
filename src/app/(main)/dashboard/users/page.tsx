import Link from 'next/link';

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
	return (
		<>
			<h1>This is Users Page!</h1>
			<Link href="/">Go To Top</Link>
		</>
	);
}
