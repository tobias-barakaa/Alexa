import { useGetUsersQuery } from '../../../../../slices/admin/adminUsersApiSlice';
import './Users.css';

const Users = () => {
  const { data: users = [], isLoading, isError } = useGetUsersQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading users.</div>;
  }

  return (
    <div className="users-container">
      <h2>All Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Profile Picture</th>
            <th>Role</th>
            <th>Balance</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>
                <img src={user.profile_pic} alt="Profile" className="table-profile-pic" />
              </td>
              <td>{user.role}</td>
              <td>${user.balance}</td>
              <td>{new Date(user.created_at).toLocaleString()}</td>
              <td>{new Date(user.updated_at).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
