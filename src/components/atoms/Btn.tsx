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
		${tw`w-auto h-auto`}
		button {
			${tw`w-full h-full block text-mainBlack dark:text-white text-base hover:text-primary`}
		}
		a {
			${tw`w-full h-full relative inline-block`}
			&::after {
				${tw`absolute bottom-0 left-0 content w-full h-0.5 bg-primary scale-x-0 scale-y-100 origin-top-left transition duration-500 ease-out`}
			}
			&:hover::after {
				${tw`scale-x-100`}
			}
		}
	`;
	return (
		<motion.div
			css={wrap}
			transition={{ duration: 0.3, type: "tween", ease: [0, 0, 0.2, 1] }}
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
		>
			<button>
				<Link href={props.link}>{props.txt}</Link>
			</button>
		</motion.div>
	);
};

export default Btn;
