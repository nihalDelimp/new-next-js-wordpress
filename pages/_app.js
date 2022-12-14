// import "../styles/bootstrap.min.css";
// import "../styles/animate.min.css";
// Global Style
// import "../styles/fullpage.css";
// import "../styles/swiper.css";
// import "../styles/theme.css";
// import "../styles/landing-page.css";
// import "../styles/all.min.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import Header from "../components/Header/Header";
// import Footer from "../components/Footer/Footer";

// window.jQuery = jQuery;
export const client = new ApolloClient({
	uri: `${process.env.WORDPRESS_URL}/graphql`,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			{/* <Header /> */}
			{/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" /> */}
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
			{/* <Footer /> */}
		</>
	);
}

export default MyApp;
