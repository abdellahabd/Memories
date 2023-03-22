import { createTheme } from "@material-ui/core/styles";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  styled,
} from "@mui/material";

export const MyAppBar = styled(AppBar)({
  borderRadius: 15,
  margin: "30px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
});

export const Headers = styled(Typography)({
  color: "rgba(0,183,255, 1)",
});
