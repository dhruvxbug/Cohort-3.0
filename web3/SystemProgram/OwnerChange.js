const { createMint } = require ('@solana/spl-token');
const { Keypair, Connection, SystemProgram, Transaction} = require('@,solana/web3.js');

const payer = Keypair.fromSecretKey(Uint8Array.from());
const connection = new Connection("https://api.devnet.solana.com");

async function main(){
    const newAccount = Keypair.generate();
    const owner = Keypair.generate();
    const TOTAL_BYTES = 100;
    const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
    const trasaction = new Transaction();
    trasaction.add(
        SystemProgram.createAccount({
            fromPubkey: payer.publicKey,
            newAccountPubKey: newAccount.publicKey,
            lamports: lamports,
            space: TOTAL_BYTES,
            programId: owner.publicKey,
        }),
    );

    await connection.sendTransaction(trasaction, [payer, newAccount]);
    console.log(`New account created at ${newAccount.publicKey.toBase58()}`);
}

main();

// we create 2 Keypair (owner, newAccount) 
// SystemProgram.createAccount => fromPubKey to newAccountPubKey and then programId: owner.publicKey