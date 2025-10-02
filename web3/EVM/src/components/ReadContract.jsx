import { useBlockNumber, useReadContract  } from "wagmi";
import { WagmiContractConfig } from "./contracts";

export function ReadContract(){
    const { data: balance, error, isPending} = useReadContract({
        ...WagmiContractConfig,
        functionName: 'balanceOf',
        args: [address],
        query: { enabled: !!address }
    })

    if(isPending) return <div>Laoding...</div>
    if(error){ return <div> Error: {(error.message)} </div> }

    const { data: blockNumber } = useBlockNumber({ watch: true});
    useEffect(()=>{
        refetch()
    },[blockNumber])

    return (
        <div>
            Balance: {balance?.toString()}
        </div>
    )
}