'use client';

import React, { useState } from 'react';
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PropTypes from 'prop-types';

export default function Providers({ children }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  }));

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}

Providers.propTypes = {
  children: PropTypes.node.isRequired,
};
