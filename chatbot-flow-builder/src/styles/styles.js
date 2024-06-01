import styled from "styled-components";

export const Container = styled.div`
  ${({ height }) => height && `height: ${height};`}
  ${({ width }) => width && `width: ${width};`}
  display: flex;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  ${({ gap }) => gap && `gap : ${gap}px`};
  ${({ alignItems }) => alignItems && `align-items : ${alignItems}`};
  ${({ bottomBorder }) => bottomBorder && "border-bottom: 1px solid lightgray"};
  ${({ padding }) => padding && `padding: ${padding}`}
`;

export const Header = styled.div`
  background-color: #eeecec;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 74px;
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  height: calc(100% - 40px);
`;

export const RightPanelContainer = styled.div`
  flex-grow: 1;
  border: 1px solid lightgray;
  width: 240px;
`;

export const StyledButtom = styled.button`
  border: 2px solid #a8a8dc;
  border-radius: 5px;
  color: #8585d9;
  background: white;
  padding: 5px 15px;
`;

export const NodeContainer = styled.div`
  width: ${({ width }) => `${width}px`};
  ${({ showSelectedBorder }) =>
    showSelectedBorder && "border: 1px solid #8d8dcc"};
  border-radius: 5px;
  box-shadow: 2px 2px 10px #bcbcbc;
  overflow: hidden;
  background: white;
  overflow-wrap: break-word;
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
  margin-left: 34px;
  margin-top: 20px;
`;

export const EditNode = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 15px 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;
`;

export const Notifier = styled.div`
  padding: 5px 15px;
  border-radius: 5px;
  background-color: ${({ bgColor }) => bgColor};
  margin-right: 35%;
`;
