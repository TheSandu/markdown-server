"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = __importStar(require("../utils"));
const showdown_1 = __importDefault(require("showdown"));
const converter = new showdown_1.default.Converter();
class BlogController {
    getBlogsList(req, res) {
        console.log(`${process.cwd()}\\src\\markdowns`);
        let files = (0, utils_1.getMarkdowns)(`${process.cwd()}\\src\\markdowns`);
        console.log(`${process.cwd()}\\src\\markdowns`);
        files = files.map((fileName) => (0, utils_1.default)((0, utils_1.removeExtension)(fileName)));
        res.render("blog-list", { list: files });
    }
    getBlog(req, res) {
        let blogName = req.params.blogName;
        let files = (0, utils_1.getMarkdowns)(`${process.cwd()}\\src\\markdowns`);
        let fileName = files.find((fileName) => {
            return (0, utils_1.default)((0, utils_1.removeExtension)(fileName)) === blogName;
        });
        if (typeof fileName === "undefined")
            return res.render("layout", { content: "Blog not found" });
        let content = (0, utils_1.getMarkdownContent)(fileName);
        let html = converter.makeHtml(content);
        res.render("layout", {
            content: html
        });
    }
}
exports.default = BlogController;
