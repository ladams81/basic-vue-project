pragma solidity >= 0.5.0 < 0.7.0;

import "@openzeppelin/contracts/crowdsale/Crowdsale.sol";
import "@openzeppelin/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "@openzeppelin/contracts/crowdsale/validation/TimedCrowdsale.sol";
import "@openzeppelin/contracts/crowdsale/emission/MintedCrowdsale.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract MyCrowdsale is Crowdsale, CappedCrowdsale, MintedCrowdsale, TimedCrowdsale {
  constructor(uint256 _rate,
              address payable _wallet,
              IERC20 _token,
              uint256 _cap,
              uint256 _openingTime,
              uint256 _closingTime)
  Crowdsale(_rate, _wallet, _token)
  CappedCrowdsale(_cap)
  TimedCrowdsale(_openingTime, _closingTime)
  public
  {

  }
}
