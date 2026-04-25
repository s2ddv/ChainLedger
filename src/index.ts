import express from 'express';
import cors from 'cors';
import env from './config/env';
import { errorMiddleware } from './middleware/error.middleware';
import walletRoutes from './modules/wallet/wallet.routes';
import transactionRoutes from './modules/transaction/transaction.routes';
import authRoutes from './modules/auth/auth.routes';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/wallet', walletRoutes);
app.use('/api/transaction', transactionRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.json({
    project: 'ChainLedger',
    status: 'online',
    network: 'Ethereum Sepolia Testnet',
    endpoints: {
      wallet: '/api/wallet/:address/balance',
      transaction: '/api/transaction/:hash',
      auth: '/api/auth/login',
    },
  });
});

// Global error handler
app.use(errorMiddleware);

app.listen(env.PORT, () => {
  console.log(`🚀 ChainLedger running on port ${env.PORT}`);
});
