"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
// create user router
const userRouter = express_1.default.Router();
// create course router
const courseRouter = express_1.default.Router();
// use user router
app.use("/api/v1/users", userRouter);
// use course router
app.use("/api/v1/courses", courseRouter);
//
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user,
    });
});
// middleware
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "Course is created successfully",
        data: course,
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get("/", logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params); // paramitter hishebe ja dibo ta aikhane pabo
    console.log(req.query); // query er jonno ja dibo ta aikhane pabo
    try {
        res.send(something);
    }
    catch (error) {
        // console.log(error);
        // res.status(400).json({
        //   success: false,
        //   message: "Failed to get data",
        // });
        next(error);
    }
}));
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "Successfully received data ",
    });
});
// route hodi match na kore
// sob route er niche dite hobe
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "Route is not found",
    });
});
// global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong!",
        });
    }
});
exports.default = app;
