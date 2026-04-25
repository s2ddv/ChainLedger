import { ethers } from 'ethers';
import provider from '../../config/blockchain';
import { WalletResponse } from './wallet.types';
import { AppError } from '../../shared/errors/AppError';

export async function getWalletBalance(address: string): Promise<WalletResponse> {
  if (!ethers.isAddress(address)) {
    throw new AppError('Invalid Ethereum address', 400);
  }

  const balanceWei = await provider.getBalance(address);

  return {
    address,
    balance: ethers.formatEther(balanceWei),
    balanceWei: balanceWei.toString(),
    network: 'Ethereum Sepolia Testnet',
  };
}
