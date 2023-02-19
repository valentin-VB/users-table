import ListHeader from '../ListHeader/ListHeader';
import UsersFilter from '../UsersFilter/UsersFilter';
import UsersList from 'components/UsersList/UsersList';
import { Typography } from '@mui/material';
import Wrapper from 'components/Reusable Components/Wrapper';
import { useEffect, useState } from 'react';
import { fetchData } from 'services/api';
import { Button } from './UsersDashbord.styled';

const UsersDashbord = () => {
  const [users, setUsers] = useState();
  const [filterUsers, setFilterUsers] = useState(users);
  const [sortOrder, setSortOrder] = useState(true);

  const fetchUsers = async () => {
    try {
      const result = await fetchData();
      setUsers(result);
      setFilterUsers(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const visiableUsers = (filter = '') => {
    if (!users) return;
    const filterUsers = users.filter(user => {
      return user?.name.toLowerCase().includes(filter.toLowerCase());
    });
    setFilterUsers(filterUsers);
  };

  const handleSortBtnClick = () => {
    setSortOrder(!sortOrder);
    const sortedUsers = [...filterUsers].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const compareMetod = sortOrder ? nameA < nameB : nameA > nameB;
      return compareMetod ? 1 : -1;
    });
    setFilterUsers(sortedUsers);
  };

  return (
    <>
      <Wrapper justifyContent="space-between">
        <Wrapper>
          <Typography variant="h4" sx={{ mr: '10px' }}>
            Users
          </Typography>
          {users && (
            <Typography variant="h6" sx={{ color: '#9F9F9F' }}>
              {users.length}
            </Typography>
          )}
        </Wrapper>
        <UsersFilter onChange={visiableUsers} />
      </Wrapper>
      <ListHeader onBtnClick={handleSortBtnClick} sortOrder={sortOrder} />
      {filterUsers && <UsersList users={filterUsers} />}
      <Button variant="contained" type="submit">
        Save
      </Button>
    </>
  );
};

export default UsersDashbord;
