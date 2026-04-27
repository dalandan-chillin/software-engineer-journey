let title = document.getElementById("title");
let button = document.getElementById("btn");
let input = document.getElementById("nameInput");
let inputNumber = document.getElementById("intInput");
let resetBtn = document.getElementById("resetBtn");

// ✅ LOCAL STORAGE
let users = JSON.parse(localStorage.getItem("users")) || [];

// ✅ SAVE
const saveToLocalStorage = () => {
    try {
        localStorage.setItem("users", JSON.stringify(users));
    } catch (error) {
        console.error("Error saving:", error);
    }
};

// ✅ FORMAT USER (DESTRUCTURING)
const formatUser = ( name, age ) => {
      return `${name} (${age})`; 
};

// ✅ ADD USER (SPREAD)
const addNewUser = (newUser) => {
    users = [...users, newUser];
    saveToLocalStorage();
    displayUsers();
};

// FUNCTIONS
const showError = () => {
    title.textContent = "Please enter your name and age!";
    title.style.color = "red";
    button.textContent = "Click Me";
};

const showGreeting = (name, age) => {
    title.textContent = `Hello ${name}, you are ${age} years old!`;
    button.textContent = "Done clicking";

    if (age < 18) {
        title.style.color = "orange";
    } else if (age < 40) {
        title.style.color = "green";
    } else {
        title.style.color = "yellow";
    }
};

const clearInputs = () => {
    input.value = "";
    inputNumber.value = "";
};

// RESET
resetBtn.addEventListener("click", () => {
    users = [];
    localStorage.removeItem("users");
    displayUsers();

    title.textContent = "Welcome!";
    title.style.color = "black";
    button.textContent = "Click Me";

    input.value = "";
    inputNumber.value = "";

    list.style.display = "none";
    home.style.display = "block";
});



// ✅ MAIN FUNCTION (VALIDATION)
const greetUser = () => {
    let name = input.value.trim();
    let age = Number(inputNumber.value);

    if (!name || !inputNumber.value) {
        showError();
        return;
    }

    if (age <= 0) {
        title.textContent = "Invalid age!";
        title.style.color = "red";
        return;
    }

    const isDuplicate = users.some(user => user.name === name);

    if (isDuplicate) {
        title.textContent = "User already exists!";
        title.style.color = "red";
        return;
    }

    showGreeting(name, age);

    addNewUser({ name, age });

    clearInputs();

    list.style.display = "block";
    home.style.display = "none";
    contact.style.display = "none";
};

button.addEventListener("click", greetUser);

// RESET FUNCTION

resetBtn.addEventListener("click", () => {
    users = [];
    localStorage.removeItem("users");
    displayUsers();

    title.textContent = "Welcome!";
    title.style.color = "black";
    button.textContent = "Click Me";

    input.value = "";
    inputNumber.value = "";

    list.style.display = "none";
    home.style.display = "block";
});



// NAVIGATION
let home = document.getElementById("homeSection");
let list = document.getElementById("listSection");
let contact = document.getElementById("contactSection");

let links = document.querySelectorAll(".navbar a");

links.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();

        let text = link.textContent.trim();

        home.style.display = "none";
        list.style.display = "none";
        contact.style.display = "none";

        if (text === "Home") {
            home.style.display = "block";
        } else if (text === "List") {
            list.style.display = "block";
        } else {
            contact.style.display = "block";
        }
    });
});

// LIST DISPLAY
let itemList = document.getElementById("itemList");

const displayUsers = () => {
    itemList.innerHTML = "";

    // NEW
    const userElements = users.map((user, index) => {
        let li = document.createElement("li");
        li.textContent = formatUser(user);

        let delBtn = document.createElement("button");
        delBtn.textContent = "Delete";

        delBtn.addEventListener("click", () => {
            users = users.filter((_, i) => i !== index);
            saveToLocalStorage();
            displayUsers();
        });

        li.appendChild(delBtn);

        return li; 

        
    });
       userElements.forEach(li => itemList.appendChild(li));
};

// ENTER KEY
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") greetUser();
});

inputNumber.addEventListener("keypress", (e) => {
    if (e.key === "Enter") greetUser();
});


// FETCH API

const fetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
      
};

// Fetch
fetchUsers();


// LOAD DATA
displayUsers();

if (users.length > 0) {
    list.style.display = "block";
    home.style.display = "none";
}

// CONSOLE TASK
let items = [
    {name: "Bag", price: 5000},
    {name: "Tsinelas", price: 10000},
    {name: "Sapatos", price: 20000},
    {name: "Medyas", price: 4000}
];

items.forEach(item => console.log(item.name));