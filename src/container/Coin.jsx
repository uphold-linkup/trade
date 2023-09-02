import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Input from "@mui/material/Input";
// import Input from '@mui/joy/Input';
import OKX from "../constants/endpoints";
import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Button, Card, Typography } from "@mui/material";
import Change from "./Change";

const Coin = ({
  code = "BTC",
  price = "26124.500",
  close = "1",
  uad_percent = "0.32",
}) => {
  const [data, setData] = useState();
  const [expectedEarning, setExpectedEarning] = useState(0.0);
  const [profit, setProfit] = useState(0.0);
  const [tradeTime, setTradeTime] = useState(0);
  const endpoint =
    OKX +
    `/market/history-trades?instId=BTC-USDT&timestamp=${new Date().getTime()}`;
  useEffect(() => {
    axios({ url: endpoint }).then((response) => setData(response.data.data));
    setInterval(() => {
      axios({ url: endpoint }).then((response) => setData(response.data.data));
    }, 5000);
  }, []);

  function createData(trade, direction, price, size) {
    return { trade, direction, price, size };
  }

  const handleInvestment = (e) => {
    let val = parseFloat(e.target.value) + parseFloat(e.target.value) * profit;
    if (isNaN(val)) val = 0.0;
    val = ((val * 100) / 100).toFixed(2);
    setExpectedEarning(val);
  };

  useEffect(() => {
    let ivt = document.querySelector(".investment-field input").value;
    let val = parseFloat(ivt) + parseFloat(ivt) * profit;
    if (isNaN(val)) val = 0;
    val = ((val * 100) / 100).toFixed(2);
    setExpectedEarning(val);
  }, [profit]);

  return (
    <Box>
      <Grid container p={1}>
        <Grid sx={8} sm={8} md={8}>
          <Typography fontWeight={800}>{code}/USDT</Typography>
          <Typography variant="h6" color={close ? "green" : "red"}>
            {price}
          </Typography>
          <Change close={close} uad_percent={uad_percent} />
        </Grid>
        <Grid sx={4} sm={4} md={4} container>
          <Grid sx={6} md={6}>
            <Typography
              fontSize={13}
              color="grey
            "
            >
              High
            </Typography>
            <Typography
              fontSize={13}
              color="grey
            "
            >
              Low
            </Typography>
            <Typography
              fontSize={13}
              color="grey
            "
            >
              24H quantity
            </Typography>
          </Grid>
          <Grid sx={6} md={6}>
            <Typography fontSize={13} align="right">
              26815.78687
            </Typography>
            <Typography fontSize={13} align="right">
              26786.76876
            </Typography>
            <Typography fontSize={13} align="right">
              114445657.768768
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Typography variant="h5" my={2}>
          Market Trades
        </Typography>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Trade</TableCell>
              <TableCell align="center">Direction</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Size</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data &&
              data.map((row) => (
                <TableRow
                  key={row.ts + row.sz}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">
                    <Typography color={row.side == "buy" ? "green" : "red"}>
                      {new Date(parseInt(row.ts))
                        .toLocaleTimeString("en-US")
                        .substring(0, 7)}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography color={row.side == "buy" ? "green" : "red"}>
                      {row.side}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography color={row.side == "buy" ? "green" : "red"}>
                      {row.px}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography color={row.side == "buy" ? "green" : "red"}>
                      {row.sz}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Card style={{ position: "fixed", bottom: 0, padding: "12px" }}>
        <Typography color="#515151">Trading Time</Typography>
        <Grid container>
          <Grid sm={6} md={6}>
            <Button
              style={{ width: "46vw" }}
              variant="contained"
              color="success"
            >
              BUY
            </Button>
          </Grid>
          <Grid sm={6} md={6}>
            <Button style={{ width: "46vw" }} variant="contained" color="error">
              SELL
            </Button>
          </Grid>
        </Grid>
        <Grid container style={{ justifyContent: "center" }}>
          <Grid xs={3} md={3} align="center" m={1}>
            <Button
              variant={profit == 0.6 ? "contained" : "outlined"}
              onClick={(e) => setProfit(0.6)}
            >
              Time
              <br />
              60S
              <br />
              Scale: 60.00%
            </Button>
          </Grid>
          <Grid xs={3} md={3} align="center" m={1}>
            <Button
              variant={profit == 0.4 ? "contained" : "outlined"}
              onClick={(e) => setProfit(0.4)}
            >
              Time
              <br />
              120S
              <br />
              Scale: 40.00%
            </Button>
          </Grid>
          <Grid xs={3} md={3} align="center" m={1}>
            <Button
              variant={profit == 0.3 ? "contained" : "outlined"}
              onClick={(e) => setProfit(0.3)}
            >
              Time
              <br />
              180S
              <br />
              Scale: 30.00%
            </Button>
          </Grid>
        </Grid>
        <Grid container>
          <Grid xs={6} md={6}>
            <Typography color="blue">Available Balance:</Typography>
            <Typography color="blue">70000</Typography>
          </Grid>
          <Grid xs={6} md={6} align="right">
            <Typography>Expected Earnings</Typography>
            <Typography color={expectedEarning == "0.00" ? "" : "green"}>
              {expectedEarning}
            </Typography>
          </Grid>
        </Grid>
        <Typography>Investment Amount</Typography>
        <Input
          className="investment-field"
          type="number"
          onChange={(e) => handleInvestment(e)}
        />
        <Typography>Minimum Purchase Limit: 100</Typography>
        <Button type="submit" variant="contained" style={{ width: "100%" }}>
          Submit
        </Button>
      </Card>
    </Box>
  );
};

export default Coin;
