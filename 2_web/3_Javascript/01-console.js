const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log("Clue found: ", clue1);
console.log("Clue found: ", clue2);

const suspectName = "Dipesh";
const suspectAge = 20;
console.log("Suspect: ", suspectName, "| Age: ", suspectAge);

console.warn("Warning: Fingerprint evedence detected");
console.error("Warning: Fingerprint evedence detected");

// const evidenceLog = [
//   { id: 1, item: "Muddy footprint", location: "Window sill" },
//   { id: 2, item: "Broken glass", location: "Living room" },
//   { id: 3, item: "Red fiber strand", location: "Door handle" },
// ];

// console.table(evidenceLog);

const laptopSpecs = [
  { id: 1, Name: "Dell", Specs: "i3 13th gen, 8/512", Price: "70000"},
  { id: 2, Name: "HP", Specs: "Ryzen 5300 gen, 8/512", Price: "100000"},
  { id: 3, Name: "Mac", Specs: "M1 8/512", Price: "150000"}
];

console.table(laptopSpecs);

console.group("Groupd starts");
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.groupEnd();

// console.time("time starts now");

// let dnaMatches = 0;
// for (let i = 0; i < 1_000_000; i++) {
//   dnaMatches++;
// }
// console.timeEnd();

console.log("Chaicode");
console.log("Chaicode");
console.log("Chaicode");
console.log("Chaicode");
