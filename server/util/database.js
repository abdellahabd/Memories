import { Sequelize } from "sequelize";

const sequelize = new Sequelize("shema", "root", "abdellah2002", {
  host: "localhost",
  dialect: "mysql",
  logging: false,
});

try {
  await sequelize.authenticate();
  console.log("Connection successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export default sequelize;
