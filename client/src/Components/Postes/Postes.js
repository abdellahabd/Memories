import react from "react";
import { CircularProgress, Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Poste from "./Poste/Poste.js";
import Style from "./Styles.js";
const Postes = () => {
  const Postes = useSelector((state) => {
    return state.Poste;
  });
  return (
    <>
      {console.log(Postes)}
      {!(Postes.length > 0) ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="stretch" spacing={3}>
          {Postes.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={6}>
              <Poste post={post}></Poste>
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Postes;
