import { Utils } from './utils';

describe('Utils.setPoint', () => {
  it('should set one point in empty curve', () => {

    // given
    const curve = [];
    const point: [number, number] = [1, 2];

    // when
    Utils.setPoint(curve, point);

    // then
    expect(curve).toEqual([point]);
  });

  it('should overwrite', () => {

    // given
    const curve: [number, number][] = [[1, 1]];
    const point: [number, number] = [1, 2];

    // when
    Utils.setPoint(curve, point);

    // then
    expect(curve).toEqual([point]);
  });

  it('should set one point in segment', () => {

    // given
    const p0: [number, number] = [0, 4];
    const p1: [number, number] = [1, 5];
    const p2: [number, number] = [2, 6];
    const curve = [p0, p2];

    // when
    Utils.setPoint(curve, p1);

    // then
    expect(curve).toEqual([p0, p1, p2]);
  });

});

describe('Utils.setRange', () => {
  it('should set range in empty curve, left to right', () => {

    // given
    const curve = [];
    const p0: [number, number] = [0, 1];
    const p1: [number, number] = [1, 2];

    // when
    Utils.setRange(curve, p0, p1);

    // then
    expect(curve).toEqual([p0, p1]);
  });

  it('should set range in empty curve, right to left', () => {

    // given
    const curve = [];
    const p0: [number, number] = [0, 1];
    const p1: [number, number] = [1, 2];

    // when
    Utils.setRange(curve, p1, p0);

    // then
    expect(curve).toEqual([p0, p1]);
  });

  it('p0 < p1, p0 is already in curve', () => {

    // given
    const p0: [number, number] = [0, 1];
    const p1: [number, number] = [1, 2];
    const curve = [p0];

    // when
    Utils.setRange(curve, p0, p1);

    // then
    expect(curve).toEqual([p0, p1]);
  });

  it('p0 > p1, p0 is already in curve2', () => {

    // given
    const p0: [number, number] = [0, 4];
    const p1: [number, number] = [1, 5];
    const p2: [number, number] = [2, 6];
    const curve: [number, number][] = [p0, p2];

    // when
    Utils.setRange(curve, p2, p1);

    // then
    expect(curve).toEqual([p0, p1, p2]);
  });

  it('p0 > p1, p0 is already in curve1', () => {

    // given
    const p0: [number, number] = [0, 4];
    const p1: [number, number] = [1, 5];
    const curve: [number, number][] = [p1];

    // when
    Utils.setRange(curve, p1, p0);

    // then
    expect(curve).toEqual([p0, p1]);
  });

  it('p0 == p1, empty curve', () => {

    // given
    const p0: [number, number] = [0, 4];
    const p1: [number, number] = [0, 5];
    const curve = [];

    // when
    Utils.setRange(curve, p0, p1);

    // then
    expect(curve).toEqual([p1]);
  });

  it('p0 and p1 inside same segment', () => {

    // given
    const p0: [number, number] = [0, 0];
    const p1: [number, number] = [2, 4];
    const p2: [number, number] = [3, 5];
    const p3: [number, number] = [4, 6];
    const curve: [number, number][] = [p0, p3];

    // when
    Utils.setRange(curve, p1, p2);

    // then
    expect(curve).toEqual([p0, p1, p2, p3]);
  });

  it('p0==p1 inside same segment', () => {

    // given
    const p0: [number, number] = [0, 0];
    const p1: [number, number] = [2, 4];
    const p2: [number, number] = [2, 5];
    const p3: [number, number] = [4, 6];
    const curve: [number, number][] = [p0, p3];

    // when
    Utils.setRange(curve, p1, p2);

    // then
    expect(curve).toEqual([p0, p2, p3]);
  });

  it('p0==p1==existing', () => {

    // given
    const p0: [number, number] = [2, 1];
    const p1: [number, number] = [2, 2];
    const p2: [number, number] = [2, 3];
    const curve: [number, number][] = [p0];

    // when
    Utils.setRange(curve, p1, p2);

    // then
    expect(curve).toEqual([p2]);
  });


  it('p0 > p1, overwrite point between', () => {

    // given
    const p0: [number, number] = [1, 0];
    const p1: [number, number] = [2, 4];
    const p2: [number, number] = [3, 5];
    const curve: [number, number][] = [p1];

    // when
    Utils.setRange(curve, p0, p2);

    // then
    expect(curve).toEqual([p0, p2]);
  });

  it('p0 < p1, overwrite point between', () => {

    // given
    const p0: [number, number] = [1, 0];
    const p1: [number, number] = [2, 4];
    const p2: [number, number] = [3, 5];
    const curve: [number, number][] = [p1];

    // when
    Utils.setRange(curve, p2, p0);

    // then
    expect(curve).toEqual([p0, p2]);
  });
});
