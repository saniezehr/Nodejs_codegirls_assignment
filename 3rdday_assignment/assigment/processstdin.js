
//minus from last 2
console.log("Enter Your Word :")

process.stdin.once("data", data => {
    const input =data.toString().trim();
    if(input.length > 2){
        const lasttwo = input.slice(-2);
        const remaining = input.slice(0,-2);
        const transformed = lasttwo + remaining;
        console.log(`output : ${transformed}`);
        

    }
    else{
        console.log(`Input Is To Short`);
    }
    process.exit();
})

