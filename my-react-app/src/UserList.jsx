function UserList({
  userList,
  deleteUser,
  startEdit
}) {

  return (

    <div>

      <h2>User List 🔥</h2>

      {userList.map((user) => (
        <div key={user.id}>

          <p>{user.name}</p>

          <button onClick={() => startEdit(user)}>
            Edit 😤
          </button>

          <button onClick={() => deleteUser(user.id)}>
            Delete 😤
          </button>

        </div>
      ))}

    </div>

  );
}

export default UserList;