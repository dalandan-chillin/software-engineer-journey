import { useState, useEffect } from "react";
import UserCard from "./UserCard";

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
    
    <div>
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