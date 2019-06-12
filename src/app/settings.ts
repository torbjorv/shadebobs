import { Subject, Observable } from 'rxjs';

export class Settings {
    _tail: number;
    _count: number;
    _speed: number;
    _size: number;
    _force: number;

    _onChanged: Subject<Settings> = new Subject();

    public constructor(tail: number = 25000, count: number = 8, speed: number = 4, size: number = 30, force: number = 1) {
        this._tail = tail;
        this._count = count;
        this._speed = speed;
        this._size = size;
        this._force = force;
    }

    private shallowCopy() {
        return new Settings(this._tail, this._count, this._speed, this._size, this.force);
    }

    public set tail(value: number) {

        if (this.tail === value)
            return;

        this._tail = value;
        this.raiseOnChanged();
    }
    public get tail(): number { return this._tail; }

    public set count(value: number) {

        if (this.count === value)
            return;

        this._count = value;
        this.raiseOnChanged();
    }
    public get count(): number { return this._count; }

    public set speed(value: number) {

        if (this.speed === value)
            return;

        this._speed = value;
        this.raiseOnChanged();
    }
    public get speed(): number { return this._speed; }

    public set size(value: number) {

        if (this.size === value)
            return;

        this._size = value;
        this.raiseOnChanged();
    }
    public get size(): number { return this._size; }

    public set force(value: number) {

        if (this.force === value)
            return;

        this._force = value;
        this.raiseOnChanged();
    }

    public get force(): number { return this._force; }

    private raiseOnChanged(): void {
        this._onChanged.next(this.shallowCopy());
    }

    public get onChanged(): Observable<Settings> {
        return this._onChanged;
    }
}
