import "@xyflow/react/dist/style.css";
import { nodeTypes } from "./tree/nodeTypes";

import {
  Background,
  Controls,
  MiniMap,
  ReactFlow,
} from "@xyflow/react";

import { useMemo } from "react";

import { HuffmanNode } from "../algorithms/HuffmanNode";
import { huffmanTreeToFlow } from "../utils/huffmanTreeToFlow";

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

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">

      <h2 className="mb-4 text-xl font-bold">
        Huffman Tree
      </h2>

      <div className="h-150 w-full rounded-lg border">

        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          fitView
        >
          <MiniMap
                zoomable
                pannable
            />
          <Controls
                showInteractive
            />
          <Background
                gap={20}
                size={1}
            />
        </ReactFlow>

      </div>

    </div>
  );
}