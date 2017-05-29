
import {renderArticles} from "crochet/o/rendering"
import {read, readGlob, writeAll} from "crochet/o/files"

async function main() {
  await writeAll(await renderArticles({
    sourcedir: "s/pages/",
    outdir: "o",
    articles: await readGlob("s/pages/*.md"),
    template: await read("s/templates/page.html")
  }))
}

main().catch(error => { console.error(error, error.message) })
