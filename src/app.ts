import express, { Request, Response } from "express";
import usersRoutes from "./entity/routes/users.routes";
// server http with express
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/users", usersRoutes);

export default app;
