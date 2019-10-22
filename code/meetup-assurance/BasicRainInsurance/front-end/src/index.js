import "./styles.css";
import regeneratorRuntime from "regenerator-runtime";
import { Contract, providers, utils } from "ethers";
import rainInsuranceAbi from "./abi.json";
import {
  loginHelper,
  mainContainer,
  weatherOutput,
  userAddressOutput,
  userBalanceOutput,
  insuranceBalanceOutput,
  refreshButton,
  getCompensationButton,
  getCompensationError
} from "./domElements";
import { setTimeout } from "timers";

const rainInsuranceAddress = "0xA49658DaaeE0Fb7f42DA7D29E7DeD4fd25F27E47";

const sleep = ms => new Promise(res => setTimeout(res, ms));

(async () => {
  try {
    const ethereum = window.ethereum;
    await ethereum.enable();

    mainContainer.hidden = false;
    loginHelper.hidden = true;

    const web3provider = new providers.Web3Provider(ethereum);

    const { chainId } = await web3provider.getNetwork();
    if (chainId !== 42)
      throw new Error("unsupported blockchain, please switch to kovan (42)");

    const web3Signer = web3provider.getSigner();

    const rainInsuranceContract = new Contract(
      rainInsuranceAddress,
      rainInsuranceAbi,
      web3Signer
    );

    const refreshMyWallet = async () => {
      const address = await web3Signer
        .getAddress()
        .catch(e => console.error(e));
      userAddressOutput.innerText = `Vous êtes connecté avec le wallet ${address}`;
      const balance = await web3provider
        .getBalance(address)
        .catch(e => console.error(e));
      userBalanceOutput.innerText = `Il y'a ${utils.formatEther(
        balance
      )} Eth dans votre wallet`;
    };

    const refreshinsuranceBalance = async () => {
      const compensation = await rainInsuranceContract
        .compensation()
        .catch(e => console.error(e));
      const balance = await rainInsuranceContract
        .viewBalance()
        .catch(e => console.error(e));
      insuranceBalanceOutput.innerText = `Il y'a ${utils.formatEther(
        balance
      )} Eth sur le contrat d'assurance, le montant de l'indemnité est de ${utils.formatEther(
        compensation
      )} Eth`;
    };

    const refreshIsRainy = async () => {
      const isRainy = await rainInsuranceContract
        .isRainy()
        .catch(e => console.error(e));
      weatherOutput.innerText = isRainy
        ? `Aujourd'hui il pleut :(`
        : `Aujourd'hui il ne pleut pas :)`;
    };

    const refreshAll = () => {
      refreshIsRainy();
      refreshinsuranceBalance();
      refreshMyWallet();
    };

    const getRainCompensation = async () => {
      try {
        getCompensationError.innerText = "";
        const tx = await rainInsuranceContract.getRainyCompensation();
        await tx.wait();
        await sleep(5000);
        refreshAll();
      } catch (e) {
        getCompensationError.innerText = e.message;
      }
    };

    refreshButton.addEventListener("click", refreshAll);
    getCompensationButton.addEventListener("click", getRainCompensation);

    refreshAll();
  } catch (e) {
    console.error(e.message);
  }
})();
