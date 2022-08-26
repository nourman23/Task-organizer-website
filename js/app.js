// side_tasks-form

////////////////////////////////////
// Create Card after save
let allcards = document.getElementById("cards");
let row = document.createElement("div");
row.className = "row";
allcards.append(row);
let id = 0;
function createCard(task) {
  id++;
  let col = document.createElement("div");
  col.className = "col-sm-4";
  col.setAttribute("id", id);
  row.append(col);

  //I have added id to the card to use it with delete it
  let card = document.createElement("div");
  card.className = "card text-center m-3";

  col.append(card);

  let cardHeader = document.createElement("div");
  cardHeader.className = "card-header d-flex justify-content-between";
  card.append(cardHeader);

  let spanTaskTitle = document.createElement("span");
  spanTaskTitle.textContent = task.title;
  cardHeader.append(spanTaskTitle);

  let aswomContaner = document.createElement("span");
  aswomContaner.className = "d-inline-flex gap-2";
  cardHeader.append(aswomContaner);

  let icon = document.createElement("i");
  icon.className = "fa-solid fa-pen-to-square";
  aswomContaner.append(icon);

  //I have added id to the iconXmark to use it with delete it
  let iconXmark = document.createElement("i");
  iconXmark.setAttribute("id", "delCardIcon");
  iconXmark.className = "fa-solid fa-circle-xmark";
  iconXmark.setAttribute("onclick", "deleteCard(id)");

  aswomContaner.append(iconXmark);

  let cardBody = document.createElement("div");
  cardBody.className = "card-body";
  card.append(cardBody);

  let cardText = document.createElement("p");
  cardText.className = "card-text";
  cardText.textContent = task.details;
  cardBody.append(cardText);

  let checkboxContaner = document.createElement("div");
  checkboxContaner.className = "input-group mb-0";
  cardBody.append(checkboxContaner);

  let completeTask = document.createElement("span");
  completeTask.className = "input-group-text";
  completeTask.id = "inputGroup-sizing-default";
  completeTask.textContent = "Complete";
  checkboxContaner.append(completeTask);

  let checkboxDiv = document.createElement("div");
  checkboxDiv.className = "input-group-text";
  checkboxDiv.setAttribute(
    "style",
    "border-top-right-radius: 5px; border-bottom-right-radius: 5px;"
  );
  checkboxContaner.append(checkboxDiv);

  let inputCheckbox = document.createElement("input");
  inputCheckbox.className = "form-check-input mt-0";
  inputCheckbox.type = "checkbox";
  inputCheckbox.value = '"';
  inputCheckbox.ariaLabel = "Checkbox for following text input";
  checkboxDiv.append(inputCheckbox);

  let divPriority = document.createElement("div");
  checkboxContaner.append(divPriority);

  let spanPriority = document.createElement("span");
  spanPriority.className = "input-group-text position-absolute end-0";
  spanPriority.id = "inputGroup-sizing-default";
  spanPriority.textContent = task.priority;
  divPriority.append(spanPriority);

  let cardFooter = document.createElement("div");
  cardFooter.className = "card-footer  d-flex justify-content-between";
  card.append(cardFooter);

  let remainTime = document.createElement("span");
  remainTime.className = "text-muted";
  remainTime.textContent = task.remainTime;
  cardFooter.append(remainTime);

  let saveSpan = document.createElement("span");
  cardFooter.append(saveSpan);

  let saveIcon = document.createElement("i");
  saveIcon.className = "fa-solid fa-circle-check";
  saveSpan.append(saveIcon);
}

// logout function

let logout = document.getElementById("logoutModal");
logout.onclick = (event) => {
  for (let i = 0; i < user.length; i++) {
    const element = user[i];
    if (element.isLogged) {
      element.isLogged = false;
    }
  }
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
  let saveTask = getSaveDate();
  location.href = "index.html";
};

function getSaveDate() {
  return JSON.parse(localStorage.getItem("user"));
}

// Save new task button
let user = [];
if (getSaveDate()) {
  user = getSaveDate();
}
function setDataInLocal(userArray) {
  localStorage.setItem("user", JSON.stringify(userArray));
}

// test case --------
// let newUser = new User("Anas", "mohammed", "tt@ttt.com", "12234");
// user.push(newUser);

// ---------
let saveButton = document.getElementById("saveNewTask");
saveButton.onclick = (event) => {
  let inputTitle = document.getElementById("inputTitle").value;
  let startDate = document.getElementById("startDate").value;
  let endDate = document.getElementById("endDate").value;
  let inputDescription = document.getElementById("inputDescription").value;

  let criticalR = document.getElementById("criticalR");
  let normalR = document.getElementById("normalR");
  let lowR = document.getElementById("lowR");

  let priority = "";
  if (criticalR.checked) {
    priority = "Critical";
  } else if (normalR.checked) {
    priority = "Normal";
  } else {
    priority = "Low priority";
  }

  // Find user who login & add task to user object
  for (let i = 0; i < user.length; i++) {
    const element = user[i];
    if (element.isLogged) {
     
      let task = new Task(inputTitle, endDate, inputDescription, priority);
      console.log(task);
      element.tasks.push(task);
      localStorage.setItem('user', JSON.stringify(user)); 
      createCard(task);
    }
  }

};

let welcomeModelTask = document.getElementById("welcomeModelTask");

window.onload = (event) => {
  welcomeModelTask.click();
};

// Delete card
let delCardIcon = document.getElementById("delCardIcon");
// delCardIcon.addEventListener("click",deleteCard(id));

function deleteCard(id) {
  let delCard = document.getElementById(id);
  delCard.parentElement.parentElement.parentElement.parentElement.remove(
    delCard
  );
}

// Disable back button
window.history.pushState(null, null, window.location.href);
window.onpopstate = function () {
  window.history.go(1);
};

// view saved tasks cards 
for(let i =0 ; i<user.length; i++)
if(user[i].isLogged){
    user[i].tasks.forEach((e)=>createCard(e)) 
}