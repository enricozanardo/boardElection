"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./board");
board_1.doStatistics();
const ls_dict = board_1.doStatistics();
let ls_x = [[], [], []];
let ls_y = [[], [], []];
let i = 0;
for (let ls_ of ls_dict) {
    for (let key in ls_) {
        ls_x[i].push(parseInt(key));
        ls_y[i].push(ls_[key].length);
    }
    i++;
}
//console.log(ls_x, ls_y)
// Histogram
let trace1 = {
    x: ls_x[0],
    y: ls_y[0],
    name: 'Experiment 1',
    autobinx: false,
    histnorm: "count",
    marker: {
        color: "rgba(255, 100, 102, 0.7)",
        line: {
            color: "rgba(255, 100, 102, 1)",
            width: 1
        }
    },
    opacity: 0.5,
    type: "histogram",
    xbins: {
        end: 2.8,
        size: 0.06,
        start: .5
    }
};
let trace2 = {
    x: ls_x[1],
    y: ls_y[1],
    autobinx: false,
    marker: {
        color: "rgba(100, 200, 102, 0.7)",
        line: {
            color: "rgba(100, 200, 102, 1)",
            width: 1
        }
    },
    name: "Experiment 2",
    opacity: 0.75,
    type: "histogram",
    xbins: {
        end: 4,
        size: 0.06,
        start: -3.2
    }
};
let trace3 = {
    x: ls_x[2],
    y: ls_y[2],
    autobinx: false,
    marker: {
        color: "rgba(100, 200, 102, 0.7)",
        line: {
            color: "rgba(100, 200, 102, 1)",
            width: 1
        }
    },
    name: "Experiment 3",
    opacity: 0.75,
    type: "histogram",
    xbins: {
        end: 4,
        size: 0.06,
        start: -3.2
    }
};
let data = [trace1, trace2, trace3];
let layout = {
    bargap: 0.05,
    bargroupgap: 0.2,
    barmode: "overlay",
    title: "Sampled Results",
    xaxis: { title: "Value" },
    yaxis: { title: "Count" }
};
Plotly.newPlot('hist-plot', data, layout);
