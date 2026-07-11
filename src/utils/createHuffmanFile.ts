import type { HuffmanFile } from "../types/HuffmanFile";

export function createHuffmanFile(
    padding: number,
    frequencyMap: Map<string, number>,
    bytes: Uint8Array
): HuffmanFile {

    const frequencyTable: Record<string, number> = {};

    for (const [char, frequency] of frequencyMap) {

        frequencyTable[char] = frequency;

    }

    return {

        magic: "HUFF",

        version: 1,

        padding,

        frequencyTable,

        data: Array.from(bytes),

    };

}