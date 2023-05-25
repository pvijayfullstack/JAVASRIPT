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

var highestMarks = a[0].marks
var sendHighestMarks = []

for(var i = 0; i < a.length; i++){
    if(highestMarks > a[i].marks){
        sendHighestMarks = a[i].marks
        break
    }
}

//console.log(sendHighestMarks)


fstud = students.filter(stud => 
stud.marks === sendHighestMarks).map( (item) => item.name)

console.log(fstud)


