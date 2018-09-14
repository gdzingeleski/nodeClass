const Promise = require("bluebird");

const fs = Promise.promisifyAll(require("fs"));

Promise.try(() => {
    return fs.writeFileAsync("hobbies.txt", "These are my hobbies: swimming, running, painting!");
}).then(() => {
    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    return fs.readFileAsync("hobbies.txt");
}).then((data) => {
    console.log(`Asynchronous read: ${data.toString()}`);
});

console.log(`*** something console.logged after the calls to write data`);

