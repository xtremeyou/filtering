const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];
//create a function (arrow function cause its cool atm, lol. And give it a filter method that returnsa grades above 70
//when filtering from variable/array grades)
passingGrades = grades.filter(grade => grade >= 70); //made mistake of not being literal, which left out grade 70
//then console.log the function
console.log(passingGrades)

//Anonymous Function
const passingGrades = function (grades, foundNewgrades) {
  const passingGrades = grades.filter(function (grade) {
    return grade >= 70;
  });
  foundNewgrades(passingGrades);
  return passingGrades;
};

passingGrades(grades, function (newGrades) {
    console.log("new Grades are:", newGrades);
  });

  