console.log("Enter Your");
process.stdin.once("data",data => {
    console.log(`You Write ${data}`);
    process.exit();
})

// birth year

console.log("Enter Your Age");

process.stdin.once("data",data => {
    console.log(`You Are ${ 2024 - data} Years Old`);
    process.exit();
})
