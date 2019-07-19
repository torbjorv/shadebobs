import binarySearch from 'binary-search';

export class Utils {
    public static distance(a: [number, number], b: [number, number]): number {
        return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
    }

    public static snap(n: number, step: number): number {
        step = 1 / (step);
        return Math.round(n * step) / step;
    }

    public static clamp(n: number, min: number, max: number) {
        return Math.min(Math.max(n, min), max);
    }

    /**
     * Sets/overwrites/inserts one point in the curve.
     */
    public static setPoint(curve: [number, number][], p: [number, number]): void {

        const i = binarySearch(curve, p, (a, b) => a[0] - b[0]);

        let count: number;
        let insertionPoint: number;

        if (i < 0) {
            insertionPoint = -i - 1;
            count = 0;
        } else {
            insertionPoint = i;
            count = 1;
        }

        curve.splice(insertionPoint, count, p);
    }

    /**
     * Overwrites/sets/inserts a range in the curve. [p0, p1] will be either removed or overwritten.
     */
    public static setRange(curve: [number, number][], p0: [number, number], p1: [number, number]) {

        if (p0[0] === p1[0]) {
            Utils.setPoint(curve, p1);
        } else {

            const left = (p0[0] < p1[0]) ? p0 : p1;
            const right = (p1[0] > p0[0]) ? p1 : p0;

            let insertionPoint: number;
            let count: number;

            const leftIndex = binarySearch(curve, left, (a, b) => a[0] - b[0]);
            const rightIndex = binarySearch(curve, right, (a, b) => a[0] - b[0]);
            const leftInclusive = (leftIndex < 0) ? -leftIndex - 1 : leftIndex;
            const rightInclusive = (rightIndex < 0) ? -rightIndex - 1 : rightIndex + 1;

            count = (rightInclusive - leftInclusive);
            insertionPoint = leftInclusive;

            curve.splice(insertionPoint, count, left, right);
        }
    }
}
