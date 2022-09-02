// // // Your code here
/* Your Code Here */
let employeeObj;
let createEmployeeRecord = function (emp){
 employeeObj=
//  return
 {
firstName:emp[0], 
familyName:emp[1], 
title:emp[2], 
payPerHour:emp[3],
timeInEvents:[],
timeOutEvents:[]
}

return employeeObj;
}
employeeObj;
function createEmployeeRecords(userArray){
return userArray.map((emp) => createEmployeeRecord(emp))
}
// let empl =employeeObj

const createTimeInEvent = function (empl, dateStamp){
dateStamp ='2014-02-28 1400'
let [date,time] = dateStamp.split(" ");
empl.timeInEvents.push({
    type: "TimeIn",
    hour: parseInt(time,10),
    date, 
    })
return empl;
    }
    // this = employeeObj;

function createTimeOutEvent (employeeObj,dateStamp){
dateStamp = '2015-02-28 1700';
let [date, hours] = dateStamp.split(' ');
employeeObj.timeOutEvents.push({
type: "TimeOut",
hour: parseInt(hours, 10),
date,
})
return employeeObj;
}


function hoursWorkedOnDate (dateWorked){
let dayIn = this.timeInEvents.find((workDay)=> {
return workDay.date === dateWorked
})
let dayOut = this.timeOutEvents.find((workDay) => 
{return workDay.date === dateWorked})
let hours =  (dayOut.hour - dayIn.hour)/100;
return  hours;
}

function wagesEarnedOnDate(dateWorked){
let hours = hoursWorkedOnDate.call(this, dateWorked);
let employeeWage = hours * employeeObj.payPerHour;
console.log(employeeWage)
return employeeWage;

}

employeeObj;

function allWagesFor(employeeObj) {

    const eligibleDates = employeeObj.timeInEvents.map(function (e) {
            return e.date
        })
    const payable = eligibleDates.reduce(function (memo, d) {
    return memo + wagesEarnedOnDate.call(employeeObj, d)
    }.bind(employeeObj), 0) 
    console.log(payable)
       return payable
    }
employeeObj;

function calculatePayroll(arrayOfEmployeeRecords){
        return arrayOfEmployeeRecords.reduce(function(memo, rec){
            return memo + allWagesFor(rec)
        }, 0)
    }