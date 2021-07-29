export const sanityTest = {
	/**
	 * @param input - generic
	 * @returns same input*/
	identity: <type>(input: type): (() => type) => {
		return () => input;
	},
	/**
	 * Returns five
	 * @returns 5
	 */
	// eslint-disable-next-line @typescript-eslint/no-magic-numbers
	fiveFunction: (): number => 5,
};
