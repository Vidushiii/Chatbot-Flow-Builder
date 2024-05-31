import React, { useState, useCallback, useMemo } from 'react';
import ReactFlow, {
    ReactFlowProvider,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';

import 'reactflow/dist/style.css';
import { Container, FlexContainer } from '../styles/styles';
import CustomNode from './customNode';
import RightPanel from './rightPanel';

let id = 0;
const getId = () => `dndnode_${id++}`;

const initialNodes = [
    {
      id: '1',
      position: { x: 0, y: 0 },
      type: 'customNode',
      data: { label: 'Custom Node 1' },
    },
    {
      id: '2',
      position: { x: 0, y: 100 },
      type: 'customNode',
      data: { label: 'Custom Node 2' },
    },
  ];

  const initialEdges = [{ id: 'e1-2', source: '1', target: '2', animated: true }];

const CreateFlow = () => {
  const nodeTypes = useMemo(() => ({ customNode: CustomNode }), []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [],
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');
      console.log("typeee", type);

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // reactFlowInstance.project was renamed to reactFlowInstance.screenToFlowPosition
      // and you don't need to subtract the reactFlowBounds.left/top anymore
      // details: https://reactflow.dev/whats-new/2023-11-10
      const position = reactFlowInstance.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance],
  );

  return (
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
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      </ReactFlowProvider>
    </Container>

<RightPanel isNodeSelected={false}/>
</FlexContainer>
  );
};

export default CreateFlow;
