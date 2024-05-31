import React from "react";
import { Container, FlexContainer, Header } from "../../styles/styles";
import CreateFlow from "../../components/createFlow";
import RightPanel from "../../components/rightPanel";

const FlowBuilder = () => {
    return (
        <Container>
            <Header>
              Save Changes
            </Header>
            <FlexContainer>
            <CreateFlow/>
            <RightPanel/>
            </FlexContainer>
            </Container>
    )
}

export default FlowBuilder;