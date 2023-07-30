console.log("start");
const {writeFile,readFile}=require('fs')
readFile('./content/1st.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }const first=result
    readFile('./content/2nd.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }const second=result
        console.log(second)
        writeFile('./content/3rd.txt',`the result is ${first} and ${second}`,(err,result)=>{
            if(err){
                console.log(err);
                return
            }
            console.log("The task is done")
        })
    })
})
console.log("next task")