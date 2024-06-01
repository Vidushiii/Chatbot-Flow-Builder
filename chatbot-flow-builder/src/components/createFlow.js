import React, { useState, useCallback, useMemo, useEffect } from "react";
import ReactFlow, {
  ReactFlowProvider,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  MarkerType,
} from "reactflow";

import "reactflow/dist/style.css";
import {
  Container,
  FlexContainer,
  Header,
  Notifier,
  StyledButtom,
  Text,
} from "../styles/styles";
import CustomNode from "./customNode";
import RightPanel from "./rightPanel";

let id = 0;
const getId = () => `newnode_${id++}`; // Set id for new nodes

// Initial dummy data
const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "customNode",
    data: { label: "Chatbot test message 1" },
  },
  {
    id: "2",
    position: { x: 300, y: 0 },
    type: "customNode",
    data: { label: "Chatbot test message 2" },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    markerEnd: {
      type: MarkerType.Arrow,
    },
  },
];

const CreateFlow = () => {
  // Set custom node as nodetype
  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hasUnconnectedNodes, setHasUnconnectedNodes] = useState(false);
  const [hasSavedChanges, setHasSavedChanges] = useState(false);

  // Function to conect two nodes
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, markerEnd: { type: MarkerType.ArrowClosed } }, eds)
      ),
    [setEdges]
  );

  // To support drag and drop functionality
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");

      // To check the type of node is valid
      if (typeof type === "undefined" || !type) {
        return;
      }

      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `New Message Node ${id}` },
      };

      // Update nodes state
      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes]
  );

  // Set selected nodes data
  const onNodeClick = (event, node) => {
    setSelectedNode(node);
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, isSelected: n.id === node.id },
      }))
    );
  };

  // Reset data when a node is unselected
  const handleBackClick = () => {
    setSelectedNode(null);
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        data: { ...n.data, isSelected: false },
      }))
    );
  };

  // Update label when a node is edited
  const handleLabelChange = (e) => {
    const newLabel = e.target.value;
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === selectedNode.id) {
          node = { ...node, data: { ...node.data, label: newLabel } };
        }
        return node;
      })
    );
    setSelectedNode((node) => ({
      ...node,
      data: { ...node.data, label: newLabel },
    }));
  };

  // To save the flow and check for not connected nodes
  const handleSave = () => {
    // Check only if there are more than 1 nodes
    if (nodes && nodes.length > 1) {
      const connectedNodeIds = new Set(edges.map((edge) => edge.target));
      const unconnectedNodes = nodes.filter(
        (node) => !connectedNodeIds.has(node.id)
      );
      if (unconnectedNodes.length > 1) {
        setHasUnconnectedNodes(true);
      } else {
        setHasSavedChanges(true);
      }
    }
  };

  // Reset states after 3 seconds of the action
  const updateStates = () => {
    setTimeout(() => {
      setHasSavedChanges(false);
      setHasUnconnectedNodes(false);
    }, 3000);
  };

  useEffect(() => {
    if (hasSavedChanges || hasUnconnectedNodes) {
      updateStates();
    }
  }, [hasSavedChanges, hasUnconnectedNodes]);

  return (
    <Container height="100%">
      <Header>
        <Text fontSize="14" fontWeight="600">
          Chatbot Flow Builder
        </Text>
        {/* Show message when save CTA is triggered */}
        {(hasUnconnectedNodes || hasSavedChanges) && (
          <Notifier bgColor={hasUnconnectedNodes ? "#cf3939" : "green"}>
            <Text fontSize="14" fontWeight="600" color="white">
              {hasUnconnectedNodes
                ? "Cannot save flow"
                : "Flow saved successfully"}
            </Text>
          </Notifier>
        )}
        <StyledButtom type="outline" onClick={handleSave}>
          Save Changes
        </StyledButtom>
      </Header>
      <FlexContainer>
        <Container width="100%">
          <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              onNodeClick={onNodeClick}
              fitView
            >
              <Controls />
              <Background />
            </ReactFlow>
          </ReactFlowProvider>
        </Container>
        {/* Panel to add or edit a node */}
        <RightPanel
          isNodeSelected={Boolean(selectedNode)}
          selectedNode={selectedNode}
          handleLabelChange={handleLabelChange}
          onBackClick={handleBackClick}
        />
      </FlexContainer>
    </Container>
  );
};

export default CreateFlow;
