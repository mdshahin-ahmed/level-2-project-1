import express, { Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(express.text());

app.get("/", (req: Request, res: Response) => {
  console.log(req.params); // paramitter hishebe ja dibo ta aikhane pabo
  console.log(req.query); // query er jonno ja dibo ta aikhane pabo

  res.send("Hello world!");
});

app.post("/", (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully received data ",
  });
});

export default app;
