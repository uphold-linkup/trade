import {
  EmailOutlined,
  InfoOutlined,
  PowerSettingsNewOutlined,
  WidgetsOutlined,
} from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const MyCenter = () => {
  return (
    <div>
      <Box>
        <Button
          variant="text"
          startIcon={<EmailOutlined />}
          style={{ color: "black" }}
        >
          SGR invite
        </Button>
      </Box>
      <Box>
        <Button
          variant="text"
          startIcon={<WidgetsOutlined />}
          style={{ color: "black" }}
        >
          My promotion history
        </Button>
      </Box>
      <Box>
        <Button
          variant="text"
          startIcon={<InfoOutlined />}
          style={{ color: "black" }}
        >
          Complaint suggestion
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
    </div>
  );
};

export default MyCenter;
