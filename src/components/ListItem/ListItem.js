import { Circle } from './ListItem.styled';

const ListItem = ({ user }) => {
  const actionsOnUser = ['View', 'Execute', 'Modify', 'Delete'];
  return (
    <li>
      <div style={{ display: 'flex' }}>
        <Circle />
        <p>{user.name}</p>
        {actionsOnUser.map((action, index) => (
          <input key={index} type="checkbox" name={action}></input>
        ))}
      </div>
    </li>
  );
};

export default ListItem;
