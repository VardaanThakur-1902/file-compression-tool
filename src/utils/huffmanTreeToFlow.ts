import type { Edge, Node } from "@xyflow/react";
import { HuffmanNode } from "../algorithms/HuffmanNode";

export interface FlowData {
  nodes: Node[];
  edges: Edge[];
}

export function huffmanTreeToFlow(
  root: HuffmanNode | null
): FlowData {
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  function traverse(
    node: HuffmanNode,
    x: number,
    y: number,
    spacing: number
  ): void {
    const id = `${x}-${y}`;

    nodes.push({
      id,
      position: { x, y },
      data: {
        label:
            node.character === null
            ? `${node.frequency}`
            : `${node.character} (${node.frequency})`,

        isLeaf: node.isLeaf(),

        character: node.character,

        frequency: node.frequency,
        },
      type: "huffmanNode",
    });

    if (node.left) {
      const leftX = x - spacing;
      const leftY = y + 150;
      const leftId = `${leftX}-${leftY}`;

      edges.push({
        animated: true,

        id: `${id}-${leftId}`,
        source: id,
        target: leftId,

        label: "0",
        });

      traverse(
        node.left,
        leftX,
        leftY,
        spacing / 2
      );
    }

    if (node.right) {
      const rightX = x + spacing;
      const rightY = y + 150;
      const rightId = `${rightX}-${rightY}`;

      edges.push({
        animated: true,

        id: `${id}-${rightId}`,
        source: id,
        target: rightId,

        label: "1",
        });

      traverse(
        node.right,
        rightX,
        rightY,
        spacing / 2
      );
    }
  }

  if (root) {
    traverse(root, 0, 0, 250);
  }

  return {
    nodes,
    edges,
  };
}