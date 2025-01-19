import express from 'express';

//chaining by maths

const number = new Promise((resolve , reject ) => {
    setTimeout(resolve,2000,5)
});

number.then((mulnumber) => {
    console.log("step1 is completed , number is", mulnumber  );
    return mulnumber * 4
})
.then((doubled) => {

console.log("step 2 multiply the number by 4" , doubled);

return new Promise((resolve) => {
    setTimeout(resolve,2000,doubled*2)

})

})

.then((result) => {
    console.log("all steps done" , result)
})

.catch((error) => {
    console.log("your code is incorrect")
});

// promise.all

const prom1 = new Promise((resolve , reject ) => {
    setTimeout(() => resolve("Promise 1 is completed" , 1000))
})

const prom2 = new Promise((resolve , reject)=>{
    setTimeout(() => resolve("promise 2 is completed" , 1000))
})

const prom3 = new Promise((resolve , reject) =>{
     setTimeout(() => resolve("promise 3 is completed " , 2000))
})
Promise.all([prom1,prom2,prom3]) .then((values) => {
    console.log("succesfully", values)

})
.catch((error) =>{
    console.log("failed ",error)
})
.finally(() =>{
    console.log("promise.all execution is completed")
})

// promise.race

const promrace1 = new Promise((resolve,reject) => {
    setTimeout(resolve, 2000 , "promise 1 is lesser than promise 3 so that i am 2nd")
})

const promrace2 = new Promise((resolve , reject) => {
    setTimeout(resolve , 1000 , " promise 2 is lesser than promise 1 and promise 3 so that i am 1st")
})

const promrace3 = new Promise((resolve , reject) => {
    setTimeout(resolve,3000,"promise 3 is greatest so that i am 3rd")
})

Promise.race([promrace1 , promrace2 , promrace3])
.then((values) => {
 console.log("finally your code is working" + values)
})
.catch((error) => {
    console.log(" sorry ! your code is incorrect :( !")
}) 

//promise.allsettled

const promset1 = new Promise((resolve ,reject) =>{
    setTimeout(resolve,1000,"hi i am a promise.settled 1 :) !")
})

const promset2 = new Promise((resolve ,reject) =>{
    setTimeout(resolve,1000,"hi i am a promise.settled 2 :) !")
})

const promset3 = new Promise((resolve ,reject) =>{
    setTimeout(resolve,1000,"hi i am a promise.settled 3 :) !")
})

Promise.allSettled([promset1,promset2,promset3])
.then((values) => {
    console.log("your code is correct ;)")

    values.forEach((result) => {
        if(result.status === 'fulfilled'){
            console.log(`success : ${result.value}`)
        }
        else{
            console.log(`failure : ${result.value}`)
        }
    })
})
.catch((error) => {
    console.log("your code is incorrect :(")
})