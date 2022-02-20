import fs from "fs";

export function getMarkdowns (dir: string, files_?: Array<string>): Array<string> {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getMarkdowns(name, files_);
        } else {
            files_.push(files[i]);
        }
    }
    return files_;
}

export function removeExtension ( text: string): string {
    return text.replace(/\.[^/.]+$/, "");
}

export function getMarkdownContent( name: string ): string {
    return fs.readFileSync( `markdowns/${ name }`, {encoding:'utf8', flag:'r'});
}

let kebabCase = (text: string) => text
    .replace(/[&\/\\#,+()$~%'":*?!<>{}]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .toLowerCase();

export default kebabCase;