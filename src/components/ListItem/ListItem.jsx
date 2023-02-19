import Wrapper from 'components/Reusable Components/Wrapper';
import { actionsOnUser } from 'constance';
import { Circle, GridContainer, ListEl } from './ListItem.styled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton } from '@mui/material';

const ListItem = ({ user }) => {
  //   console.log('user', user);
  return (
    <ListEl>
      <GridContainer>
        <Wrapper justifyContent="start">
          <Circle />
          <p>{user.name}</p>
        </Wrapper>
        {actionsOnUser.map((action, index) => (
          <input key={index} type="checkbox" name={action}></input>
        ))}
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </GridContainer>
    </ListEl>
  );
};

export default ListItem;
