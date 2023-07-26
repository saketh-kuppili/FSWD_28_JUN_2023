
const fs = require("fs/promises")

async function write_non_blank_lines(source, target) {
    const data = await fs.readFile(__dirname + "\\" + source, "utf-8");
    //console.log(data)
    const lines = data.split('\n');
    //console.log(lines)
    let outputLines = []
    for (let line of lines) {
        if (line.trim().length > 0) // non-blank line
            outputLines.push(line.trim())
    }

    await fs.writeFile(__dirname  + "\\" + target, outputLines.join('\n'))
    console.log("Copied non-blank lines")
}


write_non_blank_lines('names.txt', 'newnames.txt')