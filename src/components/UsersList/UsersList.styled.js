import styled from '@emotion/styled';

export const List = styled.ul`
  height: 600px;
  overflow-y: scroll;
  padding-right: 20px;
  margin-bottom: 25px;
  &::-webkit-scrollbar {
    padding: 50px;
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #3f3f3f;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f3f3f3;
  }
`;
