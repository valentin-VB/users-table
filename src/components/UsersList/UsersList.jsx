import ListItem from 'components/ListItem/ListItem';
import { List } from 'components/UsersList/UsersList.styled';

const UsersList = ({ users }) => {
  return (
    <List>
      {users.map(user => (
        <ListItem key={user.id} user={user} />
      ))}
    </List>
  );
};

export default UsersList;
