import ListHeader from './ListHeader/ListHeader';
import UserList from './UserList/UserList';
import UsersFilter from './UsersFilter/UsersFilter';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const App = () => {
  const [users, setUsers] = useState();
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await axios.get(
        'https://63bd3f63d6600623889ee036.mockapi.io/users'
      );
      setUsers(result.data);
    };
    fetchUsers();
  }, []);

  return (
    <main style={{ padding: '50px' }}>
      <h1>Permissions</h1>
      <p>Create and customize rules for your interface</p>
      <div>
        {users && (
          <>
            <h2>Users</h2>
            <p>{users.length}</p>
          </>
        )}
        <UsersFilter />
        <ListHeader />
        <UserList users={users} />
        <></>
      </div>
      <button type="submit">Save</button>
    </main>
  );
};
