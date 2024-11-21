export type SpotPriceData = {
  symbol: string;
  price: string;
  eventTime: string;
};

export type MarketCapData = {
  marketdata: {
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
  };
};

export type FuturePrice = {
  symbol: string;
  price: string;
  eventTime: string;
};

export type FundingRateData = {
  symbol: string;
  price: string;
  eventTime: string;
};

export type KlineData = {
  symbol: string;
  eventTime: string;
  klineStartTime: string;
  klineCloseTime: string;
  openPrice: string;
  closePrice: string;
  highPrice: string;
  lowPrice: string;
  numberOfTrades: number;
  baseAssetVolume: string;
  takerBuyVolume: string;
  takerBuyBaseVolume: string;
  volume: string;
};
