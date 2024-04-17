/* Your Code Here */
function createEmployeeRecord(array) {
    const [firstName, familyName, title, payPerHour] = array;
    return {
      firstName,
      familyName,
      title,
      payPerHour,
      timeInEvents: [],
      timeOutEvents: [],
    }
  }
  
  
  function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord);
  }
  
  
  function createTimeInEvent(timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour),
      date,
    });
    return this
  }
  
  
  function createTimeOutEvent(timeStamp) {
    const [date, hour] = timeStamp.split(" ");
    this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour),
      date,
    });
    return this
  }
  
  
  function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find((event) => event.date === date)
    const timeOutEvent = this.timeOutEvents.find((event) => event.date === date)
  
    if (timeInEvent && timeOutEvent) {
      const startTime = parseInt(timeInEvent.hour);
      const endTime = parseInt(timeOutEvent.hour);
      return (endTime - startTime) / 100;
    }
  
    return 0
  }
  
  
  function wagesEarnedOnDate(date) {
    const hoursWorked = hoursWorkedOnDate.call(this, date);
    return hoursWorked * this.payPerHour;
  }
 
  /*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass and it will be available
 for you to use if you need it!
 */

  
  function findEmployeeByFirstName(arrayOfEmployees, firstName) {
    return arrayOfEmployees.find((employee) => employee.firstName === firstName)
  }
  
  
  const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

  function calculatePayroll(array) {
    return array.reduce((totalPayroll, person) => {
      return totalPayroll + allWagesFor.call(person);
    }, 0)
  }
  
 
  
  // Create employee records from data
  const employeesData = [
    ['Gray', 'Worm', 'Security', 1],
    ['John', 'Doe', 'Manager', 2]
  ];
  const employees = createEmployeeRecords(employeesData);
  
  // Record time events for employees
  createTimeInEvent.call(employees[0], "2024-04-17 0900")
  createTimeOutEvent.call(employees[0], "2024-04-17 1700")
  
  createTimeInEvent.call(employees[1], "2024-04-17 1000")
  createTimeOutEvent.call(employees[1], "2024-04-17 1800")

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

// const allWagesFor = function () {
//     const eligibleDates = this.timeInEvents.map(function (e) {
//         return e.date
//     })

//     const payable = eligibleDates.reduce(function (memo, d) {
//         return memo + wagesEarnedOnDate.call(this, d)
//     }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

//     return payable
// }

