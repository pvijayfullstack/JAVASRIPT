const students = [
  {name: "vijay", marks: 100}, 
  {name: "vija1", marks: 90}, 
  {name: "vija2", marks: 90},
  {name: "vijay3",marks: 100}, 
  {name: "vija4", marks: 70}, 
  {name: "vija5", marks: 80},
  {name: "vija5", marks: 90} 
  ]

a = students.sort( (a,b) => b.marks - a.marks )
console.log(a)


