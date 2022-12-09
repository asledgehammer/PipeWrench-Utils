declare module 'PipeWrench-Utils' {
  
  export const syncCallback: {
    /** @noSelf */
    add(callback: () => void): void;

    /** @noSelf */
    tick(): void;
  };

  /** @noSelf */
  export const isPipeWrenchLoaded: () => boolean;
}

 declare module 'PipeWrench-Utils' {
  /**
   * @noSelf
   * @author Konijima
   * 
   * Hook into global object methods to extend or overwrite functionality
   * @param target The target method fullpath
   * @param hook The hook function to apply to that method
   * @throws Throws an error if invalid
   */
  export const hookInto: (target: string, hook: (this: void, method: (this: void, self: any, ...args: any[]) => any, self: any, ...args: any[]) => void) => boolean

  /**
   * @noSelf
   * @author Konijima
   * 
   * Get a global object and cast a type
   * @param target The target object/method fullpath
   * @return object | null
   */
  export const getGlobal: <T>(target: string) => T;
}
