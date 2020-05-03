
import { doStatistics } from "./board"
import _, { Dictionary } from "lodash";
import { writeFile } from "fs";


const js2csv = require('json2csv').parse;
const fs = require('fs')
const res = require('express')


//var plotly = require('plotly')('chelless788', 'ZXtEkH2xIzKdrOtQa4EC')
const ls_num = doStatistics();


let x1 = ls_num[0].value;
let x2 = ls_num[1].value;
let x3 = ls_num[2].value;

//type MyData = {
//    'key': string;
//    'value': number[];
//};

//let myData: MyData[] = [];

interface MyData {
    exp: string;
    value: number[]
}

const myData: MyData[] = [];

myData.push({exp: 'exp1', value: x1})
myData.push({exp: 'exp2', value: x2})
myData.push({exp: 'exp3', value: x3})
console.log('Check that length is the same for all experiments:')
console.log(myData[0].value.length)
console.log(myData[1].value.length)
console.log(myData[2].value.length)

//const json = JSON.stringify(myData)
//console.log('JSON')
//console.log(json)


const fields = ['exp', 'value'];
const opts = { fields }


const csv = js2csv(myData, fields);
fs.writeFile('documentation/csv/sim_5_.csv', csv, function (err: any){
    if (err) throw err;
    console.log('saved!');
});













































/*
// Histogram X
let trace1 = {
    x: x1,
    name: 'Experiment 1',
    autobinx: false, 
    histnorm: "count", 
    marker: {
        color: "red", 
        line: {
            color:  "red", 
            width: 0.2
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
            width: 0.2
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
           color:  "blue", 
            width: 0.2
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



let plt: Array<number[]> = [];
ls_num.map((stat) => {
plt.push(stat.value)
  });
const ls_dict: Array<Dictionary<number[]>> = [];
plt.map( (ls) => {
    ls_dict.push(_.groupBy(ls))
  })

let ls_x: Array<number[]> = [[], [], []];
let ls_y: Array<number[]> = [[], [], []];
let i = 0;
for (let ls_ of ls_dict) {
    for (let key in ls_) {
        ls_x[i].push(parseInt(key))
        ls_y[i].push(ls_[key].length)
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
            color:  "red", 
            width: 0.2
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
            color:  "blue", 
            width: 0.2
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
            color:  "green", 
            width: 0.2
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
    xaxis: {title: "Value"}, 
    yaxis: {title: "Count"}
}

var graphOptions_y = {layout: layout_y, filename: "overlaid-histogram_y", fileopt: 'overwrite_y'};


plotly.plot(data_y, graphOptions_y, function (err: any, msg: any) {
  if (err) return console.log('Error: '+ err);
  console.log(msg)
});
*/
