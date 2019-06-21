import { CardinalCurve } from './curve-editor/cardinal-curve';

export class Settings {
    public constructor(
        public tail: number = 25000, 
        public count: number = 8, 
        public speed: number = 4, 
        public size: number = 30, 
        public force: number = 1,
        public redPoints: [number, number][] = [],
        public greenPoints: [number, number][] = [],
        public bluePoints: [number, number][] = []
        
        ) {
    }

    public get paletteR(): number[] {
        return CardinalCurve.getCurvePoints2(this.redPoints, 0.5, 100);
    }
    public get paletteG(): number[] {
        return CardinalCurve.getCurvePoints2(this.greenPoints, 0.5, 100);
    }
    public get paletteB(): number[] {
        return CardinalCurve.getCurvePoints2(this.bluePoints, 0.5, 100);
    }
}
