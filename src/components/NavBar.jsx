import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import {
  AccountBalanceWalletOutlined,
  HomeOutlined,
  PersonOutlineOutlined,
  SellOutlined,
} from "@mui/icons-material";
import { Paper } from "@mui/material";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeOutlined />} />
        </Link>
        <Link to="/orders">
          <BottomNavigationAction label="Order" icon={<SellOutlined />} />
        </Link>
        <Link to="/profile">
          <BottomNavigationAction
            label="Assets"
            icon={<AccountBalanceWalletOutlined />}
          />
        </Link>
        <Link to="/mycenter">
          <BottomNavigationAction
            label="My center"
            icon={<PersonOutlineOutlined />}
          />
        </Link>
      </BottomNavigation>
    </Paper>
  );
};

export default NavBar;
