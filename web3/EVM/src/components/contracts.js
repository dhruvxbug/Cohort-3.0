export const WagmiContractConfig = {
    address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
    abi: [
        {
            type: 'function',
            name: 'balanceOf',
            stateMutability: 'view',
            inputs: [{ name: 'account', type: 'address'}],
            outputs: [{ type: 'uint256'}],
        }, 
        {
            type: 'function',
            name: 'totalSupply',
            stateMutability: 'view',
            inputs: [],
            outputs: [{ name: 'supply', type: 'uint256'}],
        },
    ],
} 