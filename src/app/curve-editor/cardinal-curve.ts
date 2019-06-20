
export class CardinalCurve {

    public static valueAt(pts: [number, number][], tension: number, x: number) {

        if (x <= pts[0][0]) {
            return pts[0][1];
        }

        if (x >= pts[pts.length - 1][0]) {
            return pts[pts.length - 1][1];
        }

        let begin;
        for (begin = 0; begin < pts.length - 1; begin++) {
            if (pts[begin + 1][0] > x) {
                break;
            }
        }
        let end = begin + 1;

        // for (end = 0; end < pts.length && pts[end].x <= x; end++);
        // let begin = end - 1;

        let t = (x - pts[begin][0])/(pts[end][0] - pts[begin][0]);

        let n0 = Math.max(0, begin - 1);
        let n1 = begin;
        let n2 = end;
        let n3 = Math.min(pts.length - 1, end + 1);

        let t1x = (pts[n2][0] - pts[n0][0]) * tension;
        let t2x = (pts[n3][0] - pts[n1][0]) * tension;

        let t1y = (pts[n2][1] - pts[n0][1]) * tension;
        let t2y = (pts[n3][1] - pts[n1][1]) * tension;


        let c1 =   2 * Math.pow(t, 3)  - 3 * Math.pow(t, 2) + 1; 
        let c2 = -(2 * Math.pow(t, 3)) + 3 * Math.pow(t, 2); 
        let c3 =       Math.pow(t, 3)  - 2 * Math.pow(t, 2) + t; 
        let c4 =       Math.pow(t, 3)  -     Math.pow(t, 2);

        // calc x and y cords with common control vectors
//        let x_res = c1 * pts[n1].x    + c2 * pts[n2].x + c3 * t1x + c4 * t2x;
        let y_res = c1 * pts[n1][1]  + c2 * pts[n2][1] + c3 * t1y + c4 * t2y;

        // let t1x = (pts[i+1].x - pts[i-1].x) * tension;
        // let t2x = (pts[i+2].x - pts[i].x) * tension;

        // let t1y = (pts[i+1].y - pts[i-1].y) * tension;
        // let t2y = (pts[i+2].y - pts[i].y) * tension;

        return y_res;
    }

    public static getCurvePoints2(pts: [number, number][], tension: number, count: number): number[] {

        if (pts.length < 2) {
            return [];
        }

        let result: number[] = [];
        let k = (pts[pts.length - 1][0] - pts[0][0])/(count - 1);
        for (let x = pts[0][0]; x <= pts[pts.length - 1][0]; x += k) {
            result.push(CardinalCurve.valueAt(pts, tension, x));
        }
        
        return result;
    }

}