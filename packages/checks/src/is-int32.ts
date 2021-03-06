export function isInt32(x: any): x is number {
    return typeof x === "number" && (x | 0) === x;
}
