import { motion } from "framer-motion";
import { Fragment, VFC } from "react";
import tw, { css } from "twin.macro";
import DivideLine from "../atoms/DivideLine";

type titleProps = {
	ttl: string;
};

const Title: VFC<titleProps> = (props) => {
	const ttl = css`
		${tw`text-mainBlack dark:text-white mt-32 mb-4`}
		font-size: 1.5rem;
		font-size: clamp(1.5rem, 1.3142857142857143rem + 0.7619047619047619vw, 2rem);
	`;
	return (
		<Fragment>
			<motion.h2
				css={ttl}
				transition={{ delay: 0.3, duration: 0.5, type: "tween", ease: [0, 0, 0.2, 1] }}
				initial={{ y: 100, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				viewport={{ once: true }}
			>
				{props.ttl}
			</motion.h2>
			<DivideLine />
		</Fragment>
	);
};

export default Title;
