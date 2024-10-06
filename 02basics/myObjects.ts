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
export {};
