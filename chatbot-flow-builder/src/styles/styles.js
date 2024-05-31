import styled from 'styled-components';

export const Container = styled.div`
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  display: flex;
  flex-direction: ${({direction}) => direction ? direction : 'column'};
  ${({ gap }) => gap && `gap : ${gap}px`};
  ${({ alignItems }) => alignItems && `align-items : ${alignItems}`};
`;

export const Header = styled.div`
  height: 40px;
  background-color: lightgray;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  height: calc(100% - 40px);
`;

export const RightPanelContainer = styled.div`
  flex-grow: 1;
  border-left: 1px solid lightgray;
  width: 190px;
  padding: 10px;
`;

export const StyledButtom = styled.button`
`;

export const NodeContainer = styled.div`
width: 125px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px #bcbcbc;
    overflow: hidden;
    background: white;
`;

export const Text = styled.div`
${({ fontSize }) => fontSize && `font-size : ${fontSize}px`};
${({ fontWeight }) => fontWeight && `font-weight : ${fontWeight}`};
${({ padding }) => padding && `padding : ${padding}`};
${({ color }) => color && `color : ${color}`};
`;

export const NodeHeader = styled.div`
display: flex;
    justify-content: space-between;
    background: #b3ebeb;
    padding: 3px;
`;

export const EmptyMessageNode = styled.div`
display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    border: 2px solid #a8a8dc;
    border-radius: 5px;
    padding: 7px;
    width: 100px;
    gap: 6px;
    margin-left: 18px;
    margin-top: 20px;
`;
