import {useState} from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair, Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import nacl from "tweetnacl";

export function SolanaWallet({mnemonic}){
    const[currentIndex, setCurrentIndex] = useState(0);
    const [publicKey, setPublicKey] = useState([]);
    const [balances, setBalances] = useState({});

   async function getBalance(p){
          const connection = new Connection(clusterApiUrl("devnet"), "confirmed");
          const balance = await connection.getBalance(p);
          setBalances(prev => ({...prev, [p.toBase58()]: balance / 1e9 }));
          console.log("Account Balance:", JSON.stringify(balance, null, 2));
    }

     return (
        <div>
            <button onClick={async function(){
                const seed = await mnemonicToSeed(mnemonic);1
                const path = `m/44'/501'/${currentIndex}'/0'`;
                const derivedSeed = derivePath(path, seed.toString("hex")).key;
                const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
                const keypair = Keypair.fromSecretKey(secret);
                setCurrentIndex(currentIndex +1);
                setPublicKey([...publicKey, keypair.publicKey]);
            }}> Generate SOL Wallet </button>
            {publicKey.map(p=> <div key={p.toBase58()}> {p.toBase58()} 
                <button onClick={() => getBalance(p)}> Get Balance </button> 
                {balances[p.toBase58()] !== undefined ? `Balance: ${balances[p.toBase58()]} SOL` : ""} </div>   )}
        </div>
     )
 }