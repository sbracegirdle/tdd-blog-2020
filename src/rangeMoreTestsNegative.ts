export const range = (end: number): number[] => [...Array(Math.abs(end)).keys()].map(i => (end > 0 ? i : -i))
