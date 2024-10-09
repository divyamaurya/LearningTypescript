"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "55";
var divya = { name: "divya", id: 344 };
divya = { username: "dm", id: 344 };
function getDbId(id) {
    //   console.log(`DB id is: ${id}`);
    // id.toLowerCase()Property 'toLowerCase' does not exist on type 'string | number'. Property 'toLowerCase' does not exist on type 'number'
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
//array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", 2, "3"];
// literal type
var seatAllotment; //seatAllotment can be only of three type
seatAllotment = "aisle";
