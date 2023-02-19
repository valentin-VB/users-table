import { actionsOnUser } from 'constants/constants ';
import { Action, StyledWrapper } from './ListHeader.styled';
import Wrapper from 'components/Wrapper/Wrapper';
import { BsSortDown, BsSortUpAlt } from 'react-icons/bs';
import { IconButton } from '@mui/material';

const ListHeader = ({ onBtnClick, sortOrder }) => {
  return (
    <StyledWrapper>
      <Wrapper justifyContent="start">
        <p>User Name</p>
        <IconButton type="button" onClick={onBtnClick}>
          {sortOrder ? <BsSortDown /> : <BsSortUpAlt />}
        </IconButton>
      </Wrapper>
      {actionsOnUser.map(({ id, name }) => (
        <Action key={id}>{name}</Action>
      ))}
    </StyledWrapper>
  );
};

export default ListHeader;
