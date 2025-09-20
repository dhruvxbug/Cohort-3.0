// createMint similar to createMint.js and then token logic 

//imports 
const { createMint, getOrCreateAssociatedTokenAccount, mintTo } = require('@solana/spl-token');
const { Keypair, Connection, clusterApiUrl,  TOKEN_PROGRAM_ID, PublicKey } = require('@solana/web3.js');

// payer (private key => mintAuthority) and connection
const payer = Keypair.fromSecretKey(Uint8Array.from([102,144,169,42,220,87,99,85,100,128,197,17,41,234,250,84,87,98,161,74,15,249,83,6,120,159,135,22,46,164,204,141,234,217,146,214,61,187,254,97,124,111,61,29,54,110,245,186,11,253,11,127,213,20,73,8,25,201,22,107,4,75,26,120]));
const mintAuthority = payer;

// usual create Mint function
async function createMintForToken(payer, mintAthority){
     const mint = await createMint(
        connection,
        payer,
        mintAthority,
        null,
        6,
        TOKEN_PROGRAM_ID
     );
     console.log('Mint created at', mint.toBase58());
     return mint;
}


// using getOrCreateAssociatedTokenAccount function to find the mint and account or create it (fetch)
// then printing the tokenAccount.address 
// then we are using mintTo function to mint token 
// mintTo input - connection ,payer, tokenAccount.address, amount
// this mintTo function also checks for mint Authority ,read about that in spl-token library 
// it will throw an fixed supply error if the mint Authority isn't granted 
// so basically you cannot mint token without mintAuthorty but you can buy an already made minted (created token) on an exchange and see the change in its value and  liquidity 

async function mintNewTokens(mint, to, amount){
    const tokenAccount = await getOrCreateAssociatedTokenAccount(
        connection, 
        payer,
        mint,
        new PublicKey(to)
    );

    console.log('Token account created at', tokenAccount.address.toBase58());
    await mintTo(
        connection,
        payer,
        mint,
        tokenAccount.address,
        payer,
        amount
    )
    console.log('Minted', amount, 'tokens to', tokenAccount.address.toBase58());
}

// main function ,calling both the mint creation and minting function 
async function main(){
    const mint = await createMintForToken(payer, mintAuthority.publicKey);
    await mintNewTokens(mint, mintAuthority.publicKey, 100);
}

main();
