export declare const hookInto: (target: string, hook: (this: void, method: (this: void, self: any, ...args: any[]) => any, self: any, ...args: any[]) => void) => boolean;
export declare function isPipeWrenchLoaded(): boolean;
export declare const syncCallback: {
    add(callback: () => void): void;
    tick(): void;
};
