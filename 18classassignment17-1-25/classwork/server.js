import express from 'express'

let p = new Promise((resolve , reject ) => {
    const x = 1+2;
    if(x === 2){
        resolve("success")
    }
    else{
        reject("fail")
    }
    
})

p.then((message) => {
    console.log("your result is " + message)
}).catch((message) => {

    console.log("your result is " +message)
})

const Prom1 = new Promise((resolve , reject) => {
    setTimeout(resolve ,2000 ,'one')
})
const Prom2 = new Promise((resolve , reject) => {
    setTimeout(resolve ,1000 ,'two')
})
Promise.race([Prom1,Prom2]).then((value) => {
    console.log(value)
})