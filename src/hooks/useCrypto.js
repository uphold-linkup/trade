import { useState, useEffect } from "react";
import axios from "axios";

const useCrypto = (ids = "bitcoin", vs_currencies = "usd") => {
  const [data, setData] = useState(null);
  const url = `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=${vs_currencies}&precision=2&include_24hr_change=true`;
  useEffect(() => {
    axios({
      url,
    }).then((data) =>
      setData({
        price: data.data[ids][vs_currencies],
        change:
          Math.round(
            (data.data[ids][vs_currencies + "_24h_change"] + Number.EPSILON) *
              100
          ) /
            100 +
          "%",
      })
    );
  }, [url]);

  return [data];
};

export default useCrypto;
