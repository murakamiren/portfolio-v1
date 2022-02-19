import Link from "next/link";
import { VFC } from "react";
import { useRecoilState } from "recoil";
import tw, { css } from "twin.macro";
import { isDarkAtom } from "~/recoil/atoms/isDarkAtom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
		${tw`flex h-full gap-16 text-xl items-center justify-end`}
		li {
			${tw`text-mainBlack dark:text-white`}
		}
	`;
	return (
		<header css={nav}>
			<nav>
				<div css={navWrap}>
					<ul css={navList}>
						<li>
							<Link href="/">home.</Link>
						</li>
						<li>
							<Link href="/about">about.</Link>
						</li>
						<li>
							<Link href="/works">works.</Link>
						</li>
						<li>
							<Link href="/contact">contact.</Link>
						</li>
						<li onClick={handleIsDark}>{isDark ? <MdDarkMode /> : <MdLightMode />}</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
