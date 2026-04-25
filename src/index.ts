import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    project: 'ChainLedger',
    status: 'online',
    network: 'Ethereum Sepolia Testnet'
  });
});

app.listen(PORT, () => {
  console.log(`ChainLedger running on port ${PORT}`);
});