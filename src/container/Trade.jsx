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
import FeaturedCoins from "../components/FeaturedCoins";
import CoverImage from "../components/CoverImage";

const Trade = ({}) => {
  const [crypto] = useAllCrypto();
  useEffect(() => {
    COINS[0].close = 1;
  }, []);
  return (
    <Box>
      <CoverImage />
      <FeaturedCoins crypto={crypto} />
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
              path={c.path}
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
