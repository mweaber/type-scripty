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
