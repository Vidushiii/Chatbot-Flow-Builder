import styled from 'styled-components';

export const Container = styled.div`
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
`;

export const Header = styled.div`
height: 40px;
    background-color: lightgray
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;