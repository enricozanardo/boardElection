"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./board");
const lodash_1 = __importDefault(require("lodash"));
var plotly = require('plotly')('chelless788', '0Uz1T8UbZUZzBkFt5j8M');
const ls_num = board_1.doStatistics();
/*
let x1 = ls_num[0].value;
let x2 = ls_num[1].value;
let x3 = ls_num[2].value;
// Histogram X
let trace1 = {
    x: x1,
    name: 'Experiment 1',
    autobinx: false,
    histnorm: "count",
    marker: {
        color: "red",
        line: {
            color:  "grey",
            width: 0
        }
    },
   opacity: 0.75,
   type: "histogram",
   xbins: {
       end: 1000,
       size: 1,
       start: 0
    }
};
 
let trace2 = {
    x: x2,
    autobinx: false,
    histnorm: 'count',
    marker: {
        color: "green",
        line: {
            color:  "blue",
            width: 0
        }
    },
   name: "Experiment 2",
   opacity: 0.75,
   type: "histogram",
   xbins: {
       end: 1000,
       size: 1,
       start: 0
    }
};

let trace3 = {
    x: x3,
    histnorm: "count",
    autobinx: false,
    marker: {
        color: "blue",
        line: {
           color:  "rgb(184, 132, 11)",
            width: 0
        }
    },
   name: "Experiment 3",
   opacity: 0.75,
   type: "histogram",
   xbins: {
       end: 1000,
       size: 1,
       start: 0
    }
};
 
let data = [trace1, trace2, trace3];

let layout = {
    bargap: 0.25,
    bargroupgap: 0.3,
    barmode: "overlay",
    title: "Sampled Results: Board Election Histogram Chart 3",
    xaxis: {title: "Value"},
    yaxis: {title: "Count"}
}

var graphOptions = {layout: layout, filenam: "overlaid-histogram", fileopt: 'overwrite'};


plotly.plot(data, graphOptions, function (err: any, msg: any) {
  if (err) return console.log('Error: '+ err);
  console.log(msg)
});

*/
let plt = [];
ls_num.map((stat) => {
    plt.push(stat.value);
});
const ls_dict = [];
plt.map((ls) => {
    ls_dict.push(lodash_1.default.groupBy(ls));
});
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
// Histogram Y
let trace_y1 = {
    x: ls_y[0],
    name: 'Experiment 1',
    autobinx: false,
    histnorm: "count",
    marker: {
        color: "red",
        line: {
            color: "red",
            width: 0
        }
    },
    opacity: 0.75,
    type: "histogram",
    xbins: {
        end: 1000,
        size: 1,
        start: 0
    }
};
let trace_y2 = {
    x: ls_y[1],
    autobinx: false,
    histnorm: 'count',
    marker: {
        color: "blue",
        line: {
            color: "blue",
            width: 0
        }
    },
    name: "Experiment 2",
    opacity: 0.75,
    type: "histogram",
    xbins: {
        end: 1000,
        size: 1,
        start: 0
    }
};
let trace_y3 = {
    x: ls_y[2],
    histnorm: "count",
    autobinx: false,
    marker: {
        color: "green",
        line: {
            color: "green",
            width: 0
        }
    },
    name: "Experiment 3",
    opacity: 0.75,
    type: "histogram",
    xbins: {
        end: 1000,
        size: 1,
        start: 0
    }
};
let data_y = [trace_y1, trace_y2, trace_y3];
let layout_y = {
    bargap: 0.25,
    bargroupgap: 0.3,
    barmode: "overlay",
    title: "Sampled Results: Board Election Histogram Chart [Y 1]",
    xaxis: { title: "Value" },
    yaxis: { title: "Count" }
};
var graphOptions_y = { layout: layout_y, filename: "overlaid-histogram_y", fileopt: 'overwrite_y' };
plotly.plot(data_y, graphOptions_y, function (err, msg) {
    if (err)
        return console.log('Error: ' + err);
    console.log(msg);
});
