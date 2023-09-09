import Grid from "@mui/material/Unstable_Grid2/Grid2";
import COINS from "../constants/COINS";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const FeaturedCoins = ({ crypto }) => {
  return (
    <Grid container>
      <Grid xs={4} md={4}>
        <Link to="/coin" style={{ textDecoration: "none" }}>
          <Typography>BTC/USDT</Typography>
        </Link>
      </Grid>
      <Grid xs={4} md={4} align="center">
        <Typography>ETH/USDT</Typography>
      </Grid>
      <Grid xs={4} md={4} align="right">
        <Typography>LTC/USDT</Typography>
      </Grid>
      {/* 2nd row */}
      <Grid xs={4} md={4}>
        <Link to="/coin" style={{ textDecoration: "none" }}>
          <Typography
            color={COINS.find((c) => c.code === "BTC").close ? "green" : "red"}
          >
            {crypto && crypto.find((o) => o.instId === `BTC-USDT-SWAP`).markPx}
          </Typography>
        </Link>
      </Grid>
      <Grid xs={4} md={4} align="center">
        <Typography
          color={COINS.find((c) => c.code === "ETH").close ? "green" : "red"}
        >
          {crypto && crypto.find((o) => o.instId === `ETH-USDT-SWAP`).markPx}
        </Typography>
      </Grid>
      <Grid xs={4} md={4} align="right">
        <Typography
          color={COINS.find((c) => c.code === "LTC").close ? "green" : "red"}
        >
          {crypto && crypto.find((o) => o.instId === `LTC-USDT-SWAP`).markPx}
        </Typography>
      </Grid>
      {/* 3rd row */}
      <Grid xs={4} md={4}>
        <Link to="/coin" style={{ textDecoration: "none" }}>
          <Typography
            color={COINS.find((c) => c.code === "BTC").close ? "green" : "red"}
          >
            {COINS.find((c) => c.code === "BTC").uad_percent}%
          </Typography>
        </Link>
      </Grid>
      <Grid
        xs={4}
        md={4}
        align="center"
        color={COINS.find((c) => c.code === "ETH").close ? "green" : "red"}
      >
        <Typography>
          {COINS.find((c) => c.code === "ETH").uad_percent}%
        </Typography>
      </Grid>
      <Grid
        xs={4}
        md={4}
        align="right"
        color={COINS.find((c) => c.code === "LTC").close ? "green" : "red"}
      >
        <Typography>
          {COINS.find((c) => c.code === "LTC").uad_percent}%
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FeaturedCoins;
