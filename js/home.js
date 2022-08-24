
let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)


let signInBtn = document.getElementById("signInBtn");
let signInUserName = document.getElementById("signInUserName");
let signInPassword = document.getElementById("signInPassword");
let passwordError = document.getElementById("passwordError");


let userArrayFromLocalStorage = getUserFromLocalStorage()

signInBtn.onclick = event => {
	for (let index = 0; index < userArrayFromLocalStorage.length; index++) {
		const element = userArrayFromLocalStorage[index];
		 if (element.email == signInUserName.value && element.password == signInPassword.value) {
			location.href = "tasks.html"
			break;
		 }else{
			passwordError.style.display="block"
		 }

	}
}


function getUserFromLocalStorage() {
	return JSON.parse(localStorage.getItem("user"));
}
function setUserToLocalStorage(userArray) {
	localStorage.setItem("user", JSON.stringify(userArray));
}

// test case mock database 

let user = new User("khalid", "alkarmi", "khalid.95@gmail.com", "123456");

let user1 = new User("khalid", "alkarmi", "khalid95@gmail.com", "123456");
let user2 = new User("khalid", "alkarmi", "khalid.95@hotmail.com", "123456");
let userArray = [user, user1, user2];

setUserToLocalStorage(userArray)



let InputEmail = document.getElementById("InputEmail");
let checkEmail = document.getElementById("checkEmail");
let displayPassword = document.getElementById("displayPassword");
let goBackBtn = document.getElementById("goBackBtn");

checkEmail.onclick = e => {
	for (let index = 0; index < userArrayFromLocalStorage.length; index++) {
		const element = userArrayFromLocalStorage[index];
		if (element.email === InputEmail.value) {
			displayPassword.textContent = `your password is ${element.password}`;
			goBackBtn.removeAttribute("data-bs-target")
			goBackBtn.removeAttribute("data-bs-toggle")
			goBackBtn.setAttribute("data-bs-dismiss", "modal")
			goBackBtn.textContent = "Done"
			//=""
			break;
		} else {
			goBackBtn.removeAttribute("data-bs-dismiss");
			goBackBtn.setAttribute("data-bs-target", "#exampleModalToggle")
			goBackBtn.setAttribute("data-bs-toggle", "modal")
			goBackBtn.textContent = "Try Again"
			displayPassword.textContent = `user not found`;

		}
	}
}

