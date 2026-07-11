export class BitUnpacker {

    unpack(
        bytes: Uint8Array,
        padding: number
    ): string {

        let bits = "";

        for (const byte of bytes) {

            bits += byte
                .toString(2)
                .padStart(8, "0");

        }

        if (padding > 0) {

            bits = bits.slice(
                0,
                bits.length - padding
            );

        }

        return bits;

    }

}