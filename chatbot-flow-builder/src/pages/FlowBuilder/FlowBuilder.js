import React from "react";
import { Container } from "../../styles/styles";
import CreateFlow from "../../components/createFlow";

const FlowBuilder = () => {
  return (
    <Container height="100%">
      {/* Create flow screen */}
      <CreateFlow />
    </Container>
  );
};

export default FlowBuilder;
