import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

// parsers
app.use(express.json());
app.use(express.text());

// create user router
const userRouter = express.Router();

// create course router
const courseRouter = express.Router();

// use user router
app.use("/api/v1/users", userRouter);

// use course router
app.use("/api/v1/courses", courseRouter);
//
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is created successfully",
    data: user,
  });
});
// middleware

courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "Course is created successfully",
    data: course,
  });
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
};

app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.params); // paramitter hishebe ja dibo ta aikhane pabo
  console.log(req.query); // query er jonno ja dibo ta aikhane pabo

  res.send("Hello world!");
});

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "Successfully received data ",
  });
});

export default app;
