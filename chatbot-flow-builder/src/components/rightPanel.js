import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  EditNode,
  EmptyMessageNode,
  RightPanelContainer,
  Text,
} from "../styles/styles";

const RightPanel = ({
  isNodeSelected,
  selectedNode,
  handleLabelChange,
  onBackClick,
}) => {
  // To show new empty node
  const emptyNode = () => (
    <EmptyMessageNode onDragStart={(event) => onDragStart(event)} draggable>
      <img
        width="15"
        height="15"
        src="https://img.icons8.com/ios/8585d9/15/chat-message--v1.png"
        alt="chat-message--v1"
      />
      <Text fontSize={8} fontWeight={600} color="#8585d9">
        Message
      </Text>
    </EmptyMessageNode>
  );

  // To edit an existing node's data
  const editNode = () => (
    <>
      <Container
        direction="row"
        gap="50"
        alignItems="center"
        padding="5px"
        bottomBorder
      >
        <img
          width="15"
          height="15"
          src="https://img.icons8.com/ios/000000/15/left--v1.png"
          alt="left--v1"
          style={{ cursor: "pointer" }}
          onClick={onBackClick} // To close the edit flow
        />
        <Text fontSize={10} fontWeight={600}>
          Message
        </Text>
      </Container>
      <EditNode>
        <Text fontSize={10} fontWeight={600} color="gray">
          Text
        </Text>
        <Container gap="5">
          <textarea
            style={{
              borderColor: "#e6e4e4",
              borderWidth: "1px",
              borderRadius: "5px",
              fontSize: "8px",
            }}
            value={selectedNode?.data?.label || ""}
            onChange={handleLabelChange}
            rows={5}
            cols={30}
            maxLength={250}
          />
          {/* Show error message when character limit of 250 exceeds */}
          {selectedNode?.data?.label &&
            selectedNode.data.label.length === 250 && (
              <Text fontSize={8} color="red">
                Character limit exceeded!
              </Text>
            )}
        </Container>
      </EditNode>
    </>
  );

  // To allow drag functionality of node
  const onDragStart = (event) => {
    event.dataTransfer.setData("application/reactflow", "customNode");
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <RightPanelContainer>
      {/* To render section conditionally whether a node or selected or not */}
      {isNodeSelected ? editNode() : emptyNode()}
    </RightPanelContainer>
  );
};

RightPanel.propTypes = {
  isNodeSelected: PropTypes.bool.isRequired,
  selectedNode: PropTypes.object,
  handleLabelChange: PropTypes.func.isRequired,
  onBackClick: PropTypes.func.isRequired,
};

export default RightPanel;
