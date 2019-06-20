import { Point } from './point';

export class CardinalCurve {

    public static valueAt(pts: Point[], tension: number, x: number) {

        if (x <= pts[0].x) {
            return pts[0].y;
        }

        if (x >= pts[pts.length - 1].x) {
            return pts[pts.length - 1].y;
        }
        
        let begin;
        for (begin = 0; begin < pts.length - 1; begin++) {
            if (pts[begin + 1].x > x) {
                break;
            }
        }
        let end = begin + 1;

        // for (end = 0; end < pts.length && pts[end].x <= x; end++);
        // let begin = end - 1;

        let t = (x - pts[begin].x)/(pts[end].x - pts[begin].x);

        let n0 = Math.max(0, begin - 1);
        let n1 = begin;
        let n2 = end;
        let n3 = Math.min(pts.length - 1, end + 1);

        let t1x = (pts[n2].x - pts[n0].x) * tension;
        let t2x = (pts[n3].x - pts[n1].x) * tension;

        let t1y = (pts[n2].y - pts[n0].y) * tension;
        let t2y = (pts[n3].y - pts[n1].y) * tension;


        let c1 =   2 * Math.pow(t, 3)  - 3 * Math.pow(t, 2) + 1; 
        let c2 = -(2 * Math.pow(t, 3)) + 3 * Math.pow(t, 2); 
        let c3 =       Math.pow(t, 3)  - 2 * Math.pow(t, 2) + t; 
        let c4 =       Math.pow(t, 3)  -     Math.pow(t, 2);

        // calc x and y cords with common control vectors
//        let x_res = c1 * pts[n1].x    + c2 * pts[n2].x + c3 * t1x + c4 * t2x;
        let y_res = c1 * pts[n1].y  + c2 * pts[n2].y + c3 * t1y + c4 * t2y;

        // let t1x = (pts[i+1].x - pts[i-1].x) * tension;
        // let t2x = (pts[i+2].x - pts[i].x) * tension;

        // let t1y = (pts[i+1].y - pts[i-1].y) * tension;
        // let t2y = (pts[i+2].y - pts[i].y) * tension;

        return y_res;
    }

    public static getCurvePoints2(pts: Point[], tension: number, count: number): number[] {

        let result: number[] = [];
        let k = (pts[pts.length - 1].x - pts[0].x)/(count - 1);
        for (let x = pts[0].x; x <= pts[pts.length - 1].x; x += k) {
            result.push(CardinalCurve.valueAt(pts, tension, x));
        }
        
        return result;
//        for (let x = pts[0].x; )
    }

    public static getCurvePoints(pts:Point[], tension, pointCount): Point[] {

        // use input value if provided, or use a default value   
        tension = (typeof tension != 'undefined') ? tension : 0.5;
        pointCount = pointCount ? pointCount : 16;
    
        var _pts:Point[] = [], res:Point[] = [],    // clone array
            x, y,           // our x,y coords
            t1x, t2x, t1y, t2y, // tension vectors
            c1, c2, c3, c4,     // cardinal points
            st, t, i;       // steps based on num. of segments
    
        // clone array so we don't change the original
        //
        _pts = pts.slice(0);
            
        // _pts.unshift(pts[0]);   //copy 1. point and insert at beginning
        // _pts.push(pts[pts.length - 1]); //copy last point and append
        // ok, lets start..

        let k = (pts[pts.length - 1].x - pts[0].x)/(pointCount - 1);
    


        // 1. loop goes through point array
        // 2. loop goes through each segment between the 2 pts + 1e point before and after
        for (i=1; i < (_pts.length - 2); i++) {
            for (t=0; t <= pointCount; t++) {
    
                // calc tension vectors
                t1x = (_pts[i+1].x - _pts[i-1].x) * tension;
                t2x = (_pts[i+2].x - _pts[i].x) * tension;
    
                t1y = (_pts[i+1].y - _pts[i-1].y) * tension;
                t2y = (_pts[i+2].y - _pts[i].y) * tension;
    
                // calc step
                st = t / pointCount;
    
                // calc cardinals
                c1 =   2 * Math.pow(st, 3)  - 3 * Math.pow(st, 2) + 1; 
                c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2); 
                c3 =       Math.pow(st, 3)  - 2 * Math.pow(st, 2) + st; 
                c4 =       Math.pow(st, 3)  -     Math.pow(st, 2);
    
                // calc x and y cords with common control vectors
                x = c1 * _pts[i].x    + c2 * _pts[i+1].x + c3 * t1x + c4 * t2x;
                y = c1 * _pts[i].y  + c2 * _pts[i+1].y + c3 * t1y + c4 * t2y;
    
                //store points in array
                res.push(new Point(x, y));
    
            }
        }
    
        return res;
    }
}