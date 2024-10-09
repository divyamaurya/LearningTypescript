// class User {
//   email: string;
// //   #name: string; using # in js makes it private
//   private name: string;
//   private readonly city: string = "Varanasi";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//     this.city;
//   }
// }

class User {
  private _courseCount = 1;

  readonly city: string = "Varanasi";
  constructor(
    public email: string,
    public name: string // private userId: number
  ) {}

  //private method
  private deleteToken() {
    console.log("Token deleted");
  }
  //   getter
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(courseNum) {
    // set should return nothing
    if (courseNum <= 1) {
      throw new Error("Course count should not be more than 1");
    }
    this._courseCount = courseNum;
  }
}

//creating obj
const divya = new User("d@f.com", "divya");
// divya.city = 2;
// divya.city = "Varanasi"; //readonly
// divya.city not accessible as private accessible within class

// divya.deleteToken() Property 'deleteToken' is private and only accessible within class 'User'
