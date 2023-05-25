how to sort an array of objects based on a specific property in JavaScript:

const students = [
  { name: 'John', age: 20 },
  { name: 'Alice', age: 22 },
  { name: 'Bob', age: 19 },
  { name: 'Jane', age: 21 }
];

function sortStudentsByAge(studentArray) {
  return studentArray.sort((a, b) => a.age - b.age);
}

const sortedStudents = sortStudentsByAge(students);

console.log('Sorted Students:');
console.log(sortedStudents);
