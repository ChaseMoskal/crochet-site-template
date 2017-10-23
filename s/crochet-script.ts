
import Crochet from "crochet"
import {readFile, readFiles, writeFile, writeFiles} from "crochet/o/files"

async function main() {

	// Render pages
	await writeFiles(await new Crochet({
		srcdir: "s/pages",
		outdir: "o"
	}).pages({
		pages: await readFiles("s/pages/*.md"),
		template: await readFile("s/templates/page.crochet.html")
	}))

	// Render blog posts
	await writeFiles(await new Crochet({
		srcdir: "s",
		outdir: "o"
	}).pages({
		pages: await readFiles("s/blog/*.md"),
		template: await readFile("s/templates/blog-post.crochet.html")
	}))

}

main()
