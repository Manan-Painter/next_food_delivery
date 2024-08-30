'use client'

import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'
  
const queryClient = new QueryClient()

type Props = {
    children:React.ReactNode;
}

const Quertprovider = ({children}:Props) => {
  return (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
    )
}

export default Quertprovider
