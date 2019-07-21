export class Settings {
    public constructor(
        public tail?: number,
        public count?: number,
        public speed?: number,
        public size?: number,
        public force?: number,
        public red?: [number, number][],
        public green?: [number, number][],
        public blue?: [number, number][]
        ) {}
}
