import * as React from 'react'
import { http, createConfig } from 'wagmi'
import { mainnet, base, optimism} from 'wagmi/chains'
import { injected, metaMask, safe} from 'wagmi/connectors'
import { QueryClient, useQuery, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider, useConnect, useAccount, useBalance, useDisconnect , useEnsAvatar, useEnsName } from 'wagmi';
import { SendTransaction } from './components/SendTransaction';
import { ReadContract } from './components/ReadContract';
import { MintNFT } from './components/MintNFT'

const queryClient = new QueryClient()

export const config = createConfig({
    chains: [mainnet,base],
    connectors:[
        injected(),
        metaMask(),
        safe()
    ],
    transports:{
        [mainnet.id]: http,
        [base.id]: http,
    },
})

function WalletConnector(){
    const { connectors, connect } = useConnect();
    return connectors.map((connector)=>(
        <button key={connector.id} onClick={()=> connect ({connector})}>
         {connector.icon && <img src={connector.icon} alt={connector.name} style={{ width: "20px", height: "20px" }} />}   
         {connector.name}
        </button>
    ))
}

function Account(){
    const { address } = useAccount();
    const { disconnect } = useDisconnect();
    const balance = useBalance({address});
    return( 
        <div>
          {address && 
            <div>
                Your address- {address}
                Your Balance- {balance.data?.formatted}
            </div>}

            <button onClick={()=> disconnect()}> Disconnect </button>
        </div>
    )
}

export default function App(){

    return (
        <>
          <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
              <WalletConnector/>
              <Account/>
              <SendTransaction/>
              <ReadContract/>
              <MintNFT/>
            </QueryClientProvider>
          </WagmiProvider>
        </>
    )
}

// https://wagmi.sh/react/guides/connect-wallet