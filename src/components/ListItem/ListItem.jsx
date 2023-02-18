import Wrapper from 'components/Reusable Components/Wrapper';
import { actionsOnUser } from 'constance';
import { Circle, InputsWrapper, ListEl } from './ListItem.styled';

const ListItem = ({ user }) => {
  //   console.log('user', user);
  return (
    <ListEl>
      <Wrapper>
        <Wrapper justifyContent="start">
          <Circle />
          <p>{user.name}</p>
        </Wrapper>
        <InputsWrapper>
          {actionsOnUser.map((action, index) => (
            <input key={index} type="checkbox" name={action}></input>
          ))}
        </InputsWrapper>
      </Wrapper>
    </ListEl>
  );
};

export default ListItem;
