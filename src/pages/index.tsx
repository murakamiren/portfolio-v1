import type { NextPage } from "next";
import Head from "next/head";
import tw, { css } from "twin.macro";
import About from "~/components/Organisms/About";
import MainVisual from "~/components/Organisms/MainVisual";
import Layout from "~/components/Templates/Layout";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Ren Murakami`s Portfolio</title>
				<meta name="description" content="Ren Murakami`s Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Layout>
				<MainVisual />
				<About />
			</Layout>
		</div>
	);
};

export default Home;
