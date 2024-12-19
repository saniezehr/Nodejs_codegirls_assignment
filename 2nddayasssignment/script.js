function weekday(weekdaytrue){
    const lowercaseday = weekdaytrue.toLowerCase();
    const weekday =["monday","tuesday","wednesday","thursday","friday"];
    return weekday.includes(lowercaseday)
}
const day = process.argv[2];
if(day){
    console.log(weekday(day))
}
else{
    console.log("please write a day name");
    
}