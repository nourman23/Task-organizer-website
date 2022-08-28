

let container = document.getElementById('container')
// switch login sign up form
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

// localStorage function

// declare empty array to store local storage 
let userArray = []

// get data from local storage user is object in local storage
function getDataFromLocal() {
	return JSON.parse(localStorage.getItem("user"))
}

// get data in local storage take array  
function setDataInLocal(userArray) {
	// JSON.stringify(userArray) to convert javaScript oject to JSON 
	localStorage.setItem("user", JSON.stringify(userArray))
}

// check if local storage have item (user) if true get data and stor it in userArray 
if (getDataFromLocal()) {
	userArray = getDataFromLocal()
}

// keep me logged in: the for loop for check if there user logged in if true go direct to task page 
for (let index = 0; index < userArray.length; index++) {
	const element = userArray[index];
	if (element.isLogged) {
		location.href = "tasks.html"
		break
	}

}

// sign in event handler 
signInBtn.onclick = event => {
	// loop for check if the email and password is match in local storage
	for (let index = 0; index < userArray.length; index++) {
		const element = userArray[index];
		if (element.email == signInUserName.value && element.password == signInPassword.value) {
			// if there matched change isLogged flag to true
			element.isLogged = true
			// after update isLogged update local storage
			setDataInLocal(userArray);
			location.href = "tasks.html"
			break;
		} else {
			// if there no match display password error 
			passwordError.style.display = "block"
		}

	}
}



// test case mock database 

// let user = new User("khalid", "alkarmi", "khalid.95@gmail.com", "123456");
// let user1 = new User("khalid", "alkarmi", "khalid95@gmail.com", "123456");
// let user2 = new User("khalid", "alkarmi", "khalid.95@hotmail.com", "123456");





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
let emailExistMassage = document.getElementById("emailExistMassage")

// sign up event handler
signupBtn.onclick = event => {
	// check if email valid
	const emailValid = Validation.EmailValidation(signupEmail.value)
	// check if user name valid
	const usernameValid = Validation.NameValidation(signupUserName.value)
	// we disable it for test 
	// const passwordValid = Validation.NameValidation(signupPassword.value)
	// const passwordConfirmValid = Validation.NameValidation(signupPasswordConfirm.value)
	// check if password match 
	const matchPassword = Validation.MatchPassword(signupPassword.value, signupPasswordConfirm.value)
	// check duplicate email
	const checkUserIfExistByEmail = Validation.checkUserIfExistByEmail(signupEmail.value)

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

	if (checkUserIfExistByEmail) {
		emailExistMassage.style.display = "block"

	} else {
		emailExistMassage.style.display = "none"
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

	if (emailValid && usernameValid && matchPassword && !checkUserIfExistByEmail) {
		createNewUser(signupEmail.value, signupUserName.value, signupPassword.value);
	}

}


function createNewUser(signupEmail, signupUserName, signupPassword) {
	let name = signupUserName.split(" ");
	// create new user object
	let newUser = new User(name[0], name[1], signupEmail, signupPassword)
	// change flag to true
	newUser.isLogged = true
	// add new user to user array
	userArray.push(newUser)
	// save new user to local storage
	setDataInLocal(userArray)
	// go to task page
	location.href = "tasks.html"

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
		if (/^[a-zA-Z\s]*$/.test(name)&&name!="") {

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
		return password == confirmPassword && password !="" && confirmPassword !="";

		// return true
	}

	static checkUserIfExistByEmail(email) {
		for (let index = 0; index < userArray.length; index++) {
			const element = userArray[index];

			if (element.email == email) {
				return true;
			}
			return false;

		}

	}
}


//show pass task 
function showPass(icon, pass) {
	if (pass.type === "password") {
		// change type input tp text to show password
		pass.type = "text";
		icon.name = "eye-off-outline"
	} else {
		// if type is text change it to password 
		pass.type = "password";
		icon.name = "eye-outline"
	}
}


