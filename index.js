// // // // // Your code here
// // /* Your Code Here */
// // // Task 1: Create employeeObject
console.log("end here")
// // FInal SUggesstions

let employeeRecords=[];
    let  employeeRecord ={}
function createEmployeeRecord (emp){
    employeeRecord =  {
firstName:emp[0], 
familyName:emp[1], 
title:emp[2], 
payPerHour:emp[3],
timeInEvents:[],
timeOutEvents:[]
}
 console.log(employeeRecord.payPerHour)
 employeeRecords.push(employeeRecord)
    
return employeeRecord;
}



// // //Task 2: Convert nested array into an employee object
function createEmployeeRecords(userArray){
    return userArray.map((employee)=>createEmployeeRecord(employee))
    
}

// // // //Task 3: TimeIn
const createTimeInEvent = function (employeeRecord, dateStamp){
// dateStamp ='2014-02-28 1400'
let [day,hours] = dateStamp.split(" ");
employeeRecord.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(hours,10),
    date: day, 
    })
    //  console.log(employeeRecord);
return employeeRecord;
    }
// // createTimeInEvent (employeeRecord,"0044-03-14 0900")
// // createTimeInEvent (employeeRecord,"0044-03-15 0900")

// // //     //Task 4: TimeOut
function createTimeOutEvent (employeeRecord,dateStamp){
let [day, hours] = dateStamp.split(' ');
employeeRecord.timeOutEvents.push({
type: "TimeOut",
hour: parseInt(hours, 10),
date: day,
})
//  console.log(employeeRecord);
return employeeRecord;
}
// // createTimeOutEvent (employeeRecord,"0044-03-14 2100")
// // createTimeOutEvent (employeeRecord,"0044-03-15 1100")

// // // //Task 5: Get hours worked
function hoursWorkedOnDate (obj,dateWorked){
    let hours = 0;
    for(let e in obj.timeInEvents){
        if(obj.timeInEvents[e].date === dateWorked){
        let dayIn = obj.timeInEvents[e].hour;
        let dayOut = obj.timeOutEvents[e].hour;
    hours =  (dayOut - dayIn)/100;}
        }
    // console.log(hours)
return  hours;
}
// // hoursWorkedOnDate (employeeRecord, '0044-03-15')

// // // // // Task: 6 
function wagesEarnedOnDate(obj, dateWorked){
        let workedHours = hoursWorkedOnDate(obj, dateWorked);
        // console.log(workedHours)
        let employeeWage = workedHours * obj.payPerHour;
    // console.log(employeeWage)
    return employeeWage;
    }


// // //// Task:7  Get all wages owed
// // let daysInWorked =[];
// // let daysOutWorked = [];
function allWagesFor(obj) {
let workedDates= obj.timeInEvents.map((day)=>day.date)
return workedDates.reduce((total, date)=>
    total + wagesEarnedOnDate(obj,date),0)
 }
// allWagesFor(employeeRecord)
// // Task 8: Get the  Payroll total;
function calculatePayroll(arrayOfEmployeeRecords){
        return arrayOfEmployeeRecords.reduce(function(memo, rec){
            return memo + allWagesFor(rec)
        }, 0)
    }
