import UserCard from "./UserCard";

function App() {
  return (
    <div>
      <h1>Hello Guys!😤</h1>

      <section>
      <p>My First React app</p>
      <p> My Second paragraph </p>
      </section>

      {/* UserCard import */}

      <UserCard name = "Klint" age ={28} />
      <UserCard name = "Karl" age ={25} /> 
      
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