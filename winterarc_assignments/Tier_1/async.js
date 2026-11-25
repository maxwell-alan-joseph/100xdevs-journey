/*Write an async function readOrNotFound(path: string) that:

reads the file at path and returns its contents as a string
returns the string "NOT FOUND" if the file doesn't exist

*/

const fs = require('fs/promises');

async function readOrNotFound (path) {
    try {
        const data = await fs.readFile(path, "utf-8");
        return data;
    }

    catch (err) {
        return "NOT FOUND";
    }
}

readOrNotFound("a.txt")