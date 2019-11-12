# iExec Knowledge Base

This repository gathers documentation to discover blockchain and resources that can be used in preparation of and during a blockchain hackathon.

## Block 1:  Blockchain Overview (beginner)

* [Video introduction by Science Etonnante (in French)](https://www.youtube.com/watch?v=du34gPopY5Y) [french]

### Wallets

* [Metamask Official Website](https://metamask.io/)
* [How to set up Metamask](https://www.youtube.com/watch?time_continue=14&v=ZIGUC9JAAw8)

### Explorers

* [Etherscan](https://etherscan.io/) (Ethereum explorer)
* [TradeBlock](https://tradeblock.com/bitcoin/explorer) (Bitcoin explorer)
## Faucets

To interact with the blockchain, by calling a contract, or create your smart contract, you will need ether.
For testing purposes, you can ask in the following link to get a few ethers .
Give your public address and you'll receive 1 ETH,. This will be enough to start with.

* [ETH Kovan faucet](https://faucet.kovan.network/)
* [ETH Kovan faucet (gitter)](https://gitter.im/kovan-testnet/faucet)
* [RLC Kovan faucet](https://faucet.iex.ec/kovan)

## Block 2: Explore components (intermediate)

* [This website and videos](https://anders.com/blockchain/) by Anders Brownworth explain each component of a blockchain. You will learn what is a hash, blocks, blockchain, and even simulate the creation of blocks.

### Smart Contracts (developer)

Deploy your first smart contract on goerli testnet and deploy on IPFS a react front-end to interact with it.

* You can read the introductory slides[here](https://www.crypto-lyon.fr/cryptoschool/cryptoclass/decentralized-infrastructure.html) : Decentralized infrastructure – Site Dweb
* Github tutorial [gist here](https://gist.github.com/branciard/3ccbc62b84d0d07e77326f3f9d4fd640#file-a-smart-contract-on-testnet-as-back-end-with-a-react-front-end-on-ipfs)
* Video demo step-by-step: https://www.youtube.com/watch?v=nOLPf_P2N_o

If you want to learn Solidity, the language to create smart contracts on the Ethereum blockchain, a good start is:

https://cryptozombies.io/
### Miscellaneous

* From 12 words to private/public keys: https://iancoleman.io/bip39/
* Cryptocurrency Prices: https://coinmarketcap.com/fr/
* ETH prices: https://coinmarketcap.com/fr/currencies/ethereum/
* DAppNode: https://dappnode.io/
* What is a Blockchain ? https://www.ethereum.org/beginners/

### Hackathon April meetups: [French]
* Block 1 (25/06/19): Les apports de la blockchain pour son business - iExec https://www.youtube.com/watch?v=Qco2o6EhB0U
* Block 2 (25/09/19): Démarrer avec la blockchain https://www.youtube.com/watch?v=UmhO2-qk_VQ [slides](https://github.com/iExecBlockchainComputing/knowledge-base/blob/master/Bloc2-Demarrer%20avec%20la%20Blockchain%20-%20Blockathon%20April.pdf) Introduction à la blokchain en partant de l'aspect "Protocole". L’inspiration venant de ce [bon documentaire de Rémi Crussière.](https://d.tube/#!/v/emir888/QmPKHQ16owmhvoDdg4k2NRL3KH6Ha2mvZWttV8DsfZCt7c)
* Block 3 (22/10/19): Pad for block 3  https://mensuel.framapad.org/p/bloc3. Sildes: https://docs.google.com/presentation/d/1o_QJixt3KMvlCzz8F7syh3olDC6Bu1J-MHwlpiH52Bo


## Block 3: Hack with iExec

iExec leverages cutting-edge technologies in blockchain, distributed computing and Trust Execution Environments (TEE) such as intel SGX.
The iExec solution is a mix of technology and protocols that organize the exchanges between stakeholders, with the maximum level of trust, security and flexibility.

### Confidential Computing

iExec offers optional full end-to-end trusted and private execution on the decentralized cloud.
End-to-end protection means full protection of the application data, user data, embedded data as well as application output data.
Results can never be inspected by anyone else but their requester, answering the needs of highly-confidential applications and sensitive datasets.

It is possible to run an application A, using a dataset D, that produces a result R.
 - Dataset D is never be revealed.
 - Dataset D is only be used by a given application A, approved by owner of D with a whitelisting system.
 - The requester/end user is the only stakeholder able to decrypt the result R, and has no access to dataset D. 

#### Monetize your computing resources as a digital assets.

* Control and share your data processing without data leaks.
Trained AI models are an example of valuable datasets that can be rented and monetized through iExec. They are highly valuable as their training requires time, money and huge amounts of data.
 
[Monetize your IA model](https://nsfw.app.iex.ec/)


### Trusted Computing 

* Execute computations with a complete proof of execution, recorded on a blockchain.
The iExec platform, combining hardware enclaves and blockchain, offers a tamper-proof and attestable execution which could be then verified by on-chain networks,
 in order to prove the validity of the processing.

 It is possible to prove that an application A, using a dataset D, with input I produces the result R.
 - Application A is publicly attested by all stakeholders.
 - Dataset D is never be revealed. (optional)
 - The generation of the Result R is verifiable on-chain.
     

#### Oracles: Connect data from external world to the blockchain

Smart contracts live in a siloed and secure environments and have a very limited access to the real world.
Allowing developers to connect     

* How to use an oracle ([iExec's Price Feed](https://price-feed-doracle.iex.ec/))
* Create your own oracle ([iExec tutorial](https://medium.com/iex-ec/how-to-build-a-decentralized-oracle-on-ethereum-a-step-by-step-guide-d8c14719b69f))
* [What is 'DeFi'](https://themoneymongers.com/decentralized-finance-defi/)


### Collaborative computing

* In a consortium environment, the combination of data allows to explore and extract new insights from data owned by multiple stakeholders, preserving the data privacy.     

 It is possible to prove that an application A, using datasets D1 and D2, produces the result R.
 - Application A is publicly attested by all stakeholders.
 - Datasets D1 and D2 are revealed.
 - The generation of the Result R is verifiable on-chain.

For security reasons (it necessits a smart contract security audit), the multiple datasets-handling feature will be supported afte V4 (planned in december 2019) in a minor following release (V4.X).  
The usage of multiple input files is a valid workaround to build proof of concepts and prototypes of your solutions.     

### Off-Chain Compute

* Extend some features of the blockchain to your computing resources: monitoring, access controls
* Ease the deployment of applications.

### Decentralized marketplace for computing resources


* Open market : Anyone can become a cloud provider or requester 
* Data renting : Data providers generate revenues by renting datasets
* Unstoppable applications : Developers can deploy decentralized applications and decentralized oracles that run on o-chain compute 
* Scalable computing : Requesters and developers have access to cloud computing as a commodity • Free pricing | Providers freely set their pricing strategy 
* Pay-per-task : Requesters only pay for what they consume 
* Improved efficiency : Blockchain’s smart contracts streamline and automate processes such as payments or results validation 
* High-grade security : Results are encrypted, and host machines are never able to inspect, copy or tamper with data 
* Custom permissioning : Providers can decide who has access to their resources, and revoke it when needed
* Real-time monitoring : Every transaction is recorded on the blockchain

