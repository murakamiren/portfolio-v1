import { motion } from "framer-motion";
import { VFC } from "react";
import tw, { css } from "twin.macro";
import AboutMe from "~/components/Molecules/AboutMe";
import Title from "~/components/Molecules/Title";
import Btn from "../../atoms/Btn";

const About: VFC = () => {
	const content = css`
		${tw`w-screen`}
	`;

	const wrap = css`
		${tw`flex flex-col items-center`}
	`;

	return (
		<div css={content}>
			<div css={wrap}>
				<Title ttl="about." />
				<AboutMe />
				<Btn txt="more about me" link="/about" />
			</div>
		</div>
	);
};

export default About;
