const identity = <type>(input: type): (() => type) => {
	return () => input;
};

const fiveValue = 5;
/**
 * Returns five
 * @returns 5
 */
const fiveFunction = (): number => fiveValue;

export { identity, fiveFunction };
