let colors = ["green", "blue", "pink"]
console.log (colors[0])
console.log (colors)

let person = {
    Name: "Allie Efferson",
    Age: 35,
    isEnrolled: "Software Engineer"
}

let students = [
    {Name: "Justin Hoffman", 
    Age: 33, 
    isEnrolled: true},
    {Name: "Jane Smith", 
    Age: 22, 
    isEnrolled: false},
    {Name: "Daniel Brown", 
    Age: 30, 
    isEnrolled: true},
]

// Information on All Studnets
console.log (students)
console.log (students[0].Name)
console.log (students[1].Age)
console.log (students[2].isEnrolled)

// Data Typles of 1st Students Attributes
console.log(typeof students[0].Name)
console.log(typeof students[0].Age)
console.log(typeof students[0].isEnrolled)