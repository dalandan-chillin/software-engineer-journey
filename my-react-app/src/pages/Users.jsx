import { useState, useEffect, useMemo } from "react";
import UserList from "../UserList";

function Users() {

const [formData, setFormData] = useState({
      name: "",
      age: ""
});

const [userList, setUserList] = useState(() => {

const savedUsers = 
      localStorage.getItem("users");

return savedUsers
      ? JSON.parse(savedUsers)
      : [];
});


const [editId, setEditId] = useState(null);
const [editName, setEditName] = useState("");
const [searchTerm, setSearchTerm] = useState("");
const [error, setError] = useState("");


{/* add user */}

const handleChange=(event) => {

      const { name, value } = event.target;

  setFormData({
    ...formData,
    [name]: value
  });

};


const addUser = () => {

if (formData.name.trim() === "") {
  setError("Please enter a name.");
  return;
}

if (formData.age.trim() === "") {
  setError("Please enter an age.");
  return;
}

if (Number(formData.age) <= 0) {
  setError("Age must be greater than 0.");
  return;
}

  const user = {
    id: Date.now(),
    name: formData.name,
    age: formData.age
  };

  setError("");

  setUserList([...userList, user]);
  setFormData({
    
  name: "",

  age: ""

  });
};

{/* delete user */}

const deleteUser = (id) => {

    const updatedUsers = userList.filter(
      (user) => user.id !== id
    );

    setUserList(updatedUsers);

};

{/* Edit users */ }

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

useEffect(() => {

    localStorage.setItem(
      "users",
      JSON.stringify(userList)
    );

}, [userList]);


const filteredUsers = useMemo(() => {

      return userList.filter((user) => 
      user.name.toLowerCase().includes(
      searchTerm.toLowerCase()
      )
    );

}, [userList, searchTerm]);


        return(
            <div>
                <h1> 👥 Users Page </h1>
                <input
  type="text"
  placeholder="Enter name"
  name="name"
  value={formData.name}
  onChange={handleChange}
/>

<input
  type="number"
  placeholder="Enter age"
  name="age"
  value={formData.age}
  onChange={handleChange}
/>

{error && <p>{error}</p>}

<button onClick={addUser}>
  Add User 😤
</button>

<h2>Total Users: {userList.length}</h2>

<input
  type="text"
  placeholder="Search user..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>

<UserList
  userList={filteredUsers}
  deleteUser={deleteUser}
  startEdit={startEdit}
/>

{editId && (
  <div>

    <input
      type="text"
      value={editName}
      onChange={(event) => setEditName(event.target.value)}
    />

    <button onClick={saveEdit}>
      Save
    </button>

  </div>
)}

            </div>
        );

}

export default Users;