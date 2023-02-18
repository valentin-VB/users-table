import styled from '@emotion/styled';

export const ListEl = styled.li`
  border: 1px solid #9f9f9f;
  padding: 15px 15px;
  border-radius: 6px;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: #3f3f3f;
  border-radius: 50%;
  margin-right: 15px;
`;

export const InputsWrapper = styled.div`
  margin-left: 25px;
  input:not(:last-child) {
    margin-right: 50px;
  }
`;
