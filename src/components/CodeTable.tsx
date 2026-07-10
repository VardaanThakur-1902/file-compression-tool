import type { CompressionResult } from "../types/CompressionResult";

interface Props {
  result: CompressionResult;
}

export default function CodeTable({
  result,
}: Props) {

  return (

    <div className="rounded-xl bg-white p-6 shadow-lg">

      <h2 className="mb-4 text-xl font-bold">
        Huffman Codes
      </h2>

      <table className="w-full border-collapse">

        <thead>

          <tr className="border-b">

            <th className="p-3 text-left">
              Character
            </th>

            <th className="p-3 text-left">
              Frequency
            </th>

            <th className="p-3 text-left">
              Huffman Code
            </th>

          </tr>

        </thead>

        <tbody>

          {[...result.codes.entries()].map(
            ([char, code]) => (

              <tr
                key={char}
                className="border-b"
              >

                <td className="p-3 font-mono">

                  {
                    char === " "
                      ? "(space)"
                      : char
                  }

                </td>

                <td className="p-3">

                  {
                    result.frequencies.get(char)
                  }

                </td>

                <td className="p-3 font-mono">

                  {code}

                </td>

              </tr>

            )
          )}

        </tbody>

      </table>

    </div>

  );

}