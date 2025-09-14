import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { useState } from 'react'
import Wallet from '../App';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import { Input } from './retroui/Input';
import { Button } from './retroui/Button';

function AirDrop() {
  const wallet = useWallet();
  const { connection } = useConnection();

  async function requestAirdrop(){
    let amount = document.getElementById("amount").value;
    await connection.requestAirdrop(wallet.publicKey, amount* LAMPORTS_PER_SOL);
    alert("Airdropped " + amount + " SOL to " + wallet.publicKey.toBase58());
  } 

  return (
    <div className='mb-8'>
     <h2 className="text-2xl font-normal text-gray-800">Request Testnet Airdrop:</h2>
      <div className="flex items-center gap-5">
      <Input id="amount" type="text" placeholder="Amount" />
      <Button onClick={requestAirdrop}> Send Airdrop</Button>
    </div>
    </div>
  )
}

export default AirDrop
