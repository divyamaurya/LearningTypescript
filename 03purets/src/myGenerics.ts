//generics
// reusing components

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(3);
identityThree("dfi");

function identityFour<T>(val: T): T {
  return val;
}

//Generic of your own
interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({
  brand: "brand",
  type: 23,
});

// take input as an array
function getSearchProfucts<T>(products: T[]): T {
  // return 3

  //do some db operations
  const myIndex = 3;
  return products[3];
}

// arrow function

const getMoreSearchProducts = <T>(products: T[]): T => {
  //<T,> generic not jsx component
  const myIndex = 4;
  return products[myIndex];
};
