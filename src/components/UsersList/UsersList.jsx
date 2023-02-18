import ListItem from 'components/ListItem/ListItem';

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <ListItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
