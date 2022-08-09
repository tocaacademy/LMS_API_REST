import express, { Request, Response } from "express";

// server http with express
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/api", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
