// console.log('Start long calculations');
// for (let i = 0; i < 100000000; i++) {
//     const newDate = new Date(i);
// }
// console.log('End long calculations');
// // Start long calculations
// // End long calculations

// JSON -> Объект.
console.log(JSON.parse(`{"name": "Slava", "surname": "Belkin","age": 20, practice: { "place": "IKGT", "hours":47 }}`));
// {
// name: 'Slava',
// surname: 'Belkin',
// age: 20,
// practice: {
// place: 'IKTG',
// hours: 47,
// __proto__: Object
// },
// __proto__: Object
// }
console.log(JSON.parse('["Belkin", "Ivanov", "Petrov"]')); // ["Belkin", "Ivanov", "Petrov"]