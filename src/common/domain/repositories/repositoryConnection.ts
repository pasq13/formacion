const path = 'src/users/Test/Mocks/users.json'
export function readerData(): Promise<any> {
    const fs = require('fs');
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err: any, data: any) => {
            if (err) {
                console.log(err);
                reject(err)
            } else {
                const info = JSON.parse(data);
                resolve(info)
            }
        });
    })
}

export function writeData(json: any): Promise<null> {
    const fs = require('fs');
    const jsonstring = JSON.stringify(json);
    return new Promise((resolve, reject) => {
        fs.writeFile(path, jsonstring, 'utf8', (err: any, data: any) => {
            if (err) {
                console.log(err);
                reject(err)
            }
            resolve(null);
        });
    })
}