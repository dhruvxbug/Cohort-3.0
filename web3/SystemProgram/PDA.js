const { PublicKey } = require('@solana/web3.js');
const { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID } = require('@solana/spl-token');

const userAddress = new PublicKey('hbfjvkshdf');
const tokenMintAddress = new PublicKey('fbhvbhfdj');

// function that uses userAddress + TokenAddress + TOKEN_PROGRAM_ID + bump (255) 
// equals to public key off the ed25519 curve with no privatekey
const getAssociatedTokenAddress = (mintAddress, ownerAddress) =>{
    return PublicKey.findProgramAddressSync(
        [
            ownerAddress.toBuffer(),
            TOKEN_PROGRAM_ID.toBuffer(),
            mintAddress.toBuffer(),
        ],
        ASSOCIATED_TOKEN_PROGRAM_ID
    );
};

const [associatedTokenAddress, bump] = getAssociatedTokenAddress(tokenMintAddress, userAddress);
console.log(`Associated Token Address: ${associatedTokenAddress.toBase58()}, bump: ${bump}`);

// creation of PDA using the above findProgramAddress
const PDA = PublicKey.createProgramAddressSync(
    [
      userAddress.toBuffer(), 
      TOKEN_PROGRAM_ID.toBuffer(), 
      tokenMintAddress.toBuffer(),
      Buffer.from([255])
    ],
    ASSOCIATED_TOKEN_PROGRAM_ID,
)

console.log(`PDA: ${PDA}`);