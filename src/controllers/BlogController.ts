import { Request, Response } from 'express';

import kebabCase, { getMarkdowns, getMarkdownContent, removeExtension } from "../utils";

import showdown, { Converter } from 'showdown';
const converter: Converter = new showdown.Converter();

class BlogController {
    getBlog(req: Request, res: Response): any {
        let blogName: string = req.params.blogName;

        let files = getMarkdowns( `${ process.cwd() }\\src\\markdowns`);
    
        let fileName: string | undefined = files.find( (fileName: string) => {
            return kebabCase( removeExtension(fileName) ) === blogName;
        });
    
        if( typeof fileName === "undefined" )
            return res.render("layout", { content: "Blog not found" });
    
        let content: string = getMarkdownContent( fileName );
    
        let html: string = converter.makeHtml( content );
    
        res.render("layout", {
            content: html
        });
    }
}

export default BlogController;