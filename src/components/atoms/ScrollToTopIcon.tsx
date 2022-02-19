import { motion } from "framer-motion";
import { VFC } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import tw, { css } from "twin.macro";
import { scrollTop } from "~/utils/scrollTop";

const ScrollToTopIcon: VFC = () => {
	const wrap = css`
		${tw`fixed bottom-8 right-8 text-mainBlack dark:text-white text-5xl cursor-pointer hover:text-primary`}
	`;
	return (
		<motion.div
			css={wrap}
			onClick={scrollTop}
			animate={{
				y: [5, -5, 5],
			}}
			transition={{
				duration: 3,
				ease: "easeInOut",
				repeat: Infinity,
			}}
		>
			<IoMdArrowDropup />
		</motion.div>
	);
};

export default ScrollToTopIcon;
