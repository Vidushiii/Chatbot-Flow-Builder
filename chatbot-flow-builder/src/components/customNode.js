import React from "react";
import PropTypes from "prop-types";
import { Handle } from "reactflow";
import { Container, NodeContainer, Text, NodeHeader } from "../styles/styles";

const CustomNode = ({ data }) => {
  return (
    <NodeContainer
      width={data.label.length > 150 ? "175" : "125"} // Increase width w.r.t label's length
      showSelectedBorder={data.isSelected}
    >
     {/* Node's Target handle */}
      <Handle type="target" position="right" />
      <NodeHeader>
        <Container direction="row" alignItems="center" gap="3">
          <img
            width="10"
            height="10"
            src="https://img.icons8.com/ios/10/chat-message--v1.png"
            alt="chat-message--v1"
          />
          <Text fontSize={8} fontWeight={600}>
            Send Message
          </Text>
        </Container>
        <img
          width="14"
          height="14"
          src="https://img.icons8.com/color/14/whatsapp--v1.png"
          alt="whatsapp--v1"
        />
      </NodeHeader>
      <Text fontSize={8} fontWeight={400} padding="5px">
        {data.label}
      </Text>
      {/* Node's Source handle */}
      <Handle type="source" position="left" />
    </NodeContainer>
  );
};

CustomNode.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CustomNode;
