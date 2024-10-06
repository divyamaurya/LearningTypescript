function addTwo(num: number): number {
  return num + 2;
  //   return "hello";
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

function loginUser(name: string, email: string, isPaid: boolean = false) {}
addTwo(5);
getUpper("Hello");
signUpUser("divya", "mail@gmail.com", false);
loginUser("divya", "m@m.com");

// use union in such case (returning of either boolean or string)
// function getValue(myVal: number): boolean{
//     if(myVal> 5){
//         return true
//     }
//     return "200 Ok"
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];
// const heros = [1, 2, 3];
heros.map((hero): string => {
  return `hero is ${hero}`;
  //   return 1; can't return 1 as it is number
});

function consoleError(errmsg: string): void {
  console.log(errmsg); //not returning so used void
  //   return 1
}

function handleError(errmsg: string): never {
  throw new Error(errmsg); // the function throws an exception or terminates execution of the program
}

export {};
