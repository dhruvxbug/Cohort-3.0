import  React, { useRef } from 'react'
import { useSendTransaction} from 'wagmi'
import { parseEther } from 'viem'

export function SendTransaction(){
    const {data: hash, isPending, sendTransaction} = useSendTransaction()
     
    const toRef = useRef<HTMLInputElement>(null);
    const valueRef = useRef<HTMLInputElement>(null);
    const to = toRef.current?.value;
    const value = valueRef.current?.value;

    sendTransaction({to, value: parseEther(value)});
    
    return (
        <>
         <form onSubmit={submit}>
            <input ref={toRef} type="text" placeholder='Enter Address' required/>
            <input ref={valueRef} type="text" placeholder='amount' required />
            <button disabled={isPending} type="submit" > Send </button>
            {hash && <div>Transaction Hash: {hash} </div>}
         </form>
        </>
    )
}