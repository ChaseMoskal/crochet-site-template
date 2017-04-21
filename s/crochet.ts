
//
// this script builds the website
//

import * as files from "crochet/o/files"

;(async () => { try {

  await files.copy("s/template.html", "o/index.html")

} catch (error) { console.error(error) } })()
