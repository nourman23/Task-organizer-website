// Task function take 

let task = function (title, date, details, note, priority, completed = false) {

    this.title = title;
    this.date = date;
    this.details = details;
    this.note = note;
    this.priority = priority;
    this.completed = completed;

}