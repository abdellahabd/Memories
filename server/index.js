import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routers/postes.js";
import sequelize from "./util/database.js";
//

const app = express();

//
app.use(cors());

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//

app.use("/postes", router);

//

app.use((req, res, next) => {
  res.send("<h1>page not found</h1>");
});

sequelize
  .sync({ force: true })
  .then((result) => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
