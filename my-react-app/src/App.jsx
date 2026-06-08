import { useState, useEffect } from "react";
import UserCard from "./UserCard";
import UserList from "./UserList";
import "./App.css";

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
const [newUser, setNewUser] = useState("");
const [userList, setUserList] = useState([]);

const addUser = () => {

  if (newUser.trim() === "") return;

  const user = {
    id: Date.now(),
    name: newUser
  };

  setUserList([...userList, user]);
  setNewUser("");

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


  return (
    
    <div className="container">
      {/* h2 and button */}
      <h1>Hello Guys!😤</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
      Click This 😤 
      </button>

      {/* add input live */}
      <input
      type="text"
      placeholder="Enter your name"
      value={name}
      onChange={(event) => setName(event.target.value)}
      />

      <h2>Hello, {name} 😤 </h2>

      {/* Button login */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      Toggle Login
      </button>

      {/* Input and Button */}
      <input
      type="text"
      placeholder="Add new user"
      value={newUser}
      onChange={(event) => setNewUser(event.target.value)}
      />

      <button onClick={addUser}>
      Add User 😤
      </button>

      <UserList
      userList={userList}
      deleteUser={deleteUser}
      startEdit={startEdit}
      />
     
  {/* Add Edit UI */}

  {editId && (
  <div>

    <input
      type="text"
      value={editName}
      onChange={(event) => setEditName(event.target.value)}
    />

    <button onClick={saveEdit}>
      Save 😤
    </button>

  </div>
)}

      {/* Conditional Rendering */}
      {isLoggedIn ? (
          <h2> Welcome back 😤 </h2>
      ) : (   
          <h2> Please log in </h2>

      )}

      {/* Bonus && Rendering */}
      {isLoggedIn && (
          <p>You can now access the dashboard!</p>
      )}

      <section>
      <p>My First React app</p>
      <p> My Second paragraph </p>
      </section>
      
      {/* User.map */}
      {users.map((user) => (
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}
          />
      ))}

      <h2> API Users </h2>
      
      {apiUsers.map((user) => ( 
      <p key={user.id}>
         {user.name}
      </p>
    ))}


      <nav className = "navbar">
       <ul>
          <li><a href = "#">Try Navigation</a></li>
          <li><a href = "#">First Navigation</a></li>
          <li><a href = "#">Second Navigation</a></li>
       </ul>
      </nav>
    </div>

  );
}

export default App;