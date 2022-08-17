local ____lualib = require("lualib_bundle")
local __TS__StringReplaceAll = ____lualib.__TS__StringReplaceAll
local __TS__StringSplit = ____lualib.__TS__StringSplit
local ____exports = {}
local ____util = require("util")
local _luaHookInto = ____util._luaHookInto
local _isPipeWrenchLoaded = ____util._isPipeWrenchLoaded
local _syncCallback = ____util._syncCallback
____exports.hookInto = function(____, target, hook)
    return _luaHookInto(
        nil,
        __TS__StringSplit(
            __TS__StringReplaceAll(target, ":", "."),
            "."
        ),
        hook
    )
end
function ____exports.isPipeWrenchLoaded(self)
    return _isPipeWrenchLoaded(nil)
end
____exports.syncCallback = _syncCallback
return ____exports
