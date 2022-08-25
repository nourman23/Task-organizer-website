
let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

// sign in event handler
let signInBtn = document.getElementById("signInBtn");
let signInUserName = document.getElementById("signInUserName");
let signInPassword = document.getElementById("signInPassword");
let passwordError = document.getElementById("passwordError");



signInBtn.onclick = event => {
	for (let index = 0; index < userArrayFromLocalStorage.length; index++) {
		const element = userArrayFromLocalStorage[index];
		if (element.email == signInUserName.value && element.password == signInPassword.value) {
			location.href = "tasks.html"
			break;
		} else {
			passwordError.style.display = "block"
		}

	}
}

// localStorage function
let userArrayFromLocalStorage = getUserFromLocalStorage()

function getUserFromLocalStorage() {
	return JSON.parse(localStorage.getItem("user"));
}
function setUserToLocalStorage(userArray) {
	localStorage.setItem("user", JSON.stringify(userArray));
}

// test case mock database 

// let user = new User("khalid", "alkarmi", "khalid.95@gmail.com", "123456");
// let user1 = new User("khalid", "alkarmi", "khalid95@gmail.com", "123456");
// let user2 = new User("khalid", "alkarmi", "khalid.95@hotmail.com", "123456");
let userArray = [];

if (userArrayFromLocalStorage) {
	for (let index = 0; index < userArrayFromLocalStorage.length; index++) {
		const element = userArrayFromLocalStorage[index];
		userArray.push(element)
	}
}

setUserToLocalStorage(userArray)


// modal forgot password

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

// sign up handler 

let signupBtn = document.getElementById("signupBtn");
let signupUserName = document.getElementById("signupUserName");
let signupEmail = document.getElementById("signupEmail");
let signupPassword = document.getElementById("signupPassword");
let signupPasswordConfirm = document.getElementById("signupPasswordConfirm");

let userInvalidMassage = document.getElementById("userInvalidMassage")
let emailInvalidMassage = document.getElementById("emailInvalidMassage")
let passwordInvalidMassage = document.getElementById("passwordInvalidMassage")
let passwordMatchInvalidMassage = document.getElementById("passwordMatchInvalidMassage")


signupBtn.onclick = event => {
	const emailValid = Validation.EmailValidation(signupEmail.value)
	const usernameValid = Validation.NameValidation(signupUserName.value)
	// const passwordValid = Validation.NameValidation(signupPassword.value)
	// const passwordConfirmValid = Validation.NameValidation(signupPasswordConfirm.value)
	const matchPassword = Validation.MatchPassword(signupPassword.value, signupPasswordConfirm.value)

	if (!emailValid) {
		emailInvalidMassage.style.display = "block"
	} else {
		emailInvalidMassage.style.display = "none"
	}

	if (!usernameValid) {
		userInvalidMassage.style.display = "block"
	} else {
		userInvalidMassage.style.display = "none"
	}

	// if (!passwordValid) {
	// 	passwordInvalidMassage.style.display = "block"
	// } else {
	// 	passwordInvalidMassage.style.display = "none"
	// }

	if (!matchPassword) {
		passwordMatchInvalidMassage.style.display = "block"
	} else {
		passwordMatchInvalidMassage.style.display = "none"
	}

	if (emailValid && usernameValid && matchPassword) {
		createNewUser(signupEmail.value, signupUserName.value, signupPassword.value);
	}

}

function createNewUser(signupEmail, signupUserName, signupPassword) {
	let name = signupUserName.split(" ");
	let newUser = new User(name[0], name[1], signupEmail, signupPassword)
	userArray.push(newUser)
	setUserToLocalStorage(userArray)
	console.log(newUser);
}

// validation class 
class Validation {
	static EmailValidation(email) {
		if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
			return (true)
		}
		return (false)
	}

	//[a-zA-Z]

	static NameValidation(name) {
		if (/^[a-zA-Z\s]*$/.test(name) && name.split(" ").length == 2) {

			return (true)
		}
		return (false)
	}
	//"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"
	static PasswordValidation(password) {
		if (/"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {

			return (true)
		}
		return (true)
	}


	static MatchPassword(password, confirmPassword) {
		return password == confirmPassword;
		// return true
	}
}


//show pass task 

function showPass(icon ,pass){
	if (pass.type === "password") {
		pass.type = "text";
	icon.name="eye-off-outline"
	} else {
		pass.type = "password";
	icon.name="eye-outline"
	}
}
