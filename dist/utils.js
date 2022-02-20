"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarkdownContent = exports.removeExtension = exports.getMarkdowns = void 0;
const fs_1 = __importDefault(require("fs"));
function getMarkdowns(dir, files_) {
    files_ = files_ || [];
    var files = fs_1.default.readdirSync(dir);
    for (var i in files) {
        var name = dir + '/' + files[i];
        if (fs_1.default.statSync(name).isDirectory()) {
            getMarkdowns(name, files_);
        }
        else {
            files_.push(files[i]);
        }
    }
    return files_;
}
exports.getMarkdowns = getMarkdowns;
function removeExtension(text) {
    return text.replace(/\.[^/.]+$/, "");
}
exports.removeExtension = removeExtension;
function getMarkdownContent(name) {
    return fs_1.default.readFileSync(`markdowns/${name}`, { encoding: 'utf8', flag: 'r' });
}
exports.getMarkdownContent = getMarkdownContent;
let kebabCase = (text) => text
    .replace(/[&\/\\#,+()$~%'":*?!<>{}]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();
exports.default = kebabCase;
