
let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)


// test case mock database 

let user = new User("khalid", "alkarmi", "khalid.95@gmail.com", "123456");

let user1 = new User("khalid", "alkarmi", "khalid95@gmail.com", "123456");
let user2 = new User("khalid", "alkarmi", "khalid.95@hotmail.com", "123456");
let userArray = [user, user1, user2];


localStorage.setItem("user", JSON.stringify(userArray));

let get = JSON.parse(localStorage.getItem("user"));

let InputEmail = document.getElementById("InputEmail");
let checkEmail = document.getElementById("checkEmail");
let displayPassword = document.getElementById("displayPassword");
let goBackBtn = document.getElementById("goBackBtn");

checkEmail.onclick = e => {
    for (let index = 0; index < get.length; index++) {
        const element = get[index];
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

