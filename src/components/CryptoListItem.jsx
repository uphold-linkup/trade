import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import Change from "../container/Change";
import CoinIcons from "../assets/coins/CoinIcons";

const CryptoListItem = ({ id, path, code, crypto, close, uad_percent }) => {
  return (
    <Grid container py={1}>
      <Grid xs={4} sm={4} md={4}>
        <Box display="flex" alignItems="center" justifyContent="left">
          <img
            src={CoinIcons[path]}
            width={24}
            height={24}
            style={{ margin: "0 10px" }}
          />
          <Typography textAlign="right">{code}</Typography>
        </Box>
      </Grid>
      <Grid xs={4} sm={4} md={4}>
        {crypto && crypto.find((o) => o.instId === `${code}-USDT-SWAP`).markPx}
      </Grid>
      <Grid xs={4} sm={4} md={4}>
        <Change close={close} uad_percent={uad_percent} />
      </Grid>
    </Grid>
  );
};

export default CryptoListItem;
