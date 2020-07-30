import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';

import { client } from 'graphql/client-config';
import { store } from 'store';

type Props = {
  children: ReactNode;
};

export const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>{children}</Provider>
    </ApolloProvider>
  );
};
