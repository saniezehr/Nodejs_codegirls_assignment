const { consoleOrigin } = require("firebase-tools/lib/api");

class Employe {
    constructor(name,salary){
        this.employename = name;
        this.employesalary = salary;

    }

    get salary(){
        return this.employesalary
    }

    set salary(newsalary){
        if(newsalary > 0){
            this.employesalary= newsalary
        }
        else{
            console.log("the salary must be in positive");
        }
    }

}

const employ = new Employe("sani",30000)
console.log(employ.employesalary)