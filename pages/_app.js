import "../styles/theme.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// window.jQuery = jQuery;
export const client = new ApolloClient({
	uri: `${process.env.WORDPRESS_URL}/graphql`,
	cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
	return (
		<>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
			<ApolloProvider client={client}>
				<Component {...pageProps} />
			</ApolloProvider>
		</>
	);
}

export default MyApp;
