const os=require('os')
const user=os.userInfo()
console.log(user);
console.log(`the system uptime is ${os.uptime}`);
const currenos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemme:os.freemem()
}
console.log(currenos);