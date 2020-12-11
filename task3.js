// Напиши функцию findBestEmployee(employees),
// которая принимает объект сотрудников и возвращает имя самого
// продуктивного(который выполнил больше всех задач).Сотрудники и кол - во
// выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".

const findBestEmployee = function (employees) {
  const bestEmployee = Object.entries(employees)
  let bestName = bestEmployee[0][0]
  let bestScore = bestEmployee[0][1]

  for (let i = 1; i < bestEmployee.length; i += 1) {
    if (bestScore < bestEmployee[i][1]) {
      // bestScore = bestEmployee[i][1]
        bestName= bestEmployee[i][0]
    }
  }
  // return `${bestName}: ${bestScore}`
  return bestName
};


console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux