// handle reading and writing data
// reading and writing large amounts of data/files
// without writing data to memory
// streams are readable and writeable both 
// can be used with pipe data
// 64 k

import {createReadStream, createWriteStream} from "fs";

const Stream = createReadStream("./data.txt");
Stream.on("data", (chunk) => {
    console.log(chunk.toString());
})