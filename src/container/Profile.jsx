import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Palette } from "../constants/Palette";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import styled from "@emotion/styled";

const Profile = ({
  name = "Raghav Gupta",
  balance = "1000",
  email = "raghav@gmail.com",
  mobile = "6387658003",
}) => {
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
              <Avatar {...stringAvatar(name)} />
            </Box>
            <Typography>{email}</Typography>
            <Box mt={1} display="flex" flexDirection="row">
              <Typography mx={1}>ID: {mobile}</Typography>
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
            <Typography variant="h5">{balance + ".00"}</Typography>
          </Box>
        </div>
      </Grid>
      <Grid xs={0} md={2}></Grid>
    </Grid>
  );
};

export default Profile;
