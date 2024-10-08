// const superHeros = []
// superHeros.push("spiderman") Argument of type 'string' is not assignable to parameter of type 'never'.

const superHeros: string[] = [];
const heroPower: Array<number> = [];

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

const MLModels: number[][] = [[255, 255, 255], []];

superHeros.push("spiderman");
heroPower.push(2);
