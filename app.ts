type Student = {
  name: string;
  id: number;
  grades: number[];
  avegGrade: number[];
};

const student: Student[] = [
  {
    name: "Talha",
    id: 123,
    grades: [90, 56, 78, 80, 79.87],
    avegGrade: [],
  },
];

// console.log(student);
student.forEach((student: any) => {
  let newGrade = student.grades.reduce((prev: number, curr: number) => {
    return prev + curr;
  });

  let avg = newGrade / student.grades.length;
  // console.log(newGrade);
  // student.avegGrade.push(newGrade)
  student.avegGrade.push(avg);

  // console.log(student);
});
console.log(student);
