import React, { useRef } from 'react'
import { useWriteContract } from 'wagmi'

export const abi = [
    {
        name: 'mint',
        type: 'function',
        stateMutability: 'nonpayable',
        inputs: [{internalType: 'uint32', name: 'tokenId', type: 'uint32'}],
        outputs: [],
    }
]

export function MintNFT(){
    const { data: hash, writeContract} = useWriteContract();

    const tokenIdRef = useRef(null);
    const tokenId = tokenIdRef.current.value;

    writeContract({
        address: 'address',
        abi,
        functionName: 'mint',
        args: [BigInt(tokenId)],
    })

    return(
        <form>
            <input type="text" ref={tokenIdRef} placeholder="Token ID" required/>
            <button onClick={i}> Mint </button>
            {hash && <div> Transaction Hash: {hash}</div>}
        </form>
    )
}