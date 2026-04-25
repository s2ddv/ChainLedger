import dotenv from 'dotenv';
dotenv.config();

const env = {
  PORT: process.env.PORT || 3000,
  ALCHEMY_RPC_URL: process.env.ALCHEMY_RPC_URL || '',
  JWT_SECRET: process.env.JWT_SECRET || 'changeme',
  DATABASE_URL: process.env.DATABASE_URL || '',
};

if (!env.ALCHEMY_RPC_URL) {
  throw new Error('ALCHEMY_RPC_URL is not defined in .env');
}

export default env;
