import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Palette } from "../constants/Palette";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import useCrypto from "../hooks/useCrypto";
import { useAllCrypto } from "../api/useAllCrypto";
import CryptoListItem from "../components/CryptoListItem";
import COINS from "../constants/COINS";
import randRange from "../utils/randRange";

const Trade = ({}) => {
  const [crypto] = useAllCrypto();
  useEffect(() => {
    COINS[0].close = 1;
  }, []);
  return (
    <Box>
      <div className="img-container" style={{ padding: "4px" }}>
        <img
          style={{ width: "100%", borderRadius: "4px" }}
          src="https://plus.unsplash.com/premium_photo-1663931932637-e30332303b71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        />
        <div class="top-left">
          <Typography fontWeight={800} variant="h4">
            BONUS
          </Typography>
          <Typography fontSize={14} fontWeight={800}>
            SPECIAL OFFER
          </Typography>
          <Typography fontSize={14} fontWeight={800}>
            become our official employee and
          </Typography>
          <Typography fontSize={14} fontWeight={800}>
            enjoy per video task for
          </Typography>
          <Typography fontSize={14} fontWeight={800}>
            500rs lifetime.
          </Typography>
          <br />
          <Typography fontSize={14} fontWeight={800}>
            get upgraded to VIP membership
          </Typography>
          <Typography fontSize={14} fontWeight={800}>
            and get up to 10,000Rs
          </Typography>
        </div>
      </div>
      <Grid container>
        <Grid xs={0} md={2}></Grid>
        <Grid container xs={12} md={8} textAlign="center">
          <Grid xs={12}>
            <Typography textAlign="left" variant="h5" fontWeight={800} py={2}>
              Markets
            </Typography>
          </Grid>
          <Grid xs={4} sm={4} md={4} color="grey">
            Name
          </Grid>
          <Grid xs={4} sm={4} md={4} color="grey">
            Latest Price
          </Grid>
          <Grid xs={4} sm={4} md={4} color="grey">
            24H Change
          </Grid>
          <div
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "#212121",
              margin: "12px 0",
            }}
          ></div>
          {COINS.map((c) => (
            <CryptoListItem
              id={c.id}
              key={c.id}
              code={c.code}
              crypto={crypto}
              close={c.close}
              uad_percent={c.uad_percent}
            />
          ))}
        </Grid>
        <Grid xs={0} md={2}></Grid>
      </Grid>
    </Box>
  );
};

export default Trade;
{
  /* <Grid xs={4}>
          <Typography mb={0.5}>BTC/USDT</Typography>
          <Typography mb={0.5}>{BTC && BTC.price}</Typography>
          <Typography mb={0.5}>{BTC && BTC.change}</Typography>
        </Grid>
        <Grid xs={4}>
          <Typography mb={0.5}>ETH/USDT</Typography>
          <Typography mb={0.5}>{ETH && ETH.price}</Typography>
          <Typography mb={0.5}>{ETH && ETH.change}</Typography>
        </Grid>
        <Grid xs={4}>
          <Typography mb={0.5}>LTC/USDT</Typography>
          <Typography mb={0.5}>{LTC && LTC.price}</Typography>
          <Typography mb={0.5}>{LTC && LTC.change}</Typography>
        </Grid> */
}
