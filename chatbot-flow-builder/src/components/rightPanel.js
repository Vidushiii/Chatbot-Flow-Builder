import React from "react";
import PropTypes from 'prop-types';
import { EmptyMessageNode, RightPanelContainer, Text } from "../styles/styles";

const RightPanel = ({ isNodeSelected}) => {
    const onDragStart = (event) => {
        event.dataTransfer.setData('application/reactflow', 'customNode');
        event.dataTransfer.effectAllowed = 'move';
      };
    return (
        <RightPanelContainer>
{isNodeSelected ? <h1>selected</h1> : 
                <><Text fontSize={12} fontWeight={600} color="#8585d9">Add New Message</Text>
                <EmptyMessageNode onDragStart={(event) => onDragStart(event)} draggable>
                    <img width="15" height="15" src="https://img.icons8.com/ios/8585d9/15/chat-message--v1.png" alt="chat-message--v1" />
                    <Text fontSize={8} fontWeight={600} color="#8585d9"> Message</Text>
                </EmptyMessageNode></>
}
        </RightPanelContainer>
    )
}

RightPanel.propTypes = {
    isNodeSelected : PropTypes.bool.isRequired,
}

export default RightPanel;