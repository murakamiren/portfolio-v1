import React, { Fragment, ReactNode, VFC } from "react";
import Footer from "../Organisms/Footer";
import Header from "../Organisms/Header";

type layoutProps = {
	children: ReactNode;
};

const Layout: VFC<layoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Header />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
};

export default Layout;
