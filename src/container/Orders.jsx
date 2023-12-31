import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Order from "../components/Order";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Orders() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const orders = JSON.parse(localStorage.getItem("orders"));
  orders &&
    orders.sort((a, b) => {
      return new Date(b.startTime) - new Date(a.startTime);
    });

  return (
    <Box>
      <Typography variant="h5" textAlign="center" py={2}>
        Orders
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
          >
            <Tab label="TRANSACTION" {...a11yProps(0)} />
            <Tab label="CLOSED" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          {orders &&
            orders.map((o) =>
              new Date(o.closeTime) > new Date() ? (
                <Order
                  startTime={o.startTime}
                  closeTime={o.closeTime}
                  price={o.price}
                  investment={o.investment}
                  closePrice={o.closePrice}
                  duration={o.duration}
                  PL={o.PL}
                  position={o.position}
                />
              ) : (
                ""
              )
            )}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {orders &&
            orders.map((o) =>
              new Date(o.closeTime) < new Date() ? (
                <Order
                  startTime={o.startTime}
                  closeTime={o.closeTime}
                  price={o.price}
                  investment={o.investment}
                  closePrice={o.closePrice}
                  duration={o.duration}
                  PL={o.PL}
                  position={o.position}
                />
              ) : (
                ""
              )
            )}
        </CustomTabPanel>
      </Box>
    </Box>
  );
}
