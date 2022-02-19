import { motion } from "framer-motion";
import Link from "next/link";
import { VFC } from "react";
import tw, { css } from "twin.macro";
import Title from "~/components/Molecules/Title";
import Btn from "../../atoms/Btn";

const About: VFC = () => {
	const mainTech: string[] = ["TypeScript", "React.js", "React Native", "Next.js", "Svelte", "Flutter"];
	const content = css`
		${tw`w-screen`}
	`;

	const wrap = css`
		${tw`flex flex-col items-center`}
	`;

	const nameSty = css`
		${tw`dark:text-white text-center mt-16 mb-8 font-medium leading-10`}
		span {
			${tw`font-semibold tracking-wider text-primary`}
			font-size: 2rem;
			font-size: clamp(2rem, 1.2571428571428571rem + 3.0476190476190474vw, 4rem);
		}
	`;

	const aboutDesc = css`
		${tw`text-mainBlack dark:text-white text-sm leading-7 font-light text-center w-10/12  md:w-8/12 mb-16`}
	`;

	const techTtl = css`
		${tw`text-mainBlack dark:text-white mb-4`}
		font-size: 1.5rem;
		font-size: clamp(1.5rem, 1.3142857142857143rem + 0.7619047619047619vw, 2rem);
	`;

	const techSty = css`
		${tw`text-mainBlack dark:text-white text-sm  font-light flex gap-4 mb-16 flex-col items-center md:flex-row`}
	`;

	const ulContainer = {
		hidden: { opacity: 0, y: -75 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				staggerChildren: 0.3,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: -75 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<div css={content}>
			<div css={wrap}>
				<Title ttl="about." />
				<motion.p
					css={nameSty}
					transition={{ delay: 0.3, duration: 0.5, type: "tween", ease: [0, 0, 0.2, 1] }}
					initial={{ y: 100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					viewport={{ once: true }}
				>
					hi, I`m
					<br />
					<span>Ren Murakami.</span>
				</motion.p>
				<p css={aboutDesc}>
					ようこそ、私のポートフォリオへ。
					<br />
					私の名前は村上蓮で、現在ECCコンピューター専門学校のWebデザインコースにてwebの事について勉強していて、
					特に、私はフロントエンドの技術について興味がありその技術を特に力を入れて勉強しており、従来からwebを支えているような技術は勿論、モダンな物もどんどん取り入れていきたいと思っています。
					<br />
					また、バックエンドにも興味があり、時間があればバックエンドについても学習したいと思っており、それらの技術を使いこなせるようになりフルスタックなスキルを身につけたいと思っています。
				</p>
				<h3 css={techTtl}>現在興味があり勉強している技術</h3>
				<motion.ul css={techSty} variants={ulContainer} initial="hidden" whileInView="show" viewport={{ once: true }}>
					{mainTech.map((tech, i) => (
						<motion.li key={i} variants={item} transition={{ type: "tween", duration: 0.5, ease: [0, 0, 0.2, 1] }}>
							{tech}
						</motion.li>
					))}
				</motion.ul>
				<Btn txt="more about me" link="/about" />
			</div>
		</div>
	);
};

export default About;
