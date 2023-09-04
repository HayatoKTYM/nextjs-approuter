"use client";

import { useRouter } from 'next/navigation';

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
	const router = useRouter();
	return (
		<>
			<h1>Hello, Dashboard Page!</h1>
			<button type="button" onClick={() => router.push("/dashboard/users")}>
				Go to Users
			</button>
		</>
	);
}
