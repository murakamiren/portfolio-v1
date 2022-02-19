import type { AppProps } from "next/app";
import { Fragment } from "react";
import { RecoilRoot } from "recoil";
import { GlobalStyles } from "twin.macro";
import Layout from "~/components/Templates/Layout";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Fragment>
			<RecoilRoot>
				<GlobalStyles />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</RecoilRoot>
		</Fragment>
	);
};

export default MyApp;
