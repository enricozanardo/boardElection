Object.defineProperty(exports, "__esModule", { value: true });
const board_1 = require("./board");

var ls_dict = board_1.doStatistics(); //inputs data
//histogram

var x1 = [];
var x2 = []; 
var x3 = [];
var y1 = [];
var y2 = [];
var y3 = [];
var ls_x = [x1, x2, x3];
var ls_y = [y1, y2, y3];
var i = 0;
for (let ls_ of ls_dict) {
  for (let key in ls_) {
    ls_x[i].push(parseInt(key))
    ls_y[i].push(ls_[key].length)
  }
  i++;
}
var hist_plot = document.getElementById('hist-plot');
var trace1 = {
  x: ls_x[0],
  y: ls_y[0],
  name: 'Experiment 1',
  autobinx: false, 
  histnorm: "count", 
  marker: {
    color: "rgba(255, 100, 102, 0.7)", 
     line: {
      color:  "rgba(255, 100, 102, 1)", 
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

var trace2 = {
  x: ls_x[1],
  y: ls_y[1], 
  autobinx: false, 
  marker: {
          color: "rgba(100, 200, 102, 0.7)",
           line: {
            color:  "rgba(100, 200, 102, 1)", 
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

var trace3 = {
  x: ls_x[2],
  y: ls_y[2], 
  autobinx: false, 
  marker: {
          color: "rgba(100, 200, 102, 0.7)",
           line: {
            color:  "rgba(100, 200, 102, 1)", 
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

var data = [trace1, trace2, trace3];
var layout = {
  bargap: 0.05, 
  bargroupgap: 0.2, 
  barmode: "overlay", 
  title: "Sampled Results", 
  xaxis: {title: "Value"}, 
  yaxis: {title: "Count"}
}

Plotly.newPlot(hist_plot, data, layout);














//document.getElementById('display').innerHTML = 'Histogram Plot'


/*
var x1 = [];
var x2 = [];
var y1 = [];
var y2 = [];
for (var i = 1; i < 500; i++) 
{
  k = Math.random();
  x1.push(k*5);
  x2.push(k*10);
  y1.push(k);
  y2.push(k*2);
}
var trace1 = {
  x: x1,
  y: y1,
  name: 'control',
  autobinx: false, 
  histnorm: "count", 
  marker: {
    color: "rgba(255, 100, 102, 0.7)", 
     line: {
      color:  "rgba(255, 100, 102, 1)", 
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
var trace2 = {
  x: x2,
  y: y2, 
  autobinx: false, 
  marker: {
          color: "rgba(100, 200, 102, 0.7)",
           line: {
            color:  "rgba(100, 200, 102, 1)", 
            width: 1
    } 
       }, 
  name: "exPe", 
  opacity: 0.75, 
  type: "histogram", 
  xbins: { 
    end: 4, 
    size: 0.06, 
    start: -3.2

  }
};
var data = [trace1, trace2];
var layout = {
  bargap: 0.05, 
  bargroupgap: 0.2, 
  barmode: "overlay", 
  title: "Sampled Results", 
  xaxis: {title: "Value"}, 
  yaxis: {title: "Count"}
};
Plotly.newPlot('myDiv', data, layout);
*/