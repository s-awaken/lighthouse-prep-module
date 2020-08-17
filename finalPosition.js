const moves = ["north", "north", "west", "west", "north", "east", "north"];

console.log(finalPosition(moves));

function finalPosition(moves) {
  const position = [0, 0];
  for (const move of moves) {
    if (move === "north") {
      position[1] += 1;
    }
    if (move === "south") {
      position[1] -= 1;
    }
    if (move === "east") {
      position[0] += 1;
    }
    if (move === "west") {
      position[0] -= 1;
    }
  }
  return position;
}
