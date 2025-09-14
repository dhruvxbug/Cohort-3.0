import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from "@solana/web3.js";
import { Button } from "./retroui/Button";
import { Input } from "./retroui/Input";

export function SendToken(){
    const wallet = useWallet();
    const {connection} = useConnection();

    async function sendTokens(){
        let to = document.getElementById("to").value;
        let amount = document.getElementById("amount").value;
        const transaction = new Transaction();
        transaction.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(to),
            lamports: amount * LAMPORTS_PER_SOL,
        }));

        await wallet.sendTransaction(transaction, connection);
        alert ("sent" + amount + "SOL to" + to);
    }

    return (
        <div className="mb-8">
        <h1 className="text-2xl font-normal text-gray-800 ">Send SOL: </h1>
           <div className="flex items-center gap-5" >
            <Input type="text" id="to" placeholder="public address (to)" />
            <Input type="text" id="amount" placeholder="Amount" />
            <Button onClick={sendTokens}> Send </Button>
        </div>
        </div>
    )
}