const { Connection, Keypair, SystemProgram, Transaction, sendTransaction } = require('@solana/web3.js')

// payer,mintAuthority ,connection
const payer = Keypair.fromSecretKey(Uint8Array.from([66,26,218,8,187,117,167,128,233,109,147,152,201,86,51,3,105,45,21,125,33,110,74,220,84,105,228,192,228,154,150,42,59,98,68,115,177,105,217,77,44,189,252,196,23,175,33,128,123,252,145,187,54,209,153,92,192,168,222,27,219,160,227,156]));
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