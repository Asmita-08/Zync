// lib/reactQuery-provider.tsx
 
'use client';
 
import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from '@/trpc-client/client';
 
const url = '/api/trpc';
 
export const TRPCProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      })
  );
 
  const trpcClient = trpc.createClient({
    links: [
      httpBatchLink({
        url: url,
      }),
    ],
  });
 
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};