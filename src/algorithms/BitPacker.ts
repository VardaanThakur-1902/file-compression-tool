export interface PackedData {

    bytes: Uint8Array;

    padding:number;

}

export class BitPacker {

    pack(bits:string):PackedData{

        const padding=
            (8-(bits.length%8))%8;

        bits+="0".repeat(
            padding
        );

        const bytes=new Uint8Array(
            bits.length/8
        );

        for(

            let i=0;

            i<bits.length;

            i+=8

        ){

            bytes[i/8]=parseInt(

                bits.slice(i,i+8),

                2

            );

        }

        return{

            bytes,

            padding

        };

    }

}