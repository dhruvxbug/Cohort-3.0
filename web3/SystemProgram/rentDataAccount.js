const { Connection, Keypair, SystemProgram, Transaction, sendTransaction } = require('@solana/web3.js')

// payer,mintAuthority ,connection
const payer = Keypair.fromSecretKey(Uint8Array.from());
const mintAthority = payer;
const connection = new Connection("https://api.devnet.solana.com");

// generate a new keypair for an account 
// decide total bytes (storage)
// get the lamports needed to store that data
// make a new transaction
// sign that transaction (createAccount)

async function main(){
   const newAccount = Keypair.generate();
   const TOTAL_BYTES = 100;
   const lamports = await connection.getMinimumBalanceForRentExemption(TOTAL_BYTES);
   const transaction = new Transaction();

   transaction.add(
    SystemProgram.createAccount({
        fromPubkey: payer.publicKey,
        newAccountPubkey: newAccount.publicKey,
        lamports: lamports,
        space: TOTAL_BYTES,
        programId: SystemProgram.programId,
    }),
   );

   //blockHash thingy 
   transaction.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
   transaction.feePayer = payer.publicKey;

   const signature = await connection.sendTransaction(transaction, [payer , newAccount]);
   console.log(`New account created at ${newAccount.publicKey.toBase58()}`);
}

main();

//SystemProgram.createAccount