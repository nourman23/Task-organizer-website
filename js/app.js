
// Task class take 6 params this function will carry task object  
class Task {
    constructor(title, date, details, note, priority, completed = false) {
        this.title = title;
        this.date = date;
        this.details = details;
        this.note = note;
        this.priority = priority;
        this.completed = completed;
        this.remainTime = this.calculateRemainTime(date);
    }

    // calculateRemainTime it's a method take date time as string and return remain day 
    calculateRemainTime(dateAsString) {
        let date1 = new Date();
        let date2 = new Date(dateAsString);
        let time = date2.getTime() - date1.getTime();
        let days = time / (1000 * 3600 * 24);
        return Math.floor(days)
    }
}

// user class take 4 params this function will carry user object  
class User {
    constructor(firstName, lastName, password, task = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.tasks = task;
    }
}

