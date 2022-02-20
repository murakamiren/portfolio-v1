import Link from "next/link";
import { VFC } from "react";
import { useRecoilState } from "recoil";
import tw, { css } from "twin.macro";
import { isDarkAtom } from "~/recoil/atoms/isDarkAtom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";

const Header: VFC = () => {
	const [isDark, setIsDark] = useRecoilState(isDarkAtom);

	const handleIsDark = () => {
		setIsDark((pre) => !pre);
	};

	const nav = css`
		${tw`w-screen absolute top-0 h-[80px]`}
	`;
	const navWrap = css`
		${tw`w-full h-[80px] px-32`}
	`;

	const navList = css`
		${tw`flex h-full gap-10 text-base items-center justify-end`}
		li {
			${tw`text-mainBlack dark:text-white hover:text-primary transition duration-500 ease-out`}
			a {
				${tw`relative inline-block`}
				&::after {
					${tw`absolute bottom-0 left-0 content w-full h-0.5 bg-primary scale-x-0 scale-y-100 origin-top-left transition duration-500 ease-out`}
				}
				&:hover::after {
					${tw`scale-x-100`}
				}
			}
		}
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
		<header css={nav}>
			<nav>
				<div css={navWrap}>
					<motion.ul css={navList} variants={ulContainer} initial="hidden" animate="show">
						<motion.li variants={item}>
							<Link href="/">home.</Link>
						</motion.li>
						<motion.li variants={item}>
							<Link href="/about">about.</Link>
						</motion.li>
						<motion.li variants={item}>
							<Link href="/works">works.</Link>
						</motion.li>
						<motion.li variants={item}>
							<Link href="/">contact.</Link>
						</motion.li>
						<motion.li onClick={handleIsDark} variants={item}>
							{isDark ? <MdDarkMode /> : <MdLightMode />}
						</motion.li>
					</motion.ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
