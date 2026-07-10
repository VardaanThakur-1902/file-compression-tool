export class HuffmanEncoder {

    encode(
        text: string,
        codes: Map<string,string>
    ): string {

        let encoded = "";

        for (const char of text) {

            const code = codes.get(char);

            if (!code) {
                throw new Error(
                    `Missing Huffman code for character: ${char}`
                );
            }

            encoded += code;
        }

        return encoded;
    }

}