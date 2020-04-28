"use strict";
exports.__esModule = true;
var function_1 = require("./function");
var hasha_1 = require("hasha");
var lodash_1 = require("lodash");
// const hash = '4ceb86317d0d4dac6853663589ef02ccb67134cee75bb886a4410b7aedd0e109';
var prev_hash = '6bb1c89598c75ba1d4ee138091b51b5e905212cf1ffc4242b0d26545597154e3';
function getTickets(hash, numberOfTickets, accumulator) {
    var nextTicket = numberOfTickets - 1;
    if (nextTicket >= 0) {
        console.log("0. For security do an hash of the input hash: " + hash);
        hash = hasha_1["default"](hash, { algorithm: 'sha256' });
        console.log("1. Starting hash: " + hash);
        var part1 = hash.slice(0, 8);
        var part2 = hash.slice(8, 16);
        var part3 = hash.slice(16, 24);
        var part4 = hash.slice(24, 32);
        var part5 = hash.slice(32, 40);
        var part6 = hash.slice(40, 48);
        var part7 = hash.slice(48, 56);
        var part8 = hash.slice(56, 64);
        console.log("2. Split the hash in 8 parts:");
        console.log("Part 1: " + part1);
        console.log("Part 2: " + part2);
        console.log("Part 3: " + part3);
        console.log("Part 4: " + part4);
        console.log("Part 5: " + part5);
        console.log("Part 6: " + part6);
        console.log("Part 7: " + part7);
        console.log("Part 8: " + part8);
        var partsHex = [part1, part2, part3, part4, part5, part6, part7, part8];
        var partsBinary_1 = [];
        partsHex.map(function (part) {
            partsBinary_1.push(function_1.hexToBinary(part));
        });
        console.log("3. Trasform each part into binary");
        console.log("Binary Part 1:  " + partsBinary_1[0]);
        console.log("Binary Part 2:  " + partsBinary_1[1]);
        console.log("Binary Part 3:  " + partsBinary_1[2]);
        console.log("Binary Part 4:  " + partsBinary_1[3]);
        console.log("Binary Part 5:  " + partsBinary_1[4]);
        console.log("Binary Part 6:  " + partsBinary_1[5]);
        console.log("Binary Part 7:  " + partsBinary_1[6]);
        console.log("Binary Part 8:  " + partsBinary_1[7]);
        console.log("4. Compute the XOR between [part 1 - part 2] and [part 3 = part 4]");
        var partialResult1 = function_1.binaryXOR(partsBinary_1[0], partsBinary_1[1]);
        var partialResult2 = function_1.binaryXOR(partsBinary_1[2], partsBinary_1[3]);
        console.log('Partial Result 1: ' + partialResult1);
        console.log('Partial Result 2: ' + partialResult2);
        var partialResult3 = function_1.binaryXOR(partsBinary_1[4], partsBinary_1[5]);
        var partialResult4 = function_1.binaryXOR(partsBinary_1[6], partsBinary_1[7]);
        console.log('Partial Result 3: ' + partialResult3);
        console.log('Partial Result 4: ' + partialResult4);
        var partialResult5 = function_1.binaryXOR(partialResult1, partialResult2);
        var partialResult6 = function_1.binaryXOR(partialResult3, partialResult4);
        console.log('Partial Result 5: ' + partialResult5);
        console.log('Partial Result 6: ' + partialResult6);
        console.log("5. Compute the XOR between [partial result 1 and partial result 2]");
        var finalBinaryResult = function_1.binaryXOR(partialResult5, partialResult6);
        console.log('Final Result    : ' + finalBinaryResult);
        console.log("6. Trasform the Binary number into a decimal number and compute the modulo N function");
        var ticket = parseInt(finalBinaryResult, 2) % 1000;
        console.log("Decimal value: " + parseInt(finalBinaryResult, 2) + " ");
        console.log('Ticket: ' + ticket);
        console.log("7. Add the ticket to the list");
        accumulator.push(ticket);
        console.log("8. Generate the new hash based on the previous one and the current number of tickets");
        var new_hash = hash + numberOfTickets;
        new_hash = hasha_1["default"](new_hash, { algorithm: 'sha256' });
        console.log("New hash: " + new_hash);
        // Recursion ..
        getTickets(new_hash, nextTicket, accumulator);
    }
}
function doStatistics() {
    var data = [];
    var iteractions = 3;
    var numberOfTickets = 3;
    var plot_data = [];
    for (var i = 0; i < iteractions; i++) {
        var random = Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
        var hash = hasha_1["default"](random, { algorithm: 'sha256' });
        var tickets = [];
        getTickets(hash, numberOfTickets, tickets);
        data.push({ key: hash, value: tickets });
    }
    // console.log(JSON.stringify(data));
    console.log(data);
    var plt = [];
    data.map(function (stat) {
        // console.log(`Data Results: ${stat.key} - ${stat.value}`);
        console.log(lodash_1["default"].groupBy(stat.value));
        console.log(stat.value);
        plt.push(stat.value);
    });
    // console.log(plt)
    var ls_dict = [];
    plt.map(function (ls) {
        ls_dict.push(lodash_1["default"].groupBy(ls));
    });
    console.log(ls_dict);
    return ls_dict;
}
exports.doStatistics = doStatistics;
/*
ho una lista di dizionari: in ogni dizionario le chiavi sono le x e i valori le y.
devo fare una funzione che restiruisca (per ogni dizionario) una lista di numeri per le x che contenga le chiavi
del dizionario mentre un'altra lista per le y che contiene i valori del dizionario. questo lo devo fare per tutti e tre gli esperimenti

questi valori devono essere restituiti dalla funzione doStatistics per essere usati nello script index.js direttamente
senza passare per index.ts
*/
