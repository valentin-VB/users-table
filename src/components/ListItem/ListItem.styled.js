import styled from '@emotion/styled';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;

  input {
    width: 18px;
    height: 18px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ListEl = styled.li`
  border: 1px solid #9f9f9f;
  padding: 4px 12px;
  border-radius: 6px;
  :not(:last-child) {
    margin-bottom: 6px;
  }
`;

export const Circle = styled.div`
  width: 25px;
  height: 25px;
  background-color: #3f3f3f;
  border-radius: 50%;
  margin-right: 5px;
`;
