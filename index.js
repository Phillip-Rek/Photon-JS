"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
exports.__esModule = true;
exports.engine = exports.render = void 0;
//expose the most important methods of this engine
var photon_1 = require("./src/photon");
__createBinding(exports, photon_1, "render");
__createBinding(exports, photon_1, "engine");
