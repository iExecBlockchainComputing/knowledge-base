pragma solidity ^0.5.8;
pragma experimental ABIEncoderV2;

import "./Ownable.sol";
import "./IexecDoracle.sol";

contract RainOracle is Ownable, IexecDoracle
{

	bool public isRainy;
  uint256 public date;
  bytes32 public oracleCallID;

	event ValueUpdated(
		bytes32 indexed oracleCallID,
		uint256 date,
		bool isRainy
	);

	// Use _iexecHubAddr to force use of custom iexechub, leave 0x0000000000000000000000000000000000000000 for autodetect
	constructor(address _iexecHubAddr)
	public IexecDoracle(_iexecHubAddr)
	{}

	function updateEnv(
	  address _authorizedApp
	, address _authorizedDataset
	, address _authorizedWorkerpool
	, bytes32 _requiredtag
	, uint256 _requiredtrust
	)
  public onlyOwner
	{
		_iexecDoracleUpdateSettings(_authorizedApp, _authorizedDataset, _authorizedWorkerpool, _requiredtag, _requiredtrust);
	}

	function decodeResults(bytes memory results)
	public pure returns(uint256, bool)
	{ return abi.decode(results, (uint256, bool)); }

	function processResult(bytes32 _oracleCallID)
	public
	{
		uint256 newDate;
		bool newValue;
		// Parse results
		(newDate, newValue) = decodeResults(_iexecDoracleGetVerifiedResult(_oracleCallID));
		// Process results
		require(now / 1 days >= newDate, "no-value-from-the-future");
		require(date <= newDate, "new-value-is-too-old");
		emit ValueUpdated(_oracleCallID, newDate, newValue);
		oracleCallID = _oracleCallID;
		date = newDate;
		isRainy = newValue;
	}
}
