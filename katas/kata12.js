const organizeInstructors = function (instructors) {
  // Put your solution here
  let organized = {};
  for (const instructor of instructors) {
    const names = [];
    organized[instructor.course];
    if (Object.keys(organized).toString() === instructor.course) {
      organized[instructor.course] = names.push(instructor.name);
    } else {
      organized[instructor.course] = instructor.name;
    }
  }
  return organized;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
