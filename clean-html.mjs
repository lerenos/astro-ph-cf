import fs from 'fs'
import { globby } from 'globby';
import { minify } from 'html-minifier-terser'

// Get all HTML files from the output directory
const path = './dist'
const files = await globby([`${path}/**/*.html`,`!${path}/blog/**/*.html`])

for (const file of files) {
    console.log('Processing file:', file)
    let html = fs.readFileSync(file, 'utf-8')

    // Minify the HTML
    try{
        html = await minify(html, {
            removeComments: true,
            preserveLineBreaks: true,
            collapseWhitespace: true
        })
        fs.writeFileSync(file, html)
        console.log("OK: ",file,"processed")
    }catch(e){
        console.log("NOT TRANSFORMED: ",file,"Error on minifying. File not trasnformed. Going to the next...")
        // console.error('Error on minifying. File not trasnformed. Going to the next...',e.message)
    }
}