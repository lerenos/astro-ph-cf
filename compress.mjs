import fs from 'fs'
import { globby } from 'globby';
import { brotliCompressSync, constants } from 'zlib';

// Get all HTML files from the output directory
const path = './dist'
const files = await globby([`${path}/**/*.html`,`!${path}/blog/**/*.html`])

console.log("Starting brotli compression")
console.time("Compressing time")

for (const file of files) {
    console.log('Compressing file:', file)
    let html = fs.readFileSync(file, 'utf-8')

    // Compress the HTML
    try{

        let compressed = brotliCompressSync(html, {
            params: {
                [constants.BROTLI_PARAM_QUALITY]: 11, //max quality level
              }
        })
        fs.writeFileSync(file+".br", compressed)
        console.log("OK: ",file,"compressed")

    }catch(e){
        console.log("NOT COMPRESSED: ",file,"Error on compressing. File not trasnformed. Going to the next...")
    }
}

console.timeEnd("Compressing time")