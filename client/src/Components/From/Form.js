import react, { useState } from "react";
import { useStyles } from "./Styles.js";
import { Paper, Typography, TextField, Button } from "@mui/material";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { Poste } from "../../api/index.js";
import { createAction } from "../../Store/index.js";
const Form = (props) => {
  const Dispatch = useDispatch();
  const [post, setposte] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  // //

  const handelSubmite = (e) => {
    e.preventDefault();
    async function resolve() {
      await Poste(post);
    }
    resolve();
    Dispatch(createAction(post));
  };
  //

  const clear = () => {};
  return (
    <Paper>
      <form
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
        onSubmit={handelSubmite}
        noValidate
        autoComplete="off"
      >
        <Typography variant="h6">create a memoire</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label=" Creator"
          fullWidth
          value={post.creator}
          onChange={(e) => {
            setposte({ ...post, creator: e.target.value });
          }}
        />
        {/* /////////////////////////////// */}

        <TextField
          name="title"
          variant="outlined"
          label=" title"
          fullWidth
          value={post.title}
          onChange={(e) => {
            setposte({ ...post, title: e.target.value });
          }}
        />
        {/* /////////////////////////////// */}

        <TextField
          name="message"
          variant="outlined"
          label=" message"
          fullWidth
          multiline
          rows={4}
          value={post.message}
          onChange={(e) => {
            setposte({ ...post, message: e.target.value });
          }}
        />
        {/* /////////////////////////////// */}
        <TextField
          name="tags"
          variant="outlined"
          label=" tags (coma separated)"
          fullWidth
          value={post.tags}
          onChange={(e) => {
            setposte({ ...post, tags: e.target.value });
          }}
        />
        <div>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) => {
              //setposte({ ...post, selectedFile: base64.base64 });
            }}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          sx={{ marginBottom: 10 }}
          onClick={clear}
          fullWidth
        >
          clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
