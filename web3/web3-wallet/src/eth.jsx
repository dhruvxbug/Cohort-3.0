import {useState} from "react";
import { mnemonicToSeed } from "bip39";
import { ethers, Wallet, HDNodeWallet } from "ethers"

export const ETHWallet = ({mnemonic}) =>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [address, setAddress] = useState([]);
    const [balances, setBalances] = useState({});

    async function getBalance(p){
      const provider = new ethers.JsonRpcProvider("https://docs-demo.quiknode.pro/");
      const balance = provider.getBalance(p);
      setBalances(prev =>({...prev, [ethers.formatEther(p)]: balance /1e9 }));
    }
    
    return (
        <div>
            <button onClick={async function(){
                const seed = await mnemonicToSeed(mnemonic);
                const derivationPath = `m/44'/60'/${currentIndex}'/0`;
                const HDNode = HDNodeWallet.fromSeed(seed);
                const child = HDNode.derivePath(derivationPath);
                const privateKey = child.privateKey;
                const wallet = new Wallet(privateKey);
                setCurrentIndex(currentIndex+1);
                setAddress([...address, wallet.address]);
            }}>
            Add a ETH wallet 
            </button>

           {address.map(p => <div> ETH - {p}
            <button onClick={()=> getBalance(p)}> Get Balance </button>  </div>)}


        </div>
    )
}

// 1. we are using bip39 to convert our generated mnemonic to a seed phrase 
// 2. then we create an derivationPath witht he current index 
// 3. we create an HD NOde using HDWallet from ether 
// 4. child = HD Node + derivepath then privateKey from it 
// 5. new Wallet from privateKey
// 6. a new path is created as we move up the current index (diff path)
// 7. we add the wallet address 