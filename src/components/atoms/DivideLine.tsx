import { motion } from "framer-motion";
import { VFC } from "react";
import tw, { css } from "twin.macro";

const DivideLine: VFC = () => {
	const line = css`
		${tw`w-[70px] h-0.5 bg-primary`}
	`;
	return (
		<motion.div
			css={line}
			transition={{ delay: 0.3, duration: 0.5, type: "tween", ease: [0, 0, 0.2, 1] }}
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
		/>
	);
};

export default DivideLine;
