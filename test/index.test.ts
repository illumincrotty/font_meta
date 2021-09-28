import { sanityTest } from '../src/example';
import test from 'ava';

const one = 1,
	two = 2,
	five = 5;

test('passing test', (t) => {
	t.pass();
});

test('should know truth values', (t) => {
	t.true(true);
});

test('should know 1 == 1', (t) => {
	t.is(one, one);
	t.is(one, one);
});

test('should work with named imports', (t) => {
	const check = { property: 7 };
	t.deepEqual(sanityTest.identity(check)(), check);
	t.is(one, one);
	t.is(two, two);
});

test('can achieve full coverage', (t) => {
	t.is(sanityTest.fiveFunction(), five);
});

test('can dynamically import fs', async (t) => {
	const fs = (await import('node:fs')).promises;
	const text = await fs.readFile('./test/example.txt');
	t.is(text.BYTES_PER_ELEMENT, one);
});
