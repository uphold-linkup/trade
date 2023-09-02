import * as React from "react";
// import Box from '@mui/material/Box';
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./App.css";
import { Paper } from "@mui/material";
import Trade from "./container/Trade";
import Coin from "./container/Coin";
import {
  AccountBalanceWalletOutlined,
  HomeOutlined,
  PersonOutlineOutlined,
  SellOutlined,
} from "@mui/icons-material";
import Profile from "./container/Profile";
import MyCenter from "./container/MyCenter";

function App() {
  const [value, setValue] = React.useState(0);
  const renderPage = () => {
    if (value == 0) return <Trade />;
    else if (value == 1) return <Coin />;
    else if (value == 2) return <Profile />;
    else if (value == 3) return <MyCenter />;
  };
  return (
    <div className="App">
      {renderPage()}
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
          <BottomNavigationAction label="Order" icon={<SellOutlined />} />
          <BottomNavigationAction
            label="Assets"
            icon={<AccountBalanceWalletOutlined />}
          />
          <BottomNavigationAction
            label="My center"
            icon={<PersonOutlineOutlined />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
}

export default App;
