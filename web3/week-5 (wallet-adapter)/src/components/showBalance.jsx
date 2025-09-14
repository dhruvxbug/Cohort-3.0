import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js";


export default function ShowBalance(){

    const {connection} = useConnection();
    const wallet = useWallet();

    async function getBalance(){
        if(wallet.publicKey){
            const balance = await connection.getBalance(wallet.publicKey);
            document.getElementById("balance").innerHTML= balance / LAMPORTS_PER_SOL;
        }
    }
    getBalance();
    return (
        <div className="mb-8">
          <p className="text-2xl font-normal text-gray-800" > SOL Balance: </p> <div id="balance"> </div>
        </div>
    )
}