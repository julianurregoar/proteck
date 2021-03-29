import client from '-/src/apollo/apolloClient'
import { ApolloProvider } from '@apollo/client'
import '../src/style/_app.scss'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}