import { Parser } from 'binary-parser';
import { promises } from 'node:fs';

// type optionType = Parameters<Parser['uint16']>;

// const fixed = new Parser().int16();
// const dataTypes = {
// 	/** 32-bit signed fixed-point number (16.16)*/
// 	Fixed: new Parser.start().
// };
// const dataTypes = {
//     /** 8-bit unsigned integer.*/
//     uint8: (parser:Parser)=>p.uint8();
//     /** 8-bit signed integer.*/
//     int8: Int8;
//     /** 16-bit unsigned integer.*/
//     uint16:uint16;
//     /** 16-bit signed integer.*/
//     int16:int16;
//     /** 24-bit unsigned integer.*/
//     uint24:uint24;
//     /** 32-bit unsigned integer.*/
//     uint32:uint32;
//     /** 32-bit signed integer.*/
//     int32:int32;
//     /** 32-bit signed fixed-point number (16.16)*/
//     Fixed:Fixed;
//     /** int16 that describes a quantity in font design units.*/
//     FWORD:FWORD;
//     /** uint16 that describes a quantity in font design units.*/
//     UFWORD:UFWORD;
//     /** 16-bit signed fixed number with the low 14 bits of fraction (2.14).*/
//     F2DOT14:F2DOT14;
//     /** Date represented in number of seconds since 12:00 midnight, January 1, 1904. The value is represented as a signed 64-bit integer.*/
//     LONGDATETIME:LONGDATETIME;
//     /** Array of four uint8s (length = 32 bits) used to identify a table, designvariation axis, script, language system, feature, or baseline*/
//     Tag:Tag;
//     /** Short offset to a table, same as uint16, NULL offset = 0x0000*/
//     Offset16:Offset16;
//     /** Long offset to a table, same as uint32, NULL offset = 0x00000000*/
//     Offset32:Offset32;
// }

// enum sfntVersion {
// 	'00010000',
// 	'OTTO',
// }
// interface offsetTable {
// 	sfntVersion: sfntVersion;
// 	numTables: number;
// }

class FIXED {
	value = 0;

	public set top(input: number) {
		this.value = input;
	}

	public set bottom(input: number) {
		this.value += input / (2 ^ 16);
	}

	toString(): string {
		return `${this.value}`;
	}
}

const fixed = Parser.start()
	.create(FIXED)
	.int16('top')
	.int16('bottom');
const out = fixed.parse(Buffer.from([0x7f, 0xff, 0x00, 0x01])) as {
	value: number;
};
console.log(out);
const test = Parser.start()
	.endianess('big')
	.string('sfnt', { encoding: 'utf8', length: 4 });

void (async () => {
	// const offsetNull = 0;
	// const int32Size = 4;
	const otf = await promises.readFile(
		'./assets/fonts/Compagnon-Bold.otf'
	);
	const version = test.parse(otf) as Record<'sfnt', string>;
	console.log(version);
})();
