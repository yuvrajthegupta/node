const {readFileSync,writeFileSync}=require('fs')
console.log("start");
const first=readFileSync('./content/1st.txt','utf8')
writeFileSync('./content/2nd.txt',`The second file is ${first}`,{flag:'a'})
console.log(first);
console.log('end');