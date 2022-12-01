import { ApolloClient,
     InMemoryCache,
     ApolloProvider,
     HttpLink,
     from,
    } from '@apollo/client';
    import {ErrorLink, onError} from '@apollo/client/link/error';

const link = from(
    ErrorLink,
    new HttpLink({url})
)


const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link
})

export default function ProductsDownload(){



}