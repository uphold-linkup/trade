import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Input from "@mui/material/Input";
import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Snackbar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import getDateTime from "../utils/getDateTime";
import randRange from "../utils/randRange";

const TradeCard = ({ price }) => {
  const [direction, setDirection] = useState(null);
  return (
    <Card
      style={{
        position: "fixed",
        bottom: "56px",
        left: 0,
        right: 0,
        padding: "12px",
        borderTop: "1px solid #f1f1f1",
      }}
    >
      {direction == null ? (
        <TradeDirectionButtons setDirection={setDirection} />
      ) : (
        <InvestmentForm price={price} />
      )}
    </Card>
  );
};

const TradeDirectionButtons = ({ setDirection }) => {
  return (
    <Grid container>
      <Grid xs={6} md={6} px={0.4}>
        <Button
          style={{ width: "100%" }}
          variant="contained"
          color="success"
          onClick={() => setDirection(1)}
        >
          BUY
        </Button>
      </Grid>
      <Grid xs={6} md={6} px={0.4}>
        <Button
          style={{ width: "100%" }}
          variant="contained"
          color="error"
          onClick={() => setDirection(0)}
        >
          SELL
        </Button>
      </Grid>
    </Grid>
  );
};

const InvestmentForm = ({ price }) => {
  const [snackbar, setSnackbar] = useState({
    message: "Order Placed!",
    severity: "success",
  });
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? JSON.parse(atob(localStorage.getItem("token")))
      : null
  );
  const [expectedEarning, setExpectedEarning] = useState(0.0);
  const [profit, setProfit] = useState(0.0);
  const [tradeTime, setTradeTime] = useState(0);
  const handleInvestment = (e) => {
    let val = parseFloat(e.target.value) + parseFloat(e.target.value) * profit;
    if (isNaN(val)) val = 0.0;
    val = ((val * 100) / 100).toFixed(2);
    setExpectedEarning(val);
  };

  const placeOrder = () => {
    if (!user) {
      setSnackbar({ message: "User not registered", severity: "error" });
      handleSnackBar({ vertical: "top", horizontal: "right" });
      return;
    }
    let inv =
      document.querySelector(".investment-field input") &&
      document.querySelector(".investment-field input").value;
    if (inv == "") {
      setSnackbar({ message: "Enter Investment Amount", severity: "info" });
      handleSnackBar({ vertical: "top", horizontal: "right" });
      return;
    } else inv = parseFloat(inv);

    if (profit == 0.0) {
      setSnackbar({ message: "Select Trade Time", severity: "info" });
      handleSnackBar({ vertical: "top", horizontal: "right" });
      return;
    }

    let orders = JSON.parse(localStorage.getItem("orders"))
      ? JSON.parse(localStorage.getItem("orders"))
      : [];
    if (user.creds < inv) {
      setSnackbar({ message: "Insuffient Balance", severity: "error" });
      handleSnackBar({ vertical: "top", horizontal: "right" });
      return;
    }
    setUser({ ...user, creds: user.creds - inv });
    localStorage.setItem(
      "token",
      btoa(JSON.stringify({ ...user, creds: user.creds - inv }))
    );
    orders.push({
      startTime: getDateTime(),
      closeTime: getDateTime(180),
      coin: "BTC/USDT",
      price: price,
      investment: inv,
      closePrice: parseFloat(price) + randRange(100, 800) / 100,
      duration: 180,
      PL: expectedEarning - inv,
      position: "Open",
    });
    localStorage.setItem("orders", JSON.stringify(orders));
    setSnackbar({ message: "Order Placed!", severity: "success" });
    handleSnackBar({ vertical: "top", horizontal: "right" });
  };
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;

  const handleSnackBar = (newState) => {
    setState({ ...newState, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  useEffect(() => {
    let ivt =
      document.querySelector(".investment-field input") &&
      document.querySelector(".investment-field input").value;
    let val = parseFloat(ivt) + parseFloat(ivt) * profit;
    if (isNaN(val)) val = 0;
    val = ((val * 100) / 100).toFixed(2);
    setExpectedEarning(val);
  }, [profit]);
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={2000}
        onClose={handleClose}
        message="I love snacks"
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
      <Typography color="#515151" py={1} variant="h6">
        Trading Time
      </Typography>
      <Grid container style={{ justifyContent: "center" }}>
        <Grid xs={4} md={4} align="center" p={1.2}>
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
        <Grid xs={4} md={4} align="center" p={1.2}>
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
        <Grid xs={4} md={4} align="center" p={1.2}>
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
          <Typography color="blue">{user ? user.creds : "0.00"}</Typography>
        </Grid>
        <Grid xs={6} md={6} align="right">
          <Typography>Expected Earnings</Typography>
          <Typography color={expectedEarning == "0.00" ? "" : "green"}>
            {expectedEarning}
          </Typography>
        </Grid>
      </Grid>
      <Typography color="#515151">Investment Amount</Typography>
      <Input
        className="investment-field"
        type="number"
        onChange={(e) => handleInvestment(e)}
        style={{ width: "100%" }}
      />
      <Typography py={1}>Minimum Purchase Limit: 100</Typography>
      <Button
        type="submit"
        variant="contained"
        style={{ width: "100%" }}
        onClick={() => placeOrder()}
      >
        Submit
      </Button>
    </>
  );
};

export default TradeCard;
