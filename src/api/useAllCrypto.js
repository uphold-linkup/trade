import axios from "axios";
import OKX from "../constants/endpoints";
import { useEffect, useState } from "react";

export const useAllCrypto = () => {
  const [data, setData] = useState();
  const endpoint = OKX + "/public/mark-price?instType=SWAP";
  useEffect(() => {
    axios({ url: endpoint }).then((response) => setData(response.data.data));
    setInterval(() => {
      axios({ url: endpoint }).then((response) => setData(response.data.data));
    }, 5000);
  }, []);
  return [data];
};
