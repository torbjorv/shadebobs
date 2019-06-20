import { CardinalCurve } from './cardinal-curve';
import { Point } from './point';

fdescribe('CardinalCurve', () => {
    it('handle 2 points and 1 segment', () => {

        // given
        let points = [new Point(0, 0), new Point(1, 1)];

        // when
        let result = CardinalCurve.getCurvePoints2(points, 0.5, 2);

        // then
        expect(result).toEqual([0, 1]);
    })

    it('handle 2 points and 2 segments', () => {

        // given
        let points = [new Point(0, 0), new Point(1, 1)];

        // when
        let result = CardinalCurve.getCurvePoints2(points, 0.5, 3);

        // then
        expect(result).toEqual([0, 0.5, 1]);
    })

});
