import os from 'os';

// console.log(os.platform()); //platform
// console.log(os.arch()); // architecture
// console.log(os.cpus()); //cpu info
// console.log(os.hostname()); //hostname
// console.log(os.homedir()); //home directory
console.log(os.networkInterfaces());
console.log(os.freemem()); //free memory
console.log(os.totalmem()); //total memory