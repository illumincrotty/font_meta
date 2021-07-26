import test from 'ava';
import { fiveFunction, identity } from '../src/index';

const one = 1,
	two = 2,
	five = 5;

test('passing test', (t) => {
	t.pass();
});

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const valueExample = one ? true : false;
test('should know truth values', (t) => {
	t.true(valueExample);
});

test('should know 1 == 1', (t) => {
	t.is(one, one);
	t.is(one, one);
});

test('should work with named imports', (t) => {
	const test = { property: 7 };
	t.deepEqual(identity(test)(), test);
	t.is(one, one);
	t.is(two, two);
});

test('can achieve full coverage', (t) => {
	t.is(fiveFunction(), five);
});

test('can dynamically import fs', async (t) => {
	const fs = (await import('node:fs')).promises;
	const text = await fs.readFile('./test/example.txt');
	t.is(text.BYTES_PER_ELEMENT, one);
});
