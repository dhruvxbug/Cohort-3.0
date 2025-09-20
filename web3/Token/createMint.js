
//CREATE MINT //

//imports
const { createMint } = require('@solana/spl-token');
const { Keypair, Connection, clusterApiUrl,  TOKEN_PROGRAM_ID } = require('@solana/web3.js');

// keypair (mintAuthority) from private key and connection
const payer = Keypair.fromSecretKey(Uint8Array.from([102,144,169,42,220,87,99,85,100,128,197,17,41,234,250,84,87,98,161,74,15,249,83,6,120,159,135,22,46,164,204,141,234,217,146,214,61,187,254,97,124,111,61,29,54,110,245,186,11,253,11,127,213,20,73,8,25,201,22,107,4,75,26,120]));
const mintAthority = payer;
const connection = new Connection(clusterApiUrl('devnet'));

// createMint function contains connection, payer , MintAuthority, freeze Authority, decimals, TOKEN_PROGRAM_ID
async function createMintForToken(payer, mintAuthority) {
    const mint = await createMint(
        connection,
        payer,
        mintAuthority,
        null,
        6,
        TOKEN_PROGRAM_ID
    );
    // mint turned toBse58()
    console.log('Mint created at', mint.toBase58());
    return mint;
}

async function main() {
    const mint = await createMintForToken(payer, mintAthority.publicKey); // feeding keypair + publicKey into the above function 
}
main();


// we use the crateMint function provided by the @solana/spl-token library but its requires private key (direct form)
// we can provide private key locally here just like this example but it is not possible in dApps (extension wallets)
// the solution for that is to get the createMint function directly into the main code for websites (dApps)
// which is displayed in the next file 





//AIRDROP 

//imports
const {Connection, LAMPORTS_PER_SOL, clusterApiUrl, PublicKey} = require('@solana/web3.js');

// everything works using connection like requestAirdrop and confirmTransaction 
async function airdrop(publicKey, amount) {
    const airdropSignature = await connection.requestAirdrop(new PublicKey(publicKey), amount);
    await connection.confirmTransaction({signature: airdropSignature})
}


airdrop("GokppTzVZi2LT1MSTWoEprM4YLDPy7wQ478Rm3r77yEw", LAMPORTS_PER_SOL).then(signature => {
    console.log('Airdrop signature:', signature);
});

// simple airdrop function in code format , CLI alternate - solana airdrop 2