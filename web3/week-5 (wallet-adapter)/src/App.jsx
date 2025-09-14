import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import AirDrop from './components/RequestAirDrop';
import ShowBalance from './components/showBalance';
import SignMessage from './components/SignMessage';
import { SendToken } from './components/SendToken';

const Wallet = () => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new UnsafeBurnerWalletAdapter(),
        ], [network]
    );

    return (
        <div className="min-h-screen w-100% flex flex-col items-center justify-center p-8 bg-gradient-to-br from-orange-100 via-yellow-50 to-amber-100">
                <ConnectionProvider endpoint={endpoint}>
                    <WalletProvider wallets={wallets} autoConnect>
                        <WalletModalProvider>
                                <h1 className="text-4xl font-head font-bold text-gray-800 mb-8">Simple Wallet Adapter</h1>
                                <div className='flex items-center gap-4 mb-6'>
                                    <WalletMultiButton />
                                    <WalletDisconnectButton />
                                </div>
                                    <AirDrop/>
                                    <ShowBalance/>
                                    <SignMessage/>
                                    <SendToken/>
                        </WalletModalProvider>
                        <div className="mt-12">
                            <h4 className="text-lg text-gray-600">
                                Made by <a href="https://x.com/dhruvxbug" className="text-blue-600 hover:text-blue-800 underline font-medium">Dhruv</a>
                            </h4>
                         </div>
                    </WalletProvider>
                </ConnectionProvider>
        </div>
    );
};

export default Wallet