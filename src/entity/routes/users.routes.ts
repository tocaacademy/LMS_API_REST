import express from "express";
import UsersController from "../controllers/users.controller";

const usersRoutes = express.Router();

usersRoutes.get("/", UsersController.getUsers);

export default usersRoutes;
