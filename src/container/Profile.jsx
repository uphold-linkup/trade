import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { Palette } from "../constants/Palette";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { useState } from "react";
import { AddCardOutlined, PowerSettingsNewOutlined } from "@mui/icons-material";

const Profile = ({
  name = "Raghav Gupta",
  balance = "1000",
  email = "raghav@gmail.com",
  mobile = "6387658003",
}) => {
  const [user, setUser] = useState(
    localStorage.getItem("token")
      ? JSON.parse(atob(localStorage.getItem("token")))
      : null
  );
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  return (
    <Grid container spacing={2}>
      <Grid xs={0} md={2}></Grid>
      <Grid xs={12} md={8}>
        <div>
          <Box
            pb={12}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            backgroundColor={Palette.primary}
            color={Palette.text}
          >
            <Box my={2}>
              <Avatar {...stringAvatar(user ? user.name : "N A")} />
            </Box>
            <Typography>{user ? user.email : "Unregistered"}</Typography>
            <Box mt={1} display="flex" flexDirection="row">
              <Typography mx={1}>
                ID: {user ? user.mobile : "Unknow"}
              </Typography>
              <Typography>My credit score: 100.000</Typography>
            </Box>
          </Box>
          <Box
            mx={4}
            px={2}
            py={1}
            border="1px solid black"
            borderRadius={2}
            position="relative"
            backgroundColor="white"
            top={-50}
          >
            <Typography>Asset Center(Rupees)</Typography>
            <Typography variant="h5">
              {user ? user.creds + ".00" : "0.00"}
            </Typography>
          </Box>
        </div>
        <Box>
          <Button
            variant="text"
            startIcon={<AddCardOutlined />}
            style={{ color: "black" }}
          >
            Recharge record
          </Button>
        </Box>
        <Box>
          <Button
            variant="text"
            startIcon={<PowerSettingsNewOutlined />}
            style={{ color: "black" }}
          >
            Log out
          </Button>
        </Box>
      </Grid>
      <Grid xs={0} md={2}></Grid>
    </Grid>
  );
};

export default Profile;
