const readline=require('readline-sync');
const fs=require('fs');

let a = readline.question("Give your register no.: ");
let b = readline.question("Name: ");
let c = readline.question("SGPA last semester: ");
let d = readline.question("CGPA till now: ");

console.log("Reg. No: "+a);
console.log("Name: "+b);
console.log("SGPA last semester: "+c);
console.log("CGPA till now: "+d);

fs.writeFile('data.txt', "Hi "+b+"("+a+"),"+" Your SGPA is "+c+" and CGPA is "+d+".", function(err){
    if(err) throw err;
    console.log("Written in File");
})