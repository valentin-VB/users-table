import ListItem from 'components/ListItem/ListItem';

const UserList = ({ users }) => {
  return (
    <ul>
      {users && users.map(user => <ListItem key={user.id} user={user} />)}
    </ul>
  );
};

export default UserList;
