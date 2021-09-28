// import { Parser } from 'binary-parser';
// import { promises } from 'node:fs';

export const fontSfntVersions = [
	/** ttf */ 0x00_01_00_00, /** otf */ 0x4f_54_54_4f,
	/** woff */ 0x77_4f_46_46, /** woff2 */ 0x77_4f_46_32,
];

export const ttcTag = [
	/** otc */ 0x74_74_63_66, /** ttc */ 0x74_74_63_66,
];

export class Font {
	head: number;

	buffer: Uint8Array;

	/**
	 * Creates an instance of Font.
	 *
	 * @param head - the header signature
	 * @param _buffer - filler
	 */
	constructor(head: number, _buffer: Uint8Array) {
		this.head = head;
		this.buffer = _buffer;
	}
}

// class offsetTable {
// 	sfntVersion = 'sfnt';
// 	// constructor(buffer: Buffer, offset?: number) {this.sfntVersion}
// }
