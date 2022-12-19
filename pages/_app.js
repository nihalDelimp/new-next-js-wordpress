import "../styles/theme.css";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { useEffect } from "react";
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
export const client = new ApolloClient({
	uri: `${process.env.WORDPRESS_URL}/graphql`,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	useEffect(() => {
		new WOW().init()
	}, []);
	return (
		<>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
			<link rel="stylesheet"
				href="https://wordpress-next-webapp.azurewebsites.net/wp-content/themes/siard-wp-theme/inc/custom-styles.css?ver=1.0.0"
			/>
			<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />

			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	);
}

export default MyApp;
