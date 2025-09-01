import { useState, useEffect } from "react";
import UsersList from './components/UsersList'

function UsersSection() {

  const users_url = "https://boolean-uk-api-server.fly.dev/elisabethroys/contact";
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(users_url);
      const data = await response.json();
      setUsers(data);
    }
    fetchUsers();
  }, [])

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <UsersList users={users} />
      </div>
    </section>
  )
}

export default UsersSection
