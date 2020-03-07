const student = [
    {id: 21, name: 'saimon'},
    {id: 22, name: 'reaz'},
    {id: 23, name: 'raju'},
    {id: 24, name: 'yeasin'}
];

const names = student.map(s =>s.name);
console.log(names);
const ids = student.map(s =>s.id);
console.log(ids);
const bigger = student.filter(s => s.id>23);
console.log(bigger);
const biggerOne = student.find(s =>s.id>22);
console.log(biggerOne);