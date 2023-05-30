import { clusterApiUrl, Connection, Keypair, LAMPORTS_PER_SOL } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo, transfer } from '@solana/spl-token';

const from_secret = new Uint8Array();
const to_secret = new Uint8Array();


(async () => {
    // Step 1: Connect to cluster and generate a new Keypair
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');

    const fromWallet = Keypair.fromSecretKey(from_secret);
    const toWallet = Keypair.fromSecretKey(to_secret);

    // Step 2: Airdrop SOL into your from wallet
    const fromAirdropSignature = await connection.requestAirdrop(fromWallet.publicKey, LAMPORTS_PER_SOL);
    // Wait for airdrop confirmation
    await connection.confirmTransaction(fromAirdropSignature, { commitment: "confirmed" });

    // Step 3: Create new token mint and get the token account of the fromWallet address
    //If the token account does not exist, create it
    const mint = await createMint(connection, fromWallet, fromWallet.publicKey, null, 9);
    console.log('mint address: ', mint.toBase58());
    const fromTokenAccount = await getOrCreateAssociatedTokenAccount(
        connection,
        fromWallet,
        mint,
        fromWallet.publicKey
)
    console.log('from token account address: ',fromTokenAccount.address.toString());
    
    //Step 4: Mint a new token to the from account
    let signature = await mintTo(
        connection,
        fromWallet,
        mint,
        fromTokenAccount.address,
        fromWallet.publicKey,
        100000000000,
        []
    );
    console.log('mint tx:', signature);

    //Step 5: Get the token account of the to-wallet address and if it does not exist, create it
    const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, mint, toWallet.publicKey);
    console.log('to token account address: ', toTokenAccount.address.toString());

    //Step 6: Transfer the new token to the to-wallet's token account that was just created
    // Transfer the new token to the "toTokenAccount" we just created
    signature = await transfer(
        connection,
        fromWallet,
        fromTokenAccount.address,
        toTokenAccount.address,
        fromWallet.publicKey,
        1000000000,
        []
    );
    console.log('transfer tx:', signature);
})();