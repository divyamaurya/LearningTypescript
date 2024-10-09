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
  private readonly city: string = "Varanasi";
  constructor(
    public email: string,
    public name: string
  ) // private userId: number
  {}
}

//creating obj
const divya = new User("d@f.com", "divya");
// divya.city = 2;
// divya.city = "Varanasi"; //readonly
// divya.city not accessible as private accessible within class
