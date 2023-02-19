import { actionsOnUser } from 'constance';
import { Action, StyledWrapper } from './ListHeader.stylrd';
import Wrapper from 'components/Reusable Components/Wrapper';
import { BsSortDown, BsSortUpAlt } from 'react-icons/bs';
import { IconButton } from '@mui/material';

const ListHeader = ({ onBtnClick, sortOrder }) => {
  return (
    <StyledWrapper>
      <Wrapper justifyContent="start">
        <p>User Name</p>
        <IconButton type="button" onClick={onBtnClick}>
          {sortOrder ? <BsSortDown></BsSortDown> : <BsSortUpAlt></BsSortUpAlt>}
        </IconButton>
      </Wrapper>
      {actionsOnUser.map((action, index) => (
        <Action key={index}>{action}</Action>
      ))}
    </StyledWrapper>
  );
};

export default ListHeader;
