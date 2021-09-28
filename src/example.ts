export const sanityTest = {
	/**
	 * Returns self
	 *
	 * @param input - generic
	 * @returns same input
	 */
	identity: <type>(input: type): (() => type) => {
		return () => input;
	},
	/**
	 * Returns five
	 *
	 * @returns 5
	 */
	fiveFunction: (): number => 5,
};
