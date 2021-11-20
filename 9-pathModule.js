const os = require('os');
const user = os.userInfo();
console.log(user);

var totleMem = os.totalmem();
var freeMem = os.freemem();
console.log('Total Memory:' + totleMem);
console.log('Free Memory:' + freeMem);