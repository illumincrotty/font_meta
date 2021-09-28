import { Parser } from 'binary-parser';
// import type { featureTag } from 'types';
// import featureTagsSpecExtended from '../assets/tags/featureTags.json';
import { promises } from 'node:fs';

import { Font, fontSfntVersions, ttcTag } from './font';

/**
 * Loads a font
 *
 * @param path - path to a font file
 * @returns Promise of a font
 */
export const load = async (path: string): Promise<Font> => {
	const buffer = await promises.readFile(path);
	const signature = (
		Parser.start().uint32('signature').parse(buffer) as {
			signature: number;
		}
	).signature;
	if (fontSfntVersions.includes(signature))
		return new Font(signature, buffer);
	if (ttcTag.includes(signature))
		throw new Error('cannot handle font collections');

	throw new Error('unknown font type');
};
