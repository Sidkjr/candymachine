# CandyMachine 🍬⚙️
This repo contains a Candymachine UI with a NFT Minting through SPL Tokens functionality.

![8054247](https://github.com/Sidkjr/candymachine/assets/40859683/d62108e9-fa3f-4037-8ef1-b1ca069d7601)

## Description

The repository comes with a NFT minting Project as well as an Token Generation functionality which allows you to pay for the mint fee. The Technology used here is:

- ```node 16.17.1```
- ```npm 9.6.6```
- ```yarn 1.22.19```
- ```spl-token - 2.3.0```
- ```CandyMachine - Sugar Cli 1.2.2```
- ```Metaplex CandyMachine UI```

## Getting Started

* Git Clone this repository into a folder - ```git clone https://github.com/Sidkjr/candymachine```.
* Three Phases to Completely Set the Project up.
* Phase 1:
  - cd into the folder /CreateSplToken - ```cd CreateSplToken```.
  - Install @solana/web3.js and @solana/spl-token - ```npm i @solana/web3.js``` and  ```npm i @solana/spl-token```.
  - In the ```index.js``` file, enter your solana dummy private keys at the place of the underscore. (Caution: ```from_secret``` should be the Mint Token authority as who'd mint the SPL tokens. Whereas the ```to_secret``` is the reciever wallet)
  ```javascript
  const from_secret = new Uint8Array([_]);
  const to_secret = new Uint8Array([_]);
  ```
  - In the terminal, type: ```node index.js```
  - ```mint address: U2z1xz4Bg```... Is the Token Identification. (Or. Token's Public Minting Key).
  - ```from token account address: I7a2d7A5```... Is the Token's Account Address (Where the Token is stored after it's minted).
  - Carefully Make note of Both.
  - Check if your 'Dummy' wallet, if it has recieved the Token or not. It should say Unknown token for now.
  - Time for Customization!
  - Head to - https://www.dexlab.space/mintinglab/spl-token/.
  - Click on your Unknown Token -> Goto Update Metadata Tab.
  - Sign the Transaction and proceed.
  - Update your Token as per your wish
  - ![image](https://github.com/Sidkjr/candymachine/assets/40859683/abd952e1-b6a3-41ca-898f-101aed253b0f)
  - Check if it has been updated or not
  - ![image](https://github.com/Sidkjr/candymachine/assets/40859683/fb5912d8-27d9-442d-9312-8f1e653e9baf)
 
 * Phase 2:
    - Cd out from the /CreateSplToken back into the root folder.
    - cd into the /CandyMachine/ folder - ```cd CandyMachine```
    - Make sure you have sugar-cli downloaded and updated to the newest version. If not go here - https://crates.io/crates/sugar-cli
    - In the assets Folder, You will find the Available NFTs that you can deploy to the CandyMachine with their respective JSON files. 
    - You are free to change them however you wish.
    - Create your config.json file using the command in the terminal - ```sugar create-config```
    - You will have a list of questions in front of you, With each meaning what, you can find out from this guide - https://docs.metaplex.com/developer-tools/sugar/tutorials/my-first-candy-machine
    - In the additional options, Select SPL Tokens, and the paste both the Mint address and Token Account address you got from Phase 1.
    - In the terminal next, type ```sugar upload```. Your NFTs will be uploaded to Arweawe.
    - Next type, ```sugar deploy```. You will recieve your CandyMachine Id. Keep it Handy!

* Phase 3:
    - Cd out of CandyMachine - ```cd ..``` and cd into CandyMachineUI - ```cd CandyMachineUI```.
    - In the .env file, Enter your CandyMachine id as a Variable value (Don't Enclose it in Strings.).
    - Make sure you have yarn installed. You can check using - ```yarn --version```
    - In the terminal, type ```yarn install```.
    - Then type, ```yarn start```.
    - Your NFT Minting UI will be displayed on the Screen in the Browser.
    - You can Mint your NFTs now and you will see that the Transaction signature details show that you will be paying in the SPL token, Which You created!!.
    - ![Screenshot from 2023-05-30 07-03-13](https://github.com/Sidkjr/candymachine/assets/40859683/c1d32b3a-a610-48ad-94f2-216e402a15f9)
    - ![Screenshot from 2023-05-30 07-03-30](https://github.com/Sidkjr/candymachine/assets/40859683/6f31a643-0341-4019-b00f-7a833021a7c3)
    - ![Screenshot from 2023-05-30 07-04-38](https://github.com/Sidkjr/candymachine/assets/40859683/4fae58e0-6e52-4fa0-bff5-4602c4774433)
    - ![Screenshot from 2023-05-30 07-04-23](https://github.com/Sidkjr/candymachine/assets/40859683/034a35a5-728e-428c-a5ac-5c4f3a9344e6)

# Happy Minting!


## Authors

Siddhant Khare  
https://www.linkedin.com/in/siddhant-khare-13938920a/
