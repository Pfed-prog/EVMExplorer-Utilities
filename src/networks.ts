export type ChainType =
  | 'mainnet'
  | 'optimism'
  | 'base'
  | 'mode'
  | 'zora'
  | 'redstone'
  | 'polygon'
  | 'arbitrum'
  | 'filecoin';

const networkNameTitles: Record<number, string> = {
  1: 'Ethereum',
  10: 'Optimism',
  137: 'Polygon MATIC',
  690: 'Redstone',
  8453: 'Base',
  34443: 'Mode Network',
  42161: 'Arbitrum One Nitro',
  7777777: 'Zora',
};

const networkNames: Record<number, ChainType> = {
  1: 'mainnet',
  10: 'optimism',
  137: 'polygon',
  314: 'filecoin',
  690: 'redstone',
  8453: 'base',
  34443: 'mode',
  42161: 'arbitrum',
  7777777: 'zora',
};

const networkNameUniswap: Record<number, string> = {
  1: 'ethereum',
  10: 'optimism',
  137: 'polygon',
  42161: 'arbitrum',
};

const networkIds: Record<string, number> = {
  mainnet: 1,
  optimism: 10,
  polygon: 137,
  filecoin: 314,
  redstone: 690,
  base: 8453,
  mode: 34443,
  arbitrum: 42161,
  zora: 7777777,
};

export function getNetworkNameTitle(chainId: number): string {
  const networkName = networkNameTitles[chainId];
  if (networkName) return networkName;
  throw new Error('wrong chainId provided');
}

export function getNetworkName(chainId: number): ChainType {
  const networkName = networkNames[chainId];
  if (networkName) return networkName;
  throw new Error('wrong chainId provided');
}

export function getNetworkNameUniswap(chainId: number): string {
  const networkName = networkNameUniswap[chainId];
  if (networkName) return networkName;
  throw new Error('wrong chainId provided');
}

export function getNetworkId(chainId: string): number {
  const networkName = networkIds[chainId];
  if (networkName) return networkName;
  throw new Error('wrong chainId provided');
}