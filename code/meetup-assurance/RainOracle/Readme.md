# Déploiement d'un smart contract Oracle de pluie avec iExec

# Application oracle

Un simple script Nodejs qui s'exécute dans un container Docker.
Le script effectue un appel à une API météo pour savoir s'il pleut à Majorque et stocke le résultat et la date encodés pour la blockchain dans un fichier.

## Build & test en local

```
cd oracle-app/
docker build -t test-oracle-app .
docker run test-oracle-app
```

## Publication sur dockerhub

```
docker tag test-oracle-app myusername/does-it-rain-in-majorque:1.0.0
docker push myusername/does-it-rain-in-majorque:1.0.0
```

## Publication sur iExec

https://codesandbox.io/embed/app-management-iexec310-e3uxv?fontsize=14&view=preview

Deploy app pour référencer l'application sur la blockchain
=> l'application est référencée sur la blockchain par un smart contract (bien noter l'address)
Sell app pour spécifier les condition d'utilisation de l'Application

# Smart contract oracle

Un smart contract qui expose une valeur.
La valeur ne peut être mise à jour que par le résultat d'une application donnée exécutée sur iExec.
N'importe qui peut demander la mise à jour de l'oracle en fournissant la référence d'un résultat valide.

Le propriétaire de l'oracle peut spécifier les condition d'update:

- l'application
- le niveau de confiance à atteindre en augmentant la taille du consensus (trust)
- l'utilisation ou non d'un environnement TEE (trusted execution environnment)

## Deploiement du smart contract

via [Remix](https://remix.ethereum.org)

ouvrir un environnement solidity
importer `single-file-contract/RainOracle.sol` dans Remix
vérifier la compilation (Compile RainOracle.sol)
=> pas d'erreur, seulement des warning liées à l'utilisation de ABIEncoderV2
déployer en utilisant Metamask en choisissant Environment `ìnjected Web3`
=> on obtient une nouvelle address de smart contract pour RainOracle.

## Paramétrage

utiliser la méthode `updateEnv` pour modifier les condition d'acceptation d'un résultat

- \_authorizedApp: l'address de l'application déployée précédement sur iExec
- \_authorizedDataset: `0x0000000000000000000000000000000000000000` pas de dataset requis
- \_authorizedWorkerpool: `0x0000000000000000000000000000000000000000` n'importe quel workerpool peut être utilisé pour exécuter l'application.
- \_requiredtrust: 0 (une seule exécution) 10 (réplication requise)
- \_requiredtag: `0x0000000000000000000000000000000000000000000000000000000000000000` pas de TEE requis

## Accès au smart contract sur etherscan

chercher l'address du smart contrract RainOracle sur [etherscan kovan](https://kovan.etherscan.io)
sur l'onglet Contract cliquer sur Verify and Publish
sélectionner Compiler Type: Solidity (single file) et la version du compiler utilisé lors du déploiement via Remix
copier le code `single-file-contract/RainOracle.sol` dans le champ Solidity Contract Code
cliquer sur Verify and Publish

=> etherscan va générerer les accès aux methodes du smart contract, ces methodes pourront être invoquées depuis l'onglet Contract sur etherscan.

# Declenchement d'une mise à jour par exécution de l'application via iExec

La plateforme décentralisée iExec utilise sa propre monnaie appelée RLC, cette monnaie existe sur la blockchain ethereum.
Il est possible de se procurer du RLC sur la chaîne de test (Kovan) en faisant une demande sur https://faucet.iex.ec/kovan

Sur la marketplace iExec https://market.iex.ec
Cliquer sur Account pour deposer des RLC sur votre compte et payer la puissance de calcul
Acheter une exécution de l'application déployée et renseigner l'addresse du smart contract oracle dans callback
