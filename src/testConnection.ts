import { ethers } from 'ethers';
import provider from './config/blockchain';

async function main(): Promise<void> {
  const blockNumber = await provider.getBlockNumber();
  console.log(`Spolia connected, current block:  ${blockNumber}`);

  const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
  const balance = await provider.getBalance(address);
  console.log(`Balance: ${ethers.formatEther(balance)} ETH`);
}

main();