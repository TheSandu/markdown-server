"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import 'dotenv/config';
const express_1 = __importDefault(require("express"));
const LogMiddleware_1 = __importDefault(require("./middlewares/LogMiddleware"));
const ErrorMiddleware_1 = __importDefault(require("./middlewares/ErrorMiddleware"));
const BlogRouter_1 = __importDefault(require("./routers/BlogRouter"));
const app = (0, express_1.default)();
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const LogMiddlewareInstance = new LogMiddleware_1.default();
app.use(LogMiddlewareInstance.onLog);
let ErrorMiddlewareInstance = new ErrorMiddleware_1.default();
app.use(ErrorMiddlewareInstance.onHttpError);
app.use("/", BlogRouter_1.default);
app.use("/blog", BlogRouter_1.default);
const PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.log(`App is listening on port ${PORT} !`);
});
