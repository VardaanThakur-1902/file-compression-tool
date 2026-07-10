export interface CompressionStats {

    originalBits:number;

    compressedBits:number;

    savedBits:number;

    compressionRatio:number;

}

export function calculateCompressionStats(
    text:string,
    encoded:string
):CompressionStats{

    const originalBits=text.length*8;

    const compressedBits=encoded.length;

    const savedBits=originalBits-compressedBits;

    const compressionRatio=

        (
            compressedBits/originalBits
        )*100;

    return{

        originalBits,

        compressedBits,

        savedBits,

        compressionRatio

    };

}