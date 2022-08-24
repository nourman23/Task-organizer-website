
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
    constructor(firstName, lastName, password, task = [], isLogged = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
        this.tasks = task;
        this.isLogged = isLogged;
    }
}

const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());

// side_tasks-form
$(function(){
    $('#datepicker').datepicker();
  });


  ////////////////////////////////////

  const welcomeName = document.getElementById("welcomeName");
  const newTask = document.getElementById("newTask");
  const priorityCritical = document.getElementById("priorityCritical");
  const priorityNormal = document.getElementById("priorityNormal");
  const priorityLow = document.getElementById("priorityLow");
  const completeState = document.getElementById("completeState");
  const incompleteState = document.getElementById("incompleteState");
  const saveToLocal = document.getElementById("saveToLocal");
  const logout = document.getElementById("logout");