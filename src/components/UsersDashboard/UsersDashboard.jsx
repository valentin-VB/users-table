import ListHeader from '../ListHeader/ListHeader';
import UsersFilter from '../UsersFilter/UsersFilter';
import UsersList from 'components/UsersList/UsersList';
import { Typography } from '@mui/material';
import Wrapper from 'components/Wrapper/Wrapper';
import { useEffect, useState } from 'react';
import { fetchData, fetchFilterData } from 'services/api';
import { Button } from './UsersDashboard.styled';

const UsersDashboard = () => {
  const [users, setUsers] = useState();
  const [sortOrder, setSortOrder] = useState(true);

  const fetchUsers = async () => {
    try {
      const result = await fetchData();
      setUsers(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const visibleUsers = async (filter = '') => {
    if (!users) return;
    try {
      const result = await fetchFilterData(filter);
      setUsers(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSortBtnClick = () => {
    setSortOrder(!sortOrder);
    const sortedUsers = [...users].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      const compareMethod = sortOrder ? nameA < nameB : nameA > nameB;
      return compareMethod ? 1 : -1;
    });
    setUsers(sortedUsers);
  };

  return (
    <>
      <Wrapper justifyContent="space-between">
        <Wrapper>
          <Typography variant="h4" sx={{ mr: '10px' }}>
            Users
          </Typography>
          {users ? (
            <Typography sx={{ color: '#9F9F9F', fontSize: '25px' }}>
              {users.length}
            </Typography>
          ) : (
            <Typography>Loading...</Typography>
          )}
        </Wrapper>
        <UsersFilter onChange={visibleUsers} />
      </Wrapper>
      <ListHeader onBtnClick={handleSortBtnClick} sortOrder={sortOrder} />
      {users ? (
        <UsersList users={users} />
      ) : (
        <Typography sx={{ fontSize: '25px' }}>Loading...</Typography>
      )}
      <Button variant="contained" type="submit">
        Save
      </Button>
    </>
  );
};

export default UsersDashboard;
