const fetch = require("node-fetch");
const ethers = require("ethers");
const fs = require("fs");

const root = "/iexec_out";
const determinismFilePath = `${root}/determinism.iexec`;
const callbackFilePath = `${root}/callback.iexec`;
const errorFilePath = `${root}/error.iexec`;

const APIKEY = "e53111fa62ba2957cfec42826c3a13f8";
const location = "Majorque";

const writeFile = (path, content) =>
  new Promise((resolve, reject) => {
    fs.writeFile(path, content, err => {
      if (err) reject(err);
      resolve();
    });
  });

const start = async () => {
  try {
    console.log(`Fetching weather of ${location} from weatherstack.com\n`);
    const res = await fetch(
      `http://api.weatherstack.com/current?query=${location}&access_key=${APIKEY}`
    );
    const json = await res.json();
    console.log("api response:\n", JSON.stringify(json, null, 2), "\n");

    const precipitation = json.current.precip;
    console.log(`precipition: ${precipitation} mm`);

    const isRainy = !!precipitation;
    const currentDay = Math.ceil(
      Math.ceil(new Date().getTime() / 1000) / (60 * 60 * 24)
    );

    console.log(`current day: ${currentDay}`);
    console.log(`it rains in ${location}: ${isRainy}\n`);

    console.log("encoding result for blockchain");
    const encoded = ethers.utils.defaultAbiCoder.encode(
      ["uint256", "bool"],
      [currentDay, isRainy]
    );
    console.log(`encoded: ${encoded}\n`);

    console.log(
      "creating result digest (used for consensus and oracle verification)"
    );
    const digest = ethers.utils.keccak256(encoded);
    console.log(`digest: ${digest}\n`);

    console.log(`writing encoded result in ${callbackFilePath}`);
    await writeFile(callbackFilePath, encoded);
    console.log(`writing digest in ${determinismFilePath}`);
    await writeFile(determinismFilePath, digest);
    console.log("done!");
  } catch (error) {
    console.error(`An error occured: ${error}`);
    await writeFile(errorFilePath, error);
  }
};

start();
