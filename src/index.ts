// Should error "@typescript-eslint/array-type"
export type StringArray = Array<string>;

// Should error "@typescript-eslint/ban-types"
export type Fn = Function;

declare const obj: { a: string };

// Should error "@typescript-eslint/dot-notation"
export const a = obj['a'];