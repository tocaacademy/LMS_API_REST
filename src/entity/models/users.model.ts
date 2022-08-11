import { DataTypes, Model, Paranoid } from "sequelize";
import DBConection from "../../connection";

class Users extends Model {
  public id!: number;
  public userName!: string;
  public email!: string;
  public password!: string;
}

const sequelize = DBConection.getInstance();

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: "Users",
    tableName: "users",
    sequelize: sequelize,
    timestamps: true,
    paranoid: true,
  }
);

sequelize.sync();

export default Users;
