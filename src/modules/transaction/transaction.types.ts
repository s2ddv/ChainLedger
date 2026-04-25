export interface TransactionResponse {
  hash: string;
  from: string;
  to: string | null;
  value: string;
  blockNumber: number | null;
}
