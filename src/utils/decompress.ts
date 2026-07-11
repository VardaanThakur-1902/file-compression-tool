import { BitUnpacker } from "../algorithms/BitUnpacker";
import { HuffmanDecoder } from "../algorithms/HuffmanDecoder";
import { HuffmanTree } from "../algorithms/HuffmanTree";
import type { HuffmanFile } from "../types/HuffmanFile";

export function decompressFile(
    file: HuffmanFile
): string {

    const frequencyMap =
        new Map<string, number>();

    for (const key in file.frequencyTable) {

        frequencyMap.set(
            key,
            file.frequencyTable[key]
        );

    }

    const tree = new HuffmanTree();

    tree.buildTreeFromFrequencyMap(
        frequencyMap
    );

    const unpacker =
        new BitUnpacker();

    const bits =
        unpacker.unpack(
            new Uint8Array(file.data),
            file.padding
        );

    const decoder =
        new HuffmanDecoder();

    return decoder.decode(
        bits,
        tree.getRoot()
    );

}