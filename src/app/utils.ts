export class Utils {
    public static distance(a: [number, number], b: [number, number]): number {
        return Math.abs(Math.hypot(b[0] - a[0], b[1] - b[0]));
    }
}
