import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react"; 
import bs58 from "bs58";

export default function SignMessage(){
    const {publicKey, signMessage} = useWallet();

    async function Sign(){
        if(!publicKey) throw new Error("Wallet not connected");
        if(!signMessage) throw new Error("Wallet does not support message sign");

        const message = document.getElementById("message").value;
        const encodedMessage = new TextEncoder().encode(message);
        const signature = await signMessage(encodedMessage);

        if(!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("message signature invalid");
        alert('success', `Message signature: ${bs58.encode(signature)}`);
    }

    return (
        <div>
            <input type="text" id="message" placeholder="Message" />
            <button onClick={Sign}> Sign Message </button>
        </div>
    )
}