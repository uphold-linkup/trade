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
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Orders from "./container/Orders";

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
      <Routes>
        <Route>
          <Route path="/" element={<Trade />} />
          <Route path="/trade" element={<Trade />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/mycenter" element={<MyCenter />} />
        </Route>
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
