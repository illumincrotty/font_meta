import { join } from 'node:path';
import { load } from '../src/index';
import test from 'ava';

const basePath = './assets/fonts/';
const fontPaths = [
	'atkinson-hyperlegible-regular.ttf',
	'Compagnon-Bold.otf',
	'Fraunces[SOFT,WONK,opsz,wght].ttf',
	'Inter-Italic.woff',
	'Inter-BoldItalic.woff2',
];

const unknownFontPath = 'unknowntype.ttf';

const fontCollectionPaths = [
	'collection01.otc',
	'recursive-static-TTFs.ttc',
];

test('loading a font', async (t) => {
	await t.notThrowsAsync(load(join(basePath, fontPaths[0])));
});

test('loading a  collection', async (t) => {
	await t.throwsAsync(load(join(basePath, fontCollectionPaths[0])));
});

test('throwing an error on an unknown file signature', async (t) => {
	await t.throwsAsync(load(join(basePath, unknownFontPath)));
});
