const fs = require('fs')

class Reader {
    constructor() {
        // Empty constructor
    }

    /**
     * Add the text to the end of the file
     * If the files does not exist yet, it will be created
     */
    append(filePath, text) {
        fs.appendFileSync(filePath, `${text}\n`);
    }

    /**
     * Returns the content of the file
     */
    read(filePath) {
        return fs.readFileSync(filePath, 'utf8');
    }

    /**
     * Returns if the device can access the file
     */
    access(filePath) {
        const canAccess = fs.access(filePath, (err) => {
            if(err) throw err;
        })
    }

}

module.exports = Reader
