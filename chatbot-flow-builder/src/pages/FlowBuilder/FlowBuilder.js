import React from "react";
import { Container, Header, StyledButtom } from "../../styles/styles";
import CreateFlow from "../../components/createFlow";
import RightPanel from "../../components/rightPanel";

const FlowBuilder = () => {
    return (
        <Container height="100%">
            <Header>
              <StyledButtom type="outline">Save Changes</StyledButtom>
            </Header>
            <CreateFlow/>
            </Container>
    )
}

export default FlowBuilder;