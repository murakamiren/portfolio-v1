import React, { Fragment, ReactNode, useEffect, useState, VFC } from "react";
import { useRecoilValue } from "recoil";
import tw, { css } from "twin.macro";
import { useToggleIsDarkFromOS } from "~/hooks/useToggleIsDarkFromOS";
import { isDarkAtom } from "~/recoil/atoms/isDarkAtom";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";

type layoutProps = {
	children: ReactNode;
};

const Layout: VFC<layoutProps> = ({ children }) => {
	const isDark = useRecoilValue(isDarkAtom);
	const [darkClass, setDarkClass] = useState("");

	const bgWrap = css`
		${tw`bg-white dark:bg-mainBlack`}
	`;

	useToggleIsDarkFromOS();

	useEffect(() => {
		if (isDark) {
			// document.documentElement.classList.add("dark");
			setDarkClass("dark");
		} else {
			// document.documentElement.classList.remove("dark");
			setDarkClass("");
		}
	}, [isDark]);

	return (
		<Fragment>
			<div className={darkClass}>
				<div css={bgWrap}>
					<Header />
					<main>{children}</main>
					<Footer />
				</div>
			</div>
		</Fragment>
	);
};

export default Layout;
