"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem("token");

		// 認証情報がない場合に/loginにリダイレクト
		if (!token && router.pathname !== "/login") {
			router.push("/login");
		}
	}, [router]);
	return (
		<html lang="ja">
			<body>
				<h3>共通レイアウト！</h3>
				<div>{children}</div>
			</body>
		</html>
	);
}
