import { Subject, Observable } from 'rxjs';

export class Settings {
    _tail: number;
    _count: number;
    _speed: number;
    _size: number;
    _force: number;
    _redBegin: number;
    _redEnd: number;
    _redCycle: number;
    _greenBegin: number;
    _greenEnd: number;
    _greenCycle: number;
    _blueBegin: number;
    _blueEnd: number;
    _blueCycle: number;

    _onChanged: Subject<Settings> = new Subject();

    public constructor(
        tail: number = 25000, 
        count: number = 8, 
        speed: number = 4, 
        size: number = 30, 
        force: number = 1,
        redBegin: number = 0,
        redEnd: number = 0,
        redCycle: number = 200,
        greenBegin: number = 0,
        greenEnd: number = 0,
        greenCycle: number = 200,
        blueBegin: number = 0,
        blueEnd: number = 0,
        blueCycle: number = 200,
        ) {
        this._tail = tail;
        this._count = count;
        this._speed = speed;
        this._size = size;
        this._force = force;
        this._redBegin = redBegin;
        this._redEnd = redEnd;
        this._redCycle = redCycle;
        this._greenBegin = greenBegin;
        this._greenEnd = greenEnd;
        this._greenCycle = greenCycle;
        this._blueBegin = blueBegin;
        this._blueEnd = blueEnd;
        this._blueCycle = blueCycle;
    }

    private shallowCopy() {
        return new Settings(
            this._tail, 
            this._count, 
            this._speed, 
            this._size, 
            this._force,
            this._redBegin, this._redEnd, this._redCycle,
            this._greenBegin, this._greenEnd, this._greenCycle,
            this._blueBegin, this._blueEnd, this._blueCycle
            );
    }

    public set tail(value: number) {

        if (this.tail == value)
            return;

        this._tail = +value;
        this.raiseOnChanged();
    }
    public get tail(): number { return this._tail; }

    public set count(value: number) {

        if (this.count == value)
            return;

        this._count = +value;
        this.raiseOnChanged();
    }
    public get count(): number { return this._count; }

    public set speed(value: number) {

        if (this.speed == value)
            return;

        this._speed = +value;
        this.raiseOnChanged();
    }
    public get speed(): number { return this._speed; }

    public set size(value: number) {

        if (this.size == value)
            return;

        this._size = +value;
        this.raiseOnChanged();
    }
    public get size(): number { return this._size; }

    public set force(value: number) {

        if (this.force == value)
            return;

        this._force = +value;
        this.raiseOnChanged();
    }
    public get force(): number { return this._force; }

    public set redBegin(value: number) {

        if (this.redBegin == value)
            return;

        this._redBegin = +value;
        this.raiseOnChanged();
    }
    public get redBegin(): number { return this._redBegin; }

    public set redEnd(value: number) {

        if (this.redEnd == value)
            return;

        this._redEnd = +value;
        this.raiseOnChanged();
    }
    public get redEnd(): number { return this._redEnd; }

    public set redCycle(value: number) {

        if (this.redCycle == value)
            return;

        this._redCycle = +value;
        this.raiseOnChanged();
    }
    public get redCycle(): number { return this._redCycle; }

    public set greenBegin(value: number) {

        if (this.greenBegin == value)
            return;

        this._greenBegin = +value;
        this.raiseOnChanged();
    }
    public get greenBegin(): number { return this._greenBegin; }

    public set greenEnd(value: number) {

        if (this.greenEnd == value)
            return;

        this._greenEnd = +value;
        this.raiseOnChanged();
    }
    public get greenEnd(): number { return this._greenEnd; }

    public set greenCycle(value: number) {

        if (this.greenCycle == value)
            return;

        this._greenCycle = +value;
        this.raiseOnChanged();
    }
    public get greenCycle(): number { return this._greenCycle; }

    public set blueBegin(value: number) {

        if (this.blueBegin == value)
            return;

        this._blueBegin = +value;
        this.raiseOnChanged();
    }
    public get blueBegin(): number { return this._blueBegin; }

    public set blueEnd(value: number) {

        if (this.blueEnd == value)
            return;

        this._blueEnd = +value;
        this.raiseOnChanged();
    }
    public get blueEnd(): number { return this._blueEnd; }

    public set blueCycle(value: number) {

        if (this.blueCycle == value)
            return;

        this._blueCycle = +value;
        this.raiseOnChanged();
    }
    public get blueCycle(): number { return this._blueCycle; }

    private raiseOnChanged(): void {
        this._onChanged.next(this.shallowCopy());
    }

    public get onChanged(): Observable<Settings> {
        return this._onChanged;
    }
}
