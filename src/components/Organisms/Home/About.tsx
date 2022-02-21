import { motion } from "framer-motion";
import { VFC } from "react";
import tw, { css } from "twin.macro";
import AboutMe from "~/components/Molecules/AboutMe";
import Bio from "~/components/Molecules/Bio";
import Skills from "~/components/Molecules/Skills";
import Title from "~/components/Molecules/Title";

const About: VFC = () => {
	const content = css`
		${tw`w-screen`}
	`;

	const wrap = css`
		${tw`flex flex-col items-center`}
	`;

	const descWrap = css`
		${tw`flex flex-col lg:flex-row mt-36 mb-20`}
		& > div {
			${tw`flex-1 flex-col items-center justify-center mb-16`}
		}
	`;

	return (
		<div css={content}>
			<div css={wrap}>
				<Title ttl="about." />
				<div css={descWrap}>
					<div>
						<AboutMe />
					</div>
					<div>
						<Bio />
						<Skills />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
