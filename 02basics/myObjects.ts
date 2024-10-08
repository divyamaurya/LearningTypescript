const User = {
  name: "divya",
  email: "m@mail.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "divya", isPaid: false });

function createCourse(): { name: string; price: number } {
  return { name: "ReactJS", price: 399 };
}

// Type Aliases

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function createUser2(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser2({ name: "", email: "", isActive: true });
export {};

type User2 = {
  readonly _id: string; //readonly
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; //optional
};

let myUser: User2 = {
  _id: "1234",
  name: "h",
  email: "d@d.com",
  isActive: true,
};

myUser.email = "d@gmail.com";
// myUser._id="43r34"

// mix and match of type
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
