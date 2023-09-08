import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

const Order = ({
  startTime = "2023-08-18 12:13:17",
  closeTime = "2023-08-18 12:15:17",
  price = 26580.47,
  investment = 20000,
  closePrice = 26586.51,
  duration = 180,
  PL = 600,
  position = "Closed",
}) => {
  return (
    <Card>
      <Grid container p={1.4}>
        <Grid xs={12} my={0.4}>
          <Typography fontSize={12}>
            <span style={{ color: "green" }}>Up</span> {startTime} Close Time{" "}
            {closeTime}
          </Typography>
        </Grid>
        {/* 1st Row */}
        <Grid xs={4} md={4}>
          <Typography color="#515151" fontSize={14}>
            BTC/USDT
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography color="#515151" fontSize={14} align="center">
            Amount
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography color="#515151" fontSize={14} align="right">
            Close Price
          </Typography>
        </Grid>
        {/* 2nd Row */}
        <Grid xs={4} md={4}>
          <Typography fontSize={14}>{price}</Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography fontSize={14} align="center">
            {investment}
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography fontSize={14} align="right">
            {closePrice}
          </Typography>
        </Grid>
        <Grid py={1.6} />
        {/* 3rd Row */}
        <Grid xs={4} md={4}>
          <Typography color="#515151" fontSize={14}>
            Time
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography color="#515151" fontSize={14} align="center">
            P/L[BTC]
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography color="#515151" fontSize={14} align="right">
            Status
          </Typography>
        </Grid>
        {/* 4th Row */}
        <Grid xs={4} md={4}>
          <Typography fontSize={14}>{duration} Sec</Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography fontSize={14} align="center">
            {PL}
          </Typography>
        </Grid>
        <Grid xs={4} md={4}>
          <Typography fontSize={14} align="right">
            {position}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Order;
