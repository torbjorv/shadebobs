import { FifoQueue } from './fifoqueue';

describe('FifoQueue', () => {
    it('should create an instance', () => {
        expect(new FifoQueue<number>(10)).toBeTruthy();
    });

    it('should push/pop a value', () => {

        // given
        const expectedCapacity = 10;
        const expectedValue = 123;
        const queue = new FifoQueue<number>(expectedCapacity);

        // when
        queue.push(expectedValue);

        // then
        expect(queue.capacity).toEqual(expectedCapacity);
        expect(queue.length).toEqual(1);
        expect(queue.pop()).toEqual(expectedValue);

        expect(queue.length).toEqual(0);
    });

    it('should return correct length when queue is full', () => {

        // given
        const queue = new FifoQueue<number>(3);

        // when
        queue.push(1);
        queue.push(2);
        queue.push(3);

        // then
        expect(queue.length).toEqual(3);
    });

    it('should push values using circular buffer', () => {

        // given
        const queue = new FifoQueue<number>(3);
        queue.push(1);
        queue.push(2);
        queue.push(3);

        expect(queue.pop()).toEqual(1);

        // when
        queue.push(4);

        // then
        expect(queue.pop()).toEqual(2);
        expect(queue.pop()).toEqual(3);
        expect(queue.pop()).toEqual(4);
        expect(queue.length).toEqual(0);
    });

    it('at() should handle the circular buffer magic', () => {
        // given
        const queue = new FifoQueue<number>(3);
        queue.push(0);
        queue.push(1);
        queue.push(2);
        queue.pop();
        queue.push(3);

        // then
        expect(queue.at(0)).toEqual(1);
        expect(queue.at(1)).toEqual(2);
        expect(queue.at(2)).toEqual(3);
    });

    it('resize should handle circularity', () => {
        // given
        const queue = new FifoQueue<number>(3);
        queue.push(0);
        queue.push(1);
        queue.push(2);
        queue.pop();
        queue.pop();
        queue.push(3);

        // when
        queue.resize(2);

        // then
        expect(queue.length).toEqual(2);
        expect(queue.capacity).toEqual(2);
        expect(queue.at(0)).toEqual(2);
        expect(queue.at(1)).toEqual(3);
    });
});
