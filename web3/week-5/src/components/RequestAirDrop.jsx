import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useState } from 'react'
import Wallet from '../App';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';

function AirDrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop(){
    let amount = document.getElementById("amount").value;
    await connection.requestAirdrop(wallet.publicKey, amount* LAMPORTS_PER_SOL);
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
  } 

  return (
    <>
      <input id="amount" type="text" placeholder="Amount" />
      <button onClick={requestAirdrop}> Send Airdrop</button>
    </>
  )
}

export default AirDrop
