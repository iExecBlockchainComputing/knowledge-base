pragma solidity >=0.4.21 <0.6.0;

contract RainInsurance {

  address public owner;
  uint public compensation;
  bool public isRainy;
  uint private ETHER;

  event TopUpBalanceEvent(address donator, uint amount);
  event WeatherChange(bool isRainy);
  event RainyCompensation(address beneficiary, uint amount);

  constructor() public payable {
    ETHER = 1000000000000000000;
    require(msg.value >= 1*ETHER/10, "No money for deploy");
    owner = msg.sender;
    compensation = 1*ETHER / 100;
  }

  function topUpBalance() public payable returns (bool success) {
    require(msg.value > 0, "No money for topup");
    emit TopUpBalanceEvent(msg.sender, msg.value);
    return true;
  }

  function viewBalance() public view returns (uint balance) {
    return address(this).balance;
  }

  function setIsRainy(bool _isRainy) public {
    require(_isRainy != isRainy, "Please change weather");
    isRainy = _isRainy;
    emit WeatherChange(isRainy);
  }

  function getRainyCompensation() public returns (bool success) {
    require(address(this).balance > compensation, "Insurance is broke");

    address payable customer = msg.sender;

    require(isRainy, "Day should be rainy for compensation");

    customer.transfer(compensation);

    emit RainyCompensation(msg.sender, compensation);

    return true;
  }

}
