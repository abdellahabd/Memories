import { DataTypes, DATE } from "sequelize";
import sequelize from "../util/database.js";

const Postmessage = sequelize.define("Postmessage", {
  title: { type: DataTypes.STRING },
  message: { type: DataTypes.STRING },
  creator: { type: DataTypes.STRING },
  // selectedFile: { type: DataTypes.STRING },
  likeCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
  tags: { type: DataTypes.STRING },
});

export default Postmessage;
