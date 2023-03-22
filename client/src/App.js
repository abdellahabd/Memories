import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { fetchPostes } from "./api/index.js";
import { fetchAction } from "./Store/index.js";

import Postes from "./Components/Postes/Postes.js";
import Form from "./Components/From/Form.js";

//

import { MyAppBar, Headers } from "./Style.js";

//
const App = () => {
  const Dispatch = useDispatch();

  useEffect(() => {
    async function resolve() {
      const data = await fetchPostes();
      Dispatch(fetchAction(data));
    }
    resolve();
  }, [Dispatch]);

  return (
    <Container maxWidth="lg">
      <MyAppBar position="static" color="inherit">
        <Headers variant="h2" align="center">
          Memoires
        </Headers>
        <img
          style={{ marginLeft: "15px" }}
          src="https://cdn.dribbble.com/users/444266/screenshots/16454228/media/d566095006caa34e163971e23011eac2.png?compress=1&resize=400x300"
          alt="memoires"
          height={60}
        ></img>
      </MyAppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Postes />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
