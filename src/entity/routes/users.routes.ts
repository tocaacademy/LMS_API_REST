import express from "express";
import UsersController from "../controllers/users.controller";

const usersRoutes = express.Router();

usersRoutes.get("/", UsersController.getUsers);
usersRoutes.delete("/:id", UsersController.deleteUser);

export default usersRoutes;
