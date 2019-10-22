const loginHelper = document.getElementById("login-helper");
const mainContainer = document.getElementById("content");
const weatherOutput = document.getElementById("weather");
const userAddressOutput = document.getElementById("user-address");
const userBalanceOutput = document.getElementById("user-balance");
const insuranceBalanceOutput = document.getElementById("insurance-balance");
const getCompensationButton = document.getElementById("get-compensation");
const getCompensationError = document.getElementById("get-compensation-error");
const refreshButton = document.getElementById("refresh");

module.exports = {
  loginHelper,
  mainContainer,
  weatherOutput,
  userAddressOutput,
  userBalanceOutput,
  insuranceBalanceOutput,
  refreshButton,
  getCompensationButton,
  getCompensationError
};
