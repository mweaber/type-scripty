const person: {
  name: string;
  age: number;
} = {
  name: "Matthew",
  age: 30
};

console.log(person.name);

const bigObject: {
  item: string;
  role: [number, string] // this is a tuple
  grip: string;
  manufacturers: string[];
  curves: {
    open: string;
    closed: string;
    flex: number;
    taped: any[];
  };
} = {
  item: "hockey stick",
  role: [2, 'player'],
  grip: "non-stick",
  manufacturers: ["warrior", "reebok", "bauer"],
  curves: {
    open: "toe",
    closed: "heel",
    flex: 90,
    taped: ["white", "black", 100]
  }
};
console.log(bigObject.curves.flex);

for (const thingy of bigObject.manufacturers) {
  console.log(thingy);
}

//ENUM EXAMPLE

enum Role {ADMIN, READ_ONLY, AUTHOR}

const enumThing = {
  persons: ['person1', 'person2', 'person3'],
  age: 30,
  role: Role.ADMIN
};

if (enumThing.role=== Role.ADMIN) {
  console.log('is Admin');
}