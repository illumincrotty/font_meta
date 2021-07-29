export interface featureTag {
	'tag': string;
	'link': string;
	'name': string;
	'registered by': string;
	'function': string;
	'example'?: string;
	'recommended implementation'?: string;
	'application interface'?: string;
	'ui suggestion'?: string;
	'script/language sensitivity'?: string;
	'feature interaction'?: string;
	'note'?: string;
	'range'?: number[];
	'other'?: {
		description: string;
		table?: { type: string; name: string; description: string }[];
		notes?: string[];
	};
	'deprecated'?: boolean;
	'windows 95 implementation'?: string;
	'required implementation'?: string;
	'design size'?: string;
	'size ranges'?: string;
}
