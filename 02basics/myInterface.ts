//creating user and start trial for discount
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string, value: number): number;
}

const divya: User = {
  dbId: 1, // added dbId
  email: "d@d.com",
  userId: 2211,
  startTrail: () => {
    return "trial started"; // fixed startTrail method
  },
  getCoupon: (couponname: string, value: number) => {
    return value; // fixed getCoupon method
  },
};
//reopening of the interface
// interface User {
//   githubToken: string;
// }
//Now reopening of interface cannot happen

//inheritance
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

divya.email = "ha@dm.com";

// Using the methods
console.log(divya.startTrail()); // Output: "trial started"
console.log(divya.getCoupon("divya", 10)); // Output: 10

// Differences between type aliases and interface have a look
