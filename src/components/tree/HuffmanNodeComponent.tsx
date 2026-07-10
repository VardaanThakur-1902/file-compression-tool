import { Handle, Position } from "@xyflow/react";

interface NodeData {
  label: string;
  isLeaf: boolean;
}

interface Props {
  data: NodeData;
}

export default function HuffmanNodeComponent({
  data,
}: Props) {
  return (
    <div
      className={`
        min-w-17.5
        rounded-xl
        border-2
        px-4
        py-3
        text-center
        shadow-lg
        transition
        hover:scale-105
        ${
          data.isLeaf
            ? "border-green-600 bg-green-100"
            : "border-blue-600 bg-blue-100"
        }
      `}
    >
      <Handle type="target" position={Position.Top} />

      <p className="font-bold">
        {data.label}
      </p>

      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}