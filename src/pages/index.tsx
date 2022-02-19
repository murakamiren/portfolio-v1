import type { NextPage } from "next";
import Head from "next/head";
import About from "~/components/Organisms/Home/About";
import Contact from "~/components/Organisms/Home/Contact";
import Works from "~/components/Organisms/Home/Works";
import MainVisual from "~/components/Organisms/Home/MainVisual";

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Ren Murakami`s Portfolio</title>
				<meta name="description" content="Ren Murakami`s Portfolio" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MainVisual />
			<About />
			<Works />
			<Contact />
		</div>
	);
};

export default Home;
