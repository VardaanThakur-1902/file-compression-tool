import "@xyflow/react/dist/style.css";
import { nodeTypes } from "./tree/nodeTypes";

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
} from "@xyflow/react";

import { useMemo, useState } from "react";

import { HuffmanNode } from "../algorithms/HuffmanNode";
import { huffmanTreeToFlow } from "../utils/huffmanTreeToFlow";
import NodeInfo from "./tree/NodeInfo";


interface Props {
  root: HuffmanNode | null;
}


export default function HuffmanTreeView({
  root,
}: Props) {
  const { nodes, edges } = useMemo(
    () => huffmanTreeToFlow(root),
    [root]

  
  );
  
  const [selectedNode, setSelectedNode] = useState<any>(null);

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
        <h2 className="mb-6 text-xl font-bold">
        Huffman Tree
        </h2>

        <div className="grid gap-6 lg:grid-cols-3">

        {/* Tree */}
        <div className="lg:col-span-2">

            <div className="h-150 rounded-lg border">

            <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView
                onNodeClick={(_, node) => setSelectedNode(node)}
            >
                <MiniMap zoomable pannable />
                <Controls position="bottom-right" />
                <Background gap={24} size={1} />
            </ReactFlow>

            </div>

        </div>

        {/* Details Panel */}
        <div>

            <NodeInfo node={selectedNode} />

        </div>

        </div>
    </div>
    );
}