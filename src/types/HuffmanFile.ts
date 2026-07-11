export interface HuffmanFile {

    magic: string;

    version: number;

    padding: number;

    frequencyTable: Record<string, number>;

    data: number[];

}