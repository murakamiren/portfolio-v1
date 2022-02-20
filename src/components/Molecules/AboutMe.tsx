import { motion } from "framer-motion";
import { Fragment, VFC } from "react";
import tw, { css } from "twin.macro";

const AboutMe: VFC = () => {
	const nameSty = css`
		${tw`dark:text-white mt-16 mb-8 font-semibold leading-7`}
		font-size: 2rem;
		font-size: clamp(2rem, 1.6285714285714286rem + 1.5238095238095237vw, 3rem);
		span {
			${tw`font-normal text-sm`}
		}
	`;

	const aboutDesc = css`
		${tw`text-mainBlack dark:text-white text-sm leading-7 font-light text-center w-10/12  md:w-8/12 mb-16`}
	`;

	return (
		<Fragment>
			<motion.p
				css={nameSty}
				transition={{ delay: 0.3, duration: 0.5, type: "tween", ease: [0, 0, 0.2, 1] }}
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
			>
				Ren Murakami
				<br />
				<span>web developer.</span>
			</motion.p>
			<p css={aboutDesc}>
				ようこそ、私のポートフォリオへ。
				<br />
				私の名前は村上蓮で、現在ECCコンピューター専門学校のWebデザインコースにてwebの事について勉強していて、
				特に、私はフロントエンドの技術について興味がありその技術を特に力を入れて勉強しており、従来からwebを支えているような技術は勿論、モダンな物もどんどん取り入れていきたいと思っています。
				<br />
				また、バックエンドにも興味があり、時間があればバックエンドについても学習したいと思っており、それらの技術を使いこなせるようになりフルスタックなスキルを身につけたいと思っています。
			</p>
		</Fragment>
	);
};

export default AboutMe;
