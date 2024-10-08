let score: number | string = 33;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};
type Admin = {
  username: string;
  id: number;
};

let divya: User | Admin = { name: "divya", id: 344 };

divya = { username: "dm", id: 344 };

function getDbId(id: number | string) {
  //   console.log(`DB id is: ${id}`);
  // id.toLowerCase()Property 'toLowerCase' does not exist on type 'string | number'. Property 'toLowerCase' does not exist on type 'number'
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

//
const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number)[] = ["1", 2, "3"];

// literal type
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew";
export {};
