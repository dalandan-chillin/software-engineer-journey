import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import UserList from "./UserList";
import "./App.css";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
   
function App() {

{/* constant */}

const [count, setCount] = useState(0);
const [name, setName] = useState("");
const [isLoggedIn, setIsLoggedIn] = useState(false);
const users = [
      { id: 1, name: "Karl", age: 26 },
      { id: 2, name: "Tsi", age: 24 },
      { id: 3, name: "Kai", age: 28 }
];

{/* New User */}
const [newName, setNewName] = useState("");
const [newAge, setNewAge] = useState("");
const [userList, setUserList] = useState(() => {

const savedUsers = 
      localStorage.getItem("users");

return savedUsers
      ? JSON.parse(savedUsers)
      : [];
});


const [error, setError] = useState("");
const [searchTerm, setSearchTerm] = useState("");

const addUser = () => {

if (newName.trim() === "") {
  setError("Please enter a name.");
  return;
}

if (newAge.trim() === "") {
  setError("Please enter an age.");
  return;
}

if (Number(newAge) <= 0) {
  setError("Age must be greater than 0.");
  return;
}

  const user = {
    id: Date.now(),
    name: newName,
    age: newAge
  };

  setError("");

  setUserList([...userList, user]);
  setNewName("");
  setNewAge("");
};

{/* delete user */}

const deleteUser = (id) => {

    const updatedUsers = userList.filter(
      (user) => user.id !== id
    );

    setUserList(updatedUsers);

};

{/* Edit users */ }

const [editId, setEditId] = useState(null);
const [editName, setEditName] = useState("");
const startEdit = (user) => {

      setEditId(user.id);
      setEditName(user.name);
}; 

const saveEdit = () => {

  const updatedUsers = userList.map((user) => {
    if (user.id === editId) {
      return {
        ...user,
        name: editName
      };
    }

    return user;

  });

  setUserList(updatedUsers);

  setEditId(null);
  setEditName("");

};
 

{/* Api data */}
const [apiUsers, setApiUsers] = useState([]);

useEffect(() => {

      fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setApiUsers(data);
      });

}, []);

useEffect(() => {

    localStorage.setItem(
      "users",
      JSON.stringify(userList)
    );

}, [userList]);

{/* Filtered Users */} 
const filteredUsers = userList.filter((user) => 
user.name.toLowerCase().includes(
  searchTerm.toLowerCase()
  )
);

  return (
    
    <div className="container">

      <nav>

      <Link to="/">
        Home
      </Link>

      {" | "}

      <Link to="/about">
        About
      </Link>

      {" | "}

      <Link to="/users">
        Users
      </Link>

    </nav>

    <Routes>

      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/users"
        element={<Users />}
      />

    </Routes>

  </div>

);

}
   
export default App;