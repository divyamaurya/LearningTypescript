//array with restrictions
// const user: (string | number)[] = [1, "dm"];
let tuser: [string, number, boolean]; //order of the data is must

tuser = ["dm", 121, true];

let rgb: [number, number, number] = [255, 12, 112];

type User = [number, string];
const newUser: User = [112, "d@d.com"];

newUser[1] = "dm.com"; // value is mutable
// newUser.push(true);

export {};
