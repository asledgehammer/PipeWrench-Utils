
import { _luaHookInto, _isPipeWrenchLoaded, _syncCallback } from "./util"

export const hookInto = (target: string, hook: (this: void, method: (this: void, self: any, ...args: any[]) => any, self: any, ...args: any[]) => void) => {
    return _luaHookInto(target.replaceAll(":", ".").split("."), hook)
}
export function isPipeWrenchLoaded() { return _isPipeWrenchLoaded() }
export const syncCallback = _syncCallback