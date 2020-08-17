function checkAir(samples, threshold) {
  let dirty = 0;
  let clean = 0;
  for (let sample = 0; sample < samples.length; sample++) {
    if (samples[sample] === "dirty") {
      dirty++;
    }
    if (samples[sample] === "clean") {
      clean++;
    }
  }
  if (threshold > dirty / (dirty + clean)) {
    return "clean";
  } else {
    return "polluted";
  }
}
console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
