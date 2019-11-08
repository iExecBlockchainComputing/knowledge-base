# iExec Knowledge Base

This repository gathers documentation to discover blockchain and resources that can be used in preparation of and during a blockchain hackathon.

## Blockchain

### Overview (easy)

* [Video introduction by Science Etonnante (in French)](https://www.youtube.com/watch?v=du34gPopY5Y)

#### Wallets

* [Metamask Official Website](https://metamask.io/)
* [How to set up Metamask](https://www.youtube.com/watch?time_continue=14&v=ZIGUC9JAAw8)

#### Explorers

* [Etherscan](https://etherscan.io/) (Ethereum explorer)
* [TradeBlock](https://tradeblock.com/bitcoin/explorer) (Bitcoin explorer)

## Faucets

To interact with the blockchain, by calling a contract, or create your smart contract, you will need ether.
For testing purpose, you can ask in the following link to get few.
Give your public address and you'll receive 1 ethers, enough to start.

* [ETH Kovan faucet](https://faucet.kovan.network/)
* [ETH Kovan faucet (gitter)](https://gitter.im/kovan-testnet/faucet)
* [RLC Kovan faucet](https://faucet.iex.ec/kovan)

## Block 2: Explore components (intermediate)

* [This website and videos](https://anders.com/blockchain/) by Anders Brownworth allow to understand each component of a blockchain. You will learn what is a hash, blocks, blockchain, simulate the creation of blocks, etc.

### Smart Contracts (developer)

Deploy your first smart contract on goerli testnet and deploy on IPFS a react front-end to interact with it.

* You can read slides introduction [here](https://www.crypto-lyon.fr/cryptoschool/cryptoclass/decentralized-infrastructure.html) : Decentralized infrastructure – Site Dweb
* Github tutorial [gist here](https://gist.github.com/branciard/3ccbc62b84d0d07e77326f3f9d4fd640#file-a-smart-contract-on-testnet-as-back-end-with-a-react-front-end-on-ipfs)
* Video demo step-by-step: https://www.youtube.com/watch?v=nOLPf_P2N_o

If you want to learn solidity, language to create smart contracts on blockchain https://cryptozombies.io/ is a good start.

### Miscellaneous

* From 12 words to private/public keys : https://iancoleman.io/bip39/
* Cryptocurrency Prices : https://coinmarketcap.com/fr/
* ETH prices : https://coinmarketcap.com/fr/currencies/ethereum/
* DAppNode : https://dappnode.io/
* What is a Blockchain ? https://www.ethereum.org/beginners/

### Hackathon April meetups : [French]
* Block 1 (25/06/19) : Les apports de la blockchain pour son business - iExec https://www.youtube.com/watch?v=Qco2o6EhB0U
* Block 2 (25/09/19): Démarrer avec la blockchain https://www.youtube.com/watch?v=UmhO2-qk_VQ [slides](https://github.com/iExecBlockchainComputing/knowledge-base/blob/master/Bloc2-Demarrer%20avec%20la%20Blockchain%20-%20Blockathon%20April.pdf) Introduction à la blokchain en partant de l'aspect "Protocole". inspiration venant de ce [bon documentaire de Rémi Crussière.](https://d.tube/#!/v/emir888/QmPKHQ16owmhvoDdg4k2NRL3KH6Ha2mvZWttV8DsfZCt7c)
* Block 3 (22/10/19):


## Block 3: What can I hack with iExec?

iExec leverages cutting-edge technologies in blockchain, distributed computing and Trust Execution Environments (TEE, intel SGX).
The iExec is well-suited to create solve problem

### Confidential Computing

iExec offers optional full end-to-end trusted and private execution on the decentralized cloud.
End-to-end protection means full protection of the application data, user data, embedded data as well as application output data.
Results can never be inspected by anyone else but their requester, answering the needs of highly-confidential applications and sensitive datasets.

It is possible to run an application A, using a dataset D, that produces a result R.
 - Dataset D should never be revealed.
 - Dataset D should only be used by application A, reviewed and allowed by owner of D, whitelisting system.
 - The requester/end user is the only stakeholder able to decrypt the result. 

#### Monetize your computing resources as a digital assets.

* Control and share your data processing without data leaks.

### Trusted Computing 

* Execute computation with a complete proof of execution, recorded on a blockchain.
 iExec platform, combining hardware enclaves and blockchain, offers a tamper-proof and attestable execution which could be then verified by on-chain networks,
 in order to prove the validity of the processing.

 It is possible to proof that an application A, using a dataset D, with input I produces the result R.
 - Application A is publicly attested by all stackholders.
 - Dataset D should never be revealed. (optional)
 - The generation of the Result R is verifiable on-chain.
 

#### Oracles: Connect data from real world to the blockchain

Smart Contract lives in a siloed and highly secure environments and have a very limited access to the real world.
Allowing developers to connect     

* How to use an oracle ([iExec's Price Feed](https://price-feed-doracle.iex.ec/))
* Create your own oracle ([iExec tutorial](https://medium.com/iex-ec/how-to-build-a-decentralized-oracle-on-ethereum-a-step-by-step-guide-d8c14719b69f))
* [What is 'DeFi'](https://themoneymongers.com/decentralized-finance-defi/)


### Collaborative computing

* In a consortium environment, the combination of data allows to explore and extract new insight from data  owned by multiple stakeholders, preserving the data privacy.     

 It is possible to proof that an application A, using a dataset D1 and D2, produces the result R.
 - Application A is publicly attested by all stakeholders.
 - Datasets D1 and D2 must never be revealed.
 - The generation of the Result R is verifiable on-chain.

For security reasons (smart contract security audit), the multiple datasets handling feature will not be supported before release v4.x. 
The usage of multiple inputs files must be used with the current version, this is workaround to build proof of concepts.     


### Off-Chain Compute

* Extend some feature of the blockchain to your computing resources: monitoring, access control
* Ease the deployment of application. 


### decentralized marketplace for computing resources

* Create decentralized, autonomous and unstoppable application application censorship resistant applications
you don't share your data, you allow someone to buy for the processing of your assets


### Pad

https://mensuel.framapad.org/p/bloc3

