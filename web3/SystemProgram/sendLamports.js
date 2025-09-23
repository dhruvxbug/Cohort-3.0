const { Connection, Keypair, SystemProgram, Transaction, sendTransaction } = require('@solana/web3.js')

// payer,mintAuthority ,connection
const payer = Keypair.fromSecretKey(Uint8Array.from());
const mintAthority = payer;
const connection = new Connection("https://api.devnet.solana.com");

async function main(){
    const newAccount = Keypair.generate();
    const TOTAL_BYTES = 100;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    const transaction =new Transaction();

    transaction.add(
        SystemProgram.transfer({
            fromPubkey: payer.publicKey,
            toPubkey: newAccount.publicKey,
            lamports,
        }),
    );

    await connection.sendTransaction( transaction, [payer]);
    console.log(`Transferred to ${newAccount.publicKey.toBase58()}`);
}

main();

// SystemProgram.transfer 