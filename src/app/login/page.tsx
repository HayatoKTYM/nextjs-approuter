"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();

	const handleSubmit = (e) => {
		e.preventDefault();

		// ここでは簡単な認証を実装します。実際のアプリケーションではサーバー側での認証が必要です。
		if (username === "user" && password === "password") {
			// トークンを発行し、ローカルストレージに保存
			const fakeToken = "123456789"; // 実際のアプリケーションでは安全なトークンを生成する必要があります。
			localStorage.setItem("token", fakeToken);

			// ログイン後にホームページにリダイレクト
			router.push("/");
		} else {
			alert("認証に失敗しました。");
		}
	};

	return (
		<div>
			<h1>ログイン</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label>ユーザー名: </label>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div>
					<label>パスワード: </label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button type="submit">ログイン</button>
			</form>
		</div>
	);
};

export default Login;
