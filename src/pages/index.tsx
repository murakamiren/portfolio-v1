import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import tw, { css } from "twin.macro";
import Footer from "~/components/Organisms/Footer";
import Header from "~/components/Organisms/Header";
import Layout from "~/components/Templates/Layout";

const Home: NextPage = () => {
	const [isDark, setIsDark] = useState(true);

	const handleIsDark = () => {
		setIsDark((pre) => !pre);
	};

	const text = css`
		${tw`font-bold text-5xl text-red-500`}
		background-color: ${isDark ? "#333" : "skyblue"};
	`;

	const btn = css`
		${tw`w-[160px] h-[40px] rounded-xl border`}
		background-color: ${isDark ? "#fff" : "#333"};
		button {
			${tw`block w-full h-full font-bold`}
			color: ${isDark ? "#333" : "#fff"};
		}
	`;
	return (
		<div>
			<Head>
				<title>Ren Murakami`s Portfolio</title>
				<meta name="description" content="Ren Murakami`s Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<p css={text}>aaaaaa</p>
				<div css={btn}>
					<button onClick={handleIsDark}>{isDark ? "dark" : "light"}</button>
				</div>
			</Layout>
		</div>
	);
};

export default Home;
