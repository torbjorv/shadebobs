import binarySearch from 'binary-search';

export class Utils {
    public static distance(a: [number, number], b: [number, number]): number {
        return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
    }

    public static roundToStep(numToRound: number, numToRoundTo: number): number {
        numToRoundTo = 1 / (numToRoundTo);
        return Math.round(numToRound * numToRoundTo) / numToRoundTo;
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
     * Overwrites/sets/inserts a range in the curve. <p0, p1] will be either removed or overwritten. 
     * p1 is guaranteed to be in the curve after operation is done.
     */
    public static setRange(curve: [number, number][], p0: [number, number], p1: [number, number]) {

        if (p0[0] === p1[0]) {
            Utils.setPoint(curve, p1);
        } else {
            let insertionPoint: number;
            let count: number;

            let p0Inclusive = binarySearch(curve, p0, (a, b) => a[0] - b[0]);
            let p1Inclusive = binarySearch(curve, p1, (a, b) => a[0] - b[0]);

            if (p1[0] >= p0[0]) {
                // left to right
                if (p0Inclusive < 0) {
                    p0Inclusive = -p0Inclusive - 1;
                } else {
                    p0Inclusive++;
                }

                if (p1Inclusive < 0) {
                    p1Inclusive = -p1Inclusive - 1;
                } else {
                    p1Inclusive++;
                }
                count = (p1Inclusive - p0Inclusive);
                insertionPoint = p0Inclusive;
            } else {
                // right to left
                if (p0Inclusive < 0) {
                    p0Inclusive = -p0Inclusive - 1;
                }

                if (p1Inclusive < 0) {
                    p1Inclusive = -p1Inclusive - 1;
                }
                count = (p0Inclusive - p1Inclusive);
                insertionPoint = p1Inclusive;
            }
            curve.splice(insertionPoint, count, p1);
        }
    }
}
