interface Props {
    node: any;
}

export default function NodeInfo({
    node,
}: Props) {

    if (!node) {

        return (

            <div className="rounded-xl border p-6">

                Click a node to inspect it.

            </div>

        );

    }

    return (

        <div className="rounded-xl border bg-white p-6 shadow">

            <h2 className="mb-4 text-xl font-bold">

                Node Details

            </h2>

            <p>

                <strong>Character:</strong>{" "}

                {node.data.character ?? "Internal"}

            </p>

            <p>

                <strong>Frequency:</strong>{" "}

                {node.data.frequency}

            </p>

            <p>

                <strong>Type:</strong>{" "}

                {node.data.isLeaf
                    ? "Leaf"
                    : "Internal"}

            </p>

        </div>

    );

}