import { ed25519 } from "@noble/curves/ed25519";
import { useWallet } from "@solana/wallet-adapter-react"; 
import bs58 from "bs58";
import { Button } from "./retroui/Button";
import { Input } from "./retroui/Input";

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
        <div className="mb-8">
        <h1 className="text-2xl font-normal text-gray-800 ">Message Signature:</h1>
          <div className="flex items-center gap-5" >
            <Input type="text" id="message" placeholder="Message" />
            <Button onClick={Sign}> Sign Message </Button>
        </div>
        </div>
    )
}