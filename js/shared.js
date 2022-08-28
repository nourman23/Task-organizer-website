// Task object take 6 params this function will carry task object
class Task {
  constructor(title, date, startDate ,details, priority,idDOM, completed = false) {
    this.title = title;
    this.date = date;
    this.details = details;
    this.priority = priority;
    this.completed = completed;
    // card id generated
    this.idDOM=idDOM
    this.remainTime = this.calculateRemainTime(startDate,date);

  }

  // calculateRemainTime it's a method take date time as string and return remain day
  calculateRemainTime(startDate,dateAsString) {
    let date1 = new Date(startDate);
    let date2 = new Date(dateAsString);
    let time = date2.getTime() - date1.getTime();
    let days = time / (1000 * 3600 * 24);
    return Math.floor(days);
  }
}

// user class take 4 params this function will carry user object
class User {
  constructor(
    firstName,
    lastName,
    email,
    password,
    task = [],
    isLogged = false
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
    this.tasks = task;
    this.isLogged = isLogged;
    this.email = email;
  }
}
