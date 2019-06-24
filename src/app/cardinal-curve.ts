
export class CardinalCurve {

    private static valueAt(points: [number, number][], tension: number, x: number) {

        if (x <= points[0][0]) {
            return points[0][1];
        }

        if (x >= points[points.length - 1][0]) {
            return points[points.length - 1][1];
        }

        let begin;
        for (begin = 0; begin < points.length - 1; begin++) {
            if (points[begin + 1][0] > x) {
                break;
            }
        }
        const end = begin + 1;

        const t = (x - points[begin][0]) / (points[end][0] - points[begin][0]);

        const n0 = Math.max(0, begin - 1);
        const n1 = begin;
        const n2 = end;
        const n3 = Math.min(points.length - 1, end + 1);

        const t1y = (points[n2][1] - points[n0][1]) * tension;
        const t2y = (points[n3][1] - points[n1][1]) * tension;


        const c1 =   2 * Math.pow(t, 3)  - 3 * Math.pow(t, 2) + 1;
        const c2 = -(2 * Math.pow(t, 3)) + 3 * Math.pow(t, 2);
        const c3 =       Math.pow(t, 3)  - 2 * Math.pow(t, 2) + t;
        const c4 =       Math.pow(t, 3)  -     Math.pow(t, 2);

        const yRes = c1 * points[n1][1]  + c2 * points[n2][1] + c3 * t1y + c4 * t2y;

        return yRes;
    }

    /**
     * Calculates a cardinal curve
     * @param points Control points
     * @param tension The tension
     * @param count Number of output points
     */
    public static build(points: [number, number][], tension: number, count: number): number[] {

        if (points.length < 2) {
            return [];
        }

        const result: number[] = [];
        const k = (points[points.length - 1][0] - points[0][0]) / (count - 1);
        for (let x = points[0][0]; x <= points[points.length - 1][0]; x += k) {
            result.push(CardinalCurve.valueAt(points, tension, x));
        }

        return result;
    }

}
