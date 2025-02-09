// what is the differnce between let,var and const

// var :-
var a = 10 ;
var a = 20 ;
console.log(a)

//let :-
let b =30;
b=40
//in block you can use same variable name
function let(){
     let c=50
    console.log(c)

}

console.log(b)
let()

//const

const abc = 140;

function abcd(){
const abc = 150;
console.log(abc)
}
console.log(abc)
abcd();

//difference between == & ===;

let num1 = 10;
let num2 = "10";
console.log(num1 == num2);

let num3 = 10;
let num4 = 10;
console.log(num3 === num4);

// difference between function declarations & expressions
//func declarations

function declara(a,b){
    a=10;
    b=30;
    console.log(a+b);
}
declara()

const expression = function(a,b){
    a=40;
    b=50;
console.log(a+b);
}
expression()

// arrow function ? how they are different from regular func

const arrowfunc = (arrowfunc1 , arrowfunc2) =>{
    arrowfunc1 = 20;
    arrowfunc2 = 40;

    console.log(arrowfunc1+arrowfunc2)

}
arrowfunc()

//normal vs arrow
normalFunc()
function normalFunc() {
    console.log( "Normal Function")
}

//ans :-normal function

// arrowfunction()

// const arrowfunction = (num5 ,num6) =>{
// console.log("arrow")
// }

// ans :- cannot access arrowfunction()

// synchronous and asynchronous programming 

// asynchronous -> independed
// synchronous -> depended
//synchronous :-
console.log("Hi");
console.log("sani");
console.log("How are you?");


// async:-

console.log("hi")
setTimeout(() => {
    console.log("sani")
},2000);
console.log("how are you")

//q6. set time out and set interval

// set time out

console.log("first message");
setTimeout(()=>{
    console.log("second message");
}, 4000)
console.log("third message")

// set interval

let count = 0 
const id = setInterval(() =>{
    count ++
    console.log("count:" ,count);
    if(count >= 5){
        clearInterval(id)
    }
},1000)

// immediately invoked function (iife)

var result = (function(){
    var x= 40;
    var y= 50;

    return x+y;
})();
console.log(result)

// Q8 . how js handle hoisting 

hoistingfunc()

function hoistingfunc(){
    console.log("hi how are you , i am hoisting function :)");
}

// Q9.What is the spread operator, and how does it differ from the rest operator?  

//spread operators
const numbers =[1,2,3,4,5];
const newnumbers =[...numbers,6,7,8];
console.log(newnumbers)

const [first,second,third,...rest]=[1,2,3,40,50,60]
console.log(...rest) //40,50,60


//rest operators
//reduce function:-
//array.reduce(callbackFunction(accumulator, currentValue), initialValue)

function sumall(...numbers){
    return numbers.reduce((sum,num)=>sum+num ,0);

}
console.log(sumall(1,2,3,4,5));

// Q10.Explain closures and provide an example.

// outer inner function
// only outer func call honga inner mai error ajye ga
function outerfunc(start){
    return function innerfunc(){
        console.log(start);
        start--;
    };
}

const timer =outerfunc(50);
timer()
timer()

// Q11.What is event delegation in JavaScript?

// document.getElementById('myList').addEventListener('click',function(event){
//     if(event.target.tagName === "LI"){
//         alert("clicked:" + event.target.innerText)
//     }

// });
// document.getElementById("addItem").addEventListener('click',function(){
    
//     const newitem = document.createElement("li");
//     newitem.innerText='New Item';
//     document.getElementById("myList").appendChild(newitem);

// })

// Q12.What are promises? How do they help in handling asynchronous operations?
// pending
// fullfilled
// reject

let Promisefunc = new Promise((resolve , reject) => {
    let x = 3
    let y = 4
    if(x+y == 7){

        resolve("correct");
        
    }
    else{
        reject("wrong");
    }


})
Promisefunc
.then(result => console.log(result))
.catch(error=>console.log(error))
.finally(()=>console.log("completed"))

// Q13.What is async/await, and how does it improve asynchronous JavaScript?
// async → Declares an asynchronous function that always returns a Promise.
// await → Waits for a Promise to resolve before continuing execution.

function delay(count){
    return new Promise(resolve=> setTimeout(resolve,count))
}
async function asyncfunc() {
    console.log("task 1");
    await delay(2000);
    console.log("task 2");
    await delay(2000);
    console.log("task 3");
    await delay(2000);
    console.log("task 4");
    await delay(2000);

}
asyncfunc()

async function fetch() {
    let userspromise= [
        new Promise(resolve => setTimeout(() => resolve({id :1,name:"ali"}),1000)),
        new Promise (resolve => setTimeout(() => resolve({id:2,name:"Sana"}),2000))
    ];

    let users = await Promise.all(userspromise);
    console.log("users:" ,users)


}
fetch()

// Q14. What is the difference between null and undefined?
//nullmeans no value

let nullvar = null;
let undefinedvar ;
console.log(nullvar)
console.log(undefinedvar)//undifined is declared but not assigned thats why by default undefined

// Q15.How do template literals (backticks) work in JavaScript?


let backticksname = "ali";
let backticksage =25;
console.log(`my name is ${backticksname} and my age is ${backticksage}`)

// Q16.What are default parameters in ES6?
// if the parameters value is giving and we didnot giving the number when function is called so value is calculate by default and if value is given when call the func so it is used
function calculation(price=100,tax = 0.2,discount=4){
    console.log(price+(price*tax)-discount);
}
calculation();
calculation(200);
calculation(300,0.4);
calculation(600,5,10);

// Q17What is destructuring, and how is it used in arrays and objects?.

const names = ["ali","john","sara","mehdia"];
const [namesfirst, namessecond, ...namesrest] = names;

console.log(namesfirst);  
console.log(namessecond); 
console.log(namesrest);   

// Q.18 What is the purpose of the map(), filter(), and reduce() functions?
// map -> creates a new array

const by2 = [2,4,6,8,10];
const doubled = by2.map(num => num *2);
console.log(doubled);//new array by multiply 2

// filter()

const users =[
    { name: "sara", age:23},
    { name: "sani", age:16},
    { name: "hammad", age:24},


]
const filterusers = users.filter(user=> user.age >18);
console.log(filterusers)

// Q19.What is the difference between forEach and map?

// foreach dose not return new array
const forEachnum= [10,20,30,40,50];
forEachnum.forEach(num=>num *8)
console.log(forEachnum)

// map return new array

const mapnum =[1,2,3,4,5];
const maping = mapnum.map(mapnum2=>mapnum2*4);
console.log(maping)

