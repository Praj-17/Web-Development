const fs = require('fs')

console.log("started reading file1.")

fs.readFile('file.txt', 'utf8', (err,data)=>{
    console.log(data);
})
console.log("Finished reading file1.")

console.log("started reading file2.")

const a = fs.readFileSync('file2.txt')
console.log(a)
console.log("Finished reading file2.")

fs.writeFile('file2.txt', "this is the new data", ()=>
{
    console.log("Written to the file");
})

//Now the point to note here is that even after we wrote "Finished reading file" at the end of the file but still it would be executed at before the readfile statemenet, The reason for the same is that the readfile gives a system call to the file and then it takes time to open it. Now, during this time, the compiler doesnt want to be at rest as like in any MULTIPROCESSING system and by the time the file is loaded it loads the statement below it, This is a major difference between other programming languages and NODE.JS .

//If you intentionally want to block the compiler to a certain statement use Sync methods. Using this methods will make it like you are running a normal Python file and you dont need to care about the above mentioned point anymore