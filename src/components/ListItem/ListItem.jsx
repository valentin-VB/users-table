import Wrapper from 'components/Wrapper/Wrapper';
import { actionsOnUser } from 'constants/constants ';
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
        {actionsOnUser.map(({ id, name }) => (
          <input key={id} type="checkbox" name={name}></input>
        ))}
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </GridContainer>
    </ListEl>
  );
};

export default ListItem;
