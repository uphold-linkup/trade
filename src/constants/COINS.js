import randRange from "../utils/randRange";

const COINS = [
  {
    id: "bitcoin",
    code: "BTC",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "ethereum",
    code: "ETH",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "litecoin",
    code: "LTC",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "iota",
    code: "IOTA",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "solana",
    code: "SOL",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "polkadot",
    code: "DOT",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "xrp",
    code: "XRP",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "cardano",
    code: "ADA",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "dogecoin",
    code: "DOGE",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "stellar",
    code: "XLM",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "uniswap",
    code: "UNI",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "avalanche",
    code: "AVAX",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "shiba-inu",
    code: "SHIB",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "filecoin",
    code: "FIL",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "internet-computer",
    code: "ICP",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
  {
    id: "cronos",
    code: "CRO",
    close: randRange(0, 1),
    uad_percent: randRange(0, 500) / 100,
  },
];

export default COINS;
