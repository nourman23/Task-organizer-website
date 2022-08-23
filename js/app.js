
// Task class take 6 params this function will carry task object  
class Task {
    constructor(title, date, details, note, priority, completed = false) {
        this.title = title;
        this.date = date;
        this.details = details;
        this.note = note;
        this.priority = priority;
        this.completed = completed;
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
