import { Op } from "sequelize";
import Users from "../models/users.model";
import { Request, Response } from "express";
import UsersDto from "../../module/users/dto/dto.users";

export default class UsersController {
  public static async getUsers(req: Request, res: Response) {
    const data = await Users.findAll({
      paranoid: false,
    });
    const response = UsersDto.fromUser(data);
    res.status(200).send({
      message: "Users found",
      data: response,
    });
  }

  public static async deleteUser(req: Request, res: Response) {
    const data = await Users.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!data) {
      return res.status(404).send("User not found");
    }

    return res.status(200).send({
      message: "User deleted",
    });
  }
}
