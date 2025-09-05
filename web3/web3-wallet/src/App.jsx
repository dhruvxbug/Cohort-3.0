import { useState } from 'react'
import { generateMnemonic } from "bip39";
import { ETHWallet } from './eth';
import { SolanaWallet } from './sol';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <button onClick={
        async function() {
        const mn = await generateMnemonic();
        setMnemonic(mn)
      }}>
        Create Seed Phrase
      </button>
 
       <input type="text" value={mnemonic}></input>

       <ETHWallet mnemonic={mnemonic}/>
       <SolanaWallet mnemonic={mnemonic} />
    </>
  )
}

export default App

// we use generateMnemonic function form bip39 to get a seed phrase mnemonic 
