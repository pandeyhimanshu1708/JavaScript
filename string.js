let str = "Himanshu";
console.log(str.length);

let txt =  "Hello,World";
console.log(txt.indexOf("World"));

// string to array conveersion

let text = "Hello, Himanshu Pandey";
let strArr = Array.from(text);
console.log(strArr);

strArr.map((curElem,index)=>{
    console.log(curElem,index);
})

console.log(text.match("ello"))

