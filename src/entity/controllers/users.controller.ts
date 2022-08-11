import { Op } from "sequelize";
import Users from "../models/users.model";

export default class UsersController {
  public static async getUsers() {
    const data = await Users.findAll({
      paranoid: false,
      where: {
        [Op.not]: {
          deleteAt: null,
        },
      },
      attributes: ["userName", "password"],
    });

    console.log(data);
  }
}
