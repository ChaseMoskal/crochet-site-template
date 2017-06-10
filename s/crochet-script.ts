
import Crochet from "crochet"
import {readFile, readFiles, writeFile, writeFiles} from "crochet/o/files"

const crochet = new Crochet({
  srcdir: "s/pages",
  outdir: "o"
})

async function renderPages() {
  return writeFiles(await crochet.pages({
    pages: await readFiles("s/pages/*.md"),
    template: await readFile("s/templates/page.html")
  }))
}

async function renderIndexRedirect() {
  return writeFile({
    filepath: "o/index.html",
    content: `
<!doctype html>
<meta http-equiv="refresh" content="0; url=./welcome/"/>
`
  })
}

(async function main() {
  await renderPages()
  await renderIndexRedirect()
})()
  .catch(error => { console.error(error, error.message) })
