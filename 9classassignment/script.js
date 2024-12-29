import fs from 'fs';


// directory file names

const testfolder = './'
fs.readdir(testfolder,(err,file) =>{
    // console.log(file);
    file.forEach(files => {
        console.log(files)
    })
})

// read the file
fs.readFile("read.js","utf8",(err,read) => {
    if(err){
        console.log("file not found");
    }
    console.log(read);
})
/* WRITE AND APPEND*/

// write the file
// dont need of error because writefile add the new file of your name 
// it replace the data
const write ="hi i am a new data of your file"
fs.writeFile("write.js" ,write ,() => {
     console.log(write)
})

// append file
// Append: The difference between append and write is that write replaces the data, but append adds the data to the existing data. In both cases, if the file does not exist, a new file is created.
// Append example:
const append = "Hi, I am additional data added to your file.";
fs.appendFile("append.js",append,() => {
    console.log(append)
})

// rename the file
fs.rename("rename.js","newrename.js",(error, rename) => {
    if(error){
        console.log("file not found")
    }
    console.log(rename);
})

// Create A  new Folder
 const newfolder ="./newfolder";
fs.mkdir(newfolder,(err,folder) => {
    if(err){
        console.log("Folder cannot be created");
    }
console.log(folder)
})

// const remove_folder ="./removefolder";
// fs.rm(remove_folder ,(err ,rmfolder) => {
//     if(err){
//         console.log("folder not found");
//     }

//     console.log(rmfolder);
// })


const dirname = "C:/Users/Lenovo/Desktop/practice/Nodejs_codegirls_assignment/9classassignment/removefolder"
fs.rm(dirname,{recursive: true , force: true } ,(err) => {
     if(err){
        console.log("folder not found");
     }
     console.log(`${dirname} is deleted successfully`);
})