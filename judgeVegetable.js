function judgeVegetable(vegetables, metric) {
  let bestVeggie = vegetables.reduce((max, vegetable) =>
    max[metric] > vegetable[metric] ? max : vegetable
  );
  return bestVeggie.submitter;
}

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";
judgeVegetable(vegetables, metric);
