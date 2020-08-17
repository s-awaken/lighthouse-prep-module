function repeatNumbers(data) {
  for (let i = 0; i < data.length; i++) {
    data[i][0].toString().repeat(data[i][1]);
  }
}

repeatNumbers([[1, 10]]);
repeatNumbers([
  [1, 2],
  [2, 3],
]);
repeatNumbers([
  [10, 4],
  [34, 6],
  [92, 2],
]);
