
const testScores = [85, 92, 60, 78, 95, 70, 88, 72, 68, 91];


function filterPassingScores(score) {
  return score >= 70;
}


const passingScores = testScores.filter(filterPassingScores);

console.log("Passing Students scores:", passingScores);


