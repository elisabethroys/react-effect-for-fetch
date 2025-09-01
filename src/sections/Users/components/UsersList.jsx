import UserListItem from './UsersListItem'

function UsersList({ users }) {
  return (
    <ul className="users-list">
    {users.map((user, index) => (
      <UserListItem key={index} user={user} />
    ))}
    </ul>
  );
}

export default UsersList;