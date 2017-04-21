//
// this script builds the website
//
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const files = require("crochet/o/files");
(async () => {
    try {
        await files.copy("s/template.html", "o/index.html");
    }
    catch (error) {
        console.error(error);
    }
})();
//# sourceMappingURL=crochet.js.map