import React from 'react';
import { Handle } from 'reactflow';
import { Container, NodeContainer, Text, NodeHeader } from '../styles/styles';

const CustomNode = ({ data }) => {
  return (
    <NodeContainer>
    <Handle type="target" position="top" />
        <NodeHeader>
        <Container direction='row' alignItems='center' gap='3'>
        <img width="10" height="10" src="https://img.icons8.com/ios/10/chat-message--v1.png" alt="chat-message--v1"/>
       <Text fontSize={8} fontWeight={600}>Send Message</Text>
        </Container>
        <img width="14" height="14" src="https://img.icons8.com/color/14/whatsapp--v1.png" alt="whatsapp--v1"/>
        </NodeHeader>
      <Text fontSize={8} fontWeight={400} padding="5px">{data.label}</Text>
      <Handle type="source" position="bottom" />
    </NodeContainer>
  );
};

export default CustomNode;
