import { motion } from "framer-motion";
import Link from "next/link";
import { VFC } from "react";
import tw, { css } from "twin.macro";

type BtnProps = {
	txt: string;
	link: string;
};

const Btn: VFC<BtnProps> = (props) => {
	const wrap = css`
		${tw`w-auto h-auto bg-primary rounded shadow`}
		button {
			${tw`w-full h-full block text-mainBlack text-base`}
		}
		a {
			${tw`w-full h-full block px-8 py-3`}
		}
	`;
	return (
		<motion.div
			css={wrap}
			transition={{ duration: 0.3, type: "tween", ease: [0, 0, 0.2, 1] }}
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			whileHover={{ scale: 1.05, opacity: 0.8 }}
		>
			<button>
				<Link href={props.link}>{props.txt}</Link>
			</button>
		</motion.div>
	);
};

export default Btn;
