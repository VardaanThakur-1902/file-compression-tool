import { HuffmanNode } from "./HuffmanNode";

export class HuffmanDecoder {

    decode(
        encoded: string,
        root: HuffmanNode | null
    ): string {

        if (!root) {
            return "";
        }

        if (root.isLeaf()) {
            return root.character!.repeat(encoded.length);
        }
        let decoded = "";

        let current = root;

        for (const bit of encoded) {

            if (bit === "0") {
                if (!current.left) {
                    throw new Error("Invalid encoded data.");
                }
                current = current.left;
            } else {
                if (!current.right) {
                    throw new Error("Invalid encoded data.");
                }
                current = current.right;
            }

            if (current.isLeaf()) {

                return root.character!.repeat(encoded.length);

            }
        }

        return decoded;

    }

}