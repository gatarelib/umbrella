import { Comparator } from "@thi.ng/api/api";
import { compare } from "@thi.ng/compare";

import { Reducer } from "../api";
import { $$reduce, reducer } from "../reduce";

export function minCompare<T>(init: () => T, cmp?: Comparator<T>): Reducer<T, T>;
export function minCompare<T>(init: () => T, xs: Iterable<T>): T;
export function minCompare<T>(init: () => T, cmp: Comparator<T>, xs: Iterable<T>): T;
export function minCompare(...args: any[]): any {
    const res = $$reduce(minCompare, args);
    if (res !== undefined) {
        return res;
    }
    const init = args[0];
    const cmp = args[1] || compare;
    return reducer(init, (acc, x) => cmp(acc, x) <= 0 ? acc : x);
}
