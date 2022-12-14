import "../styles/bootstrap.min.css";
import "../styles/animate.min.css";
import "../styles/lineicons.css";
import "../styles/header.css";
import "../styles/footer.css";
import "swiper/css/bundle";
// Global Style
import "../styles/style.css";
import "../styles/responsive.css";
import "../styles/nihal.css";
import "../styles/home.min.css";
import "../styles/landing-page.css";
import "../styles/theme.css";
import "../styles/astra-custom.css";
import "../styles/global-astra.css";


import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Layout from "../components/_App/Layout";
import GoTop from "../components/Shared/GoTop";

export const client = new ApolloClient({
	uri: `${process.env.WORDPRESS_URL}/graphql`,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<ApolloProvider client={client}>
				<Component {...pageProps} />

				<GoTop />
			</ApolloProvider>
		</Layout>
	);
}

export default MyApp;
