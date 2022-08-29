// // // Your code here
// // // // // // // /* Your Code Here */
// let employeeObj;
// let createEmployeeRecord = function (emp){
//  employeeObj=
// //  return
//  {
// firstName:emp[0], 
// familyName:emp[1], 
// title:emp[2], 
// payPerHour:emp[3],
// timeInEvents:[],
// timeOutEvents:[]
// }

// return employeeObj;
// }

// function createEmployeeRecords(userArray){
// return userArray.map((emp) => createEmployeeRecord(emp))
// }

// // function createTimeInEvent(employee, dateStamp){
// // // // the updated Record
// // dateStamp ='2014-02-28 1400'

// // let [date,hour] = dateStamp.split(" ");
// // employee.timeInEvents.push({
// //     type: "TimeIn",
// //     hour: parseInt(hour,10),
// //     date, 
// //     })
// // return employee;
// //     }

// // function createTimeOutEvent (employee,dateStamp){
// // dateStamp = '2015-02-28 1700';
// // let [date, hour] = dateStamp.split(' ');
// // employee.timeOutEvents.push({
// // type: "TimeOut",
// // hour: parseInt(hour, 10),
// // date,
// // })
// // return employee;
// // }
/* function createTimeInEvent(employeeObj, dayDate){
    let [date, hour] = dayDate.split(' ')
    employeeObj.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })
    return employeeObj;
}

let createTimeOutEvent = function(employeeObj, dayDate){
    let [date, hour] = dayDate.split(' ')
    employeeObj.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employeeObj
} */

// // function hoursWorkedOnDate (employeeObj,dateWorked){
// // let dayIn = employeeObj.timeInEvents.find((e)=> {
// // return e.date === dateWorked
// // })
// // let dayOut = employeeObj.timeOutEvents.find((e) => 
// // {return e.date === dateWorked})
// // let hours =  (dayOut.hour - dayIn.hour -1)/100;
// // return  hours;
// // }

// function wagesEarnedOnDate(employeeObj,dateWorked){
// let hours = hoursWorkedOnDate.call(employeeObj, dateWorked);
// let employeeWage = hours * employeeObj.payPerHour;
// console.log(employeeWage)
// return employeeWage;

// }






// function allWagesFor(employeeObj) {
// const eligibleDates = employeeObj.timeInEvents.map(function (e) {
//         return e.date
//     })
// const payable = eligibleDates.reduce(function (memo, d) {
// return memo + wagesEarnedOnDate.call(employeeObj, d)
// }.bind(employeeObj), 0) 
// console.log(payable)
//    return payable
// }


//test

let createEmployeeRecord = function(row){
    return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(employeeRowData) {
    return employeeRowData.map(function(row){
        return createEmployeeRecord(row)
    })
}

let createTimeInEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let createTimeOutEvent = function(employee, dateStamp){
    let [date, hour] = dateStamp.split(' ')

    employee.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date,
    })

    return employee
}

let hoursWorkedOnDate = function(employee, soughtDate){
    let inEvent = employee.timeInEvents.find(function(e){
        return e.date === soughtDate
    })

    let outEvent = employee.timeOutEvents.find(function(e){
        return e.date === soughtDate
    })

    return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(employee, dateSought){
    let rawWage = hoursWorkedOnDate(employee, dateSought)
        * employee.payPerHour
    return parseFloat(rawWage.toString())
}

let allWagesFor = function(employee){
    let eligibleDates = employee.timeInEvents.map(function(e){
        return e.date
    })

    let payable = eligibleDates.reduce(function(memo, d){
        return memo + wagesEarnedOnDate(employee, d)
    }, 0)

    return payable
}

let findEmployeeByFirstName = function(srcArray, firstName) {
  return srcArray.find(function(rec){
    return rec.firstName === firstName
  })
}

let calculatePayroll = function(arrayOfEmployeeRecords){
    return arrayOfEmployeeRecords.reduce(function(memo, rec){
        return memo + allWagesFor(rec)
    }, 0)
}