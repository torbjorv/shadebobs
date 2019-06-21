export class Settings {
    public constructor(
        public tail: number = 25000, 
        public count: number = 8, 
        public speed: number = 4, 
        public size: number = 30, 
        public force: number = 1,
        public red: [number, number][] = [[0, 0]],
        public green: [number, number][] = [[0, 0]],
        public blue: [number, number][] = [[0, 0]]
        ) {}
}
