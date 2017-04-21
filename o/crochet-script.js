"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crochet_1 = require("crochet");
const files_1 = require("crochet/o/files");
async function main() {
    // Render pages
    await files_1.writeFiles(await new crochet_1.default({
        srcdir: "s/pages",
        outdir: "o"
    }).pages({
        pages: await files_1.readFiles("s/pages/*.md"),
        template: await files_1.readFile("s/templates/page.crochet.html")
    }));
    // Render blog posts
    await files_1.writeFiles(await new crochet_1.default({
        srcdir: "s",
        outdir: "o"
    }).pages({
        pages: await files_1.readFiles("s/blog/*.md"),
        template: await files_1.readFile("s/templates/blog-post.crochet.html")
    }));
}
main();
//# sourceMappingURL=crochet-script.js.map