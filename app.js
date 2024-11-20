var student = [
    {
        name: "Talha",
        id: 123,
        grades: [90, 56, 78, 80, 79.87],
        avegGrade: [],
    },
];
// console.log(student);
student.forEach(function (student) {
    var newGrade = student.grades.reduce(function (prev, curr) {
        return prev + curr;
    });
    var avg = newGrade / student.grades.length;
    // console.log(newGrade);
    // student.avegGrade.push(newGrade)
    student.avegGrade.push(avg);
    // console.log(student);
});
console.log(student);
