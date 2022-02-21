import Link from "next/link";
import { useEffect, useState, VFC } from "react";
import { useRecoilState } from "recoil";
import tw, { css } from "twin.macro";
import { isDarkAtom } from "~/recoil/atoms/isDarkAtom";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { motion } from "framer-motion";
import { useWindowSize } from "~/hooks/useWindowSize";

const Header: VFC = () => {
	const [isDark, setIsDark] = useRecoilState(isDarkAtom);
	const [isMobile, setIsMobile] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const { width } = useWindowSize();

	useEffect(() => {
		if (width < 1024) {
			setIsMobile(true);
		} else {
			setIsMobile(false);
		}
	}, [width]);

	const handleIsDark = () => {
		setIsDark((pre) => !pre);
	};

	const handleIsOpen = () => {
		setIsOpen((pre) => !pre);
	};

	const navClose = () => {
		setIsOpen(false);
	};

	const nav = css`
		${tw`w-screen absolute top-0 h-[80px]`}
	`;
	const navWrap = css`
		${tw`w-full h-[80px] px-32`}
		padding: ${isMobile ? "0 8px" : "0 8rem"};
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

	const mobileWrap = css`
		${tw`flex text-mainBlack dark:text-white text-2xl items-center justify-end`}
	`;

	const hamburger = css`
		${tw`relative w-[50px] h-[50px] cursor-pointer z-20`}
		span {
			${tw`inline-block absolute bg-mainBlack dark:bg-white transition-all duration-500 ease-out h-0.5`}
			&:nth-of-type(1) {
				top: ${isOpen ? "20px" : "22px"};
				left: ${isOpen ? "16px" : "13px"};
				width: ${isOpen ? "35%" : "50%"};
				transform: ${isOpen ? "translateY(6px) rotate(-45deg)" : "translateY(0) rotate(0deg)"};
			}
			&:nth-of-type(2) {
				top: ${isOpen ? "32px" : "29px"};
				left: ${isOpen ? "16px" : "13px"};
				transform: ${isOpen ? "translateY(-6px) rotate(45deg)" : "translateY(0) rotate(0deg)"};
				width: ${isOpen ? "35%" : "30%"};
			}
		}
	`;

	const mobileNav = css`
		${tw`w-screen h-screen absolute top-0 z-10 bg-white dark:bg-darkBg`}
		ul {
			${tw`flex flex-col h-full items-center justify-center gap-16`}
		}
	`;

	return (
		<header css={nav}>
			<nav>
				<div css={navWrap}>
					{isMobile ? (
						<div css={mobileWrap}>
							{isDark ? <MdDarkMode /> : <MdLightMode />}
							<div css={hamburger} onClick={handleIsOpen}>
								<span />
								<span />
							</div>
							{isOpen && (
								<motion.div css={mobileNav}>
									<ul>
										<li onClick={navClose}>
											<Link href="/">home.</Link>
										</li>
										<li onClick={navClose}>
											<Link href="#about">about.</Link>
										</li>
										<li onClick={navClose}>
											<Link href="#works">works.</Link>
										</li>
										<li onClick={navClose}>
											<Link href="#contact">contact.</Link>
										</li>
									</ul>
								</motion.div>
							)}
						</div>
					) : (
						<motion.ul css={navList} variants={ulContainer} initial="hidden" animate="show">
							<motion.li variants={item}>
								<Link href="/">home.</Link>
							</motion.li>
							<motion.li variants={item}>
								<Link href="#content">about.</Link>
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
					)}
				</div>
			</nav>
		</header>
	);
};

export default Header;
