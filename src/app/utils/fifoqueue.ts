export class FifoQueue<T> {

    private _capacity: number;
    private _buffer: T[];
    private _front: number;
    private _back: number;
    private _length: number;

    constructor(capacity: number) {

        this._capacity = capacity;
        this._buffer = new Array(capacity);
        this._front = 0;
        this._back = 0;
        this._length = 0;
    }

    public push(value: T): void {
        if (this.length === this.capacity) {
            throw new Error('Queue full, call pop or resize before pushing.');
        }

        this._buffer[this._back] = value;
        this._back = (this._back + 1) % this.capacity;
        this._length++;
    }

    public pop(): T {
        if (this.length === 0) {
            throw new Error('Queue empty.');
        }

        const value = this._buffer[this._front];
        this._front = (this._front + 1) % this.capacity;
        this._length--;
        return value;
    }

    public get length(): number {
        return this._length;
    }

    public get capacity(): number {
        return this._capacity;
    }

    public at(index: number): T {
        return this._buffer[(this._front + index) % this.capacity];
    }

    public resize(newCapacity: number): void {

        if (newCapacity < this.length) {
            throw new Error('New capacity is too small, pop enough elements to make it fit in the new capacity before resizing.');
        }

        const newBuffer: T[] = new Array(newCapacity);
        for (let i = 0; i < this.length; i++) {
            newBuffer[i] = this.at(i);
        }
        this._front = 0;
        this._capacity = newCapacity;
        this._back = this.length % this.capacity;
        this._buffer = newBuffer;
    }
}
