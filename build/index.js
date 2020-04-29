"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./board");
const plot = require('node-remote-plot');
board_1.doStatistics();
plot({
    x: [1, 2, 3, 4],
    y: [50, 60, 70, 80],
    xLabel: 'tickets',
    yLabel: 'Extraction',
    title: 'Board Election Chart',
    name: 'board_elelection',
});
