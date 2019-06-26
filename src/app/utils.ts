export class Utils {
    public static distance(a: [number, number], b: [number, number]): number {
        return Math.sqrt(Math.pow(b[0] - a[0], 2) + Math.pow(b[1] - a[1], 2));
    }
}
